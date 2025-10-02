/**
 * useAppState.js
 * 
 * Custom hook for managing application state and backend communication.
 * Automatically syncs with backend on state changes.
 */

import { useState, useCallback, useEffect, useRef } from 'react';
import apiService from '../apiService';


const useAppState = () => {

  const [isCalculating, setIsCalculating] = useState(false);
  const [lastError, setLastError] = useState(null);
  const [isServerHealthy, setIsServerHealthy] = useState(false);
  const [parameterRanges, setParameterRanges] = useState(null);

  // Main application state - matches backend parameter names
  const [appState, setAppState] = useState({
    // Maps to backend fields
    Application: "Municipal EPA",
    Model: "RZ-104",
    Module: "11",
    Branch: "1",
    Position: "Vertical",
    "Lamp Type": "Regular",
    Efficiency: 80.0,
    "Relative Drive": 90.0,
    "UVT-1cm@254nm": 85.0,
    "UVT-1cm@215nm": 85.0,
    "Flow Rate": 100.0,
    "Flow Units": "m3/h",
    "D-1Log": 18.0,
    Pathogen: "Cryptosporidium",
    
    // Results from backend
    results: {
      "Reduction Equivalent Dose": null,
      "Head Loss": null,
      "Maximum Electrical Power": null,
      "Average Lamp Power Consumption": null,
      "Expected LI": null,
      calculation_details: null
    },

    ranges: parameterRanges

  });

  
  // Prevent calculation on initial mount
  const isInitialMount = useRef(true);
  // Debounce timer
  const calculateTimer = useRef(null);

  // Check server health on mount
  useEffect(() => {
    checkServerHealth();
  }, []);

  const checkServerHealth = async () => {
    const result = await apiService.checkHealth();
    setIsServerHealthy(result.healthy);
    if (!result.healthy) {
      setLastError('Backend server is not responding. Please start it: cd NewBackend && uv run python server.py');
    } else {
      setLastError(null);
    }
    return result.healthy;
  };

  // Load parameter ranges when system type changes
  useEffect(() => {
    const systemType = `${appState.Model}-${appState.Module}`;
    if (isServerHealthy) {
      apiService.getParameterRanges(systemType).then(result => {
        if (result.success) {
          setParameterRanges(result.ranges);
        }
      });
    }
  }, [appState.Module, appState.Model, isServerHealthy]);

  /**
   * Calculate results by sending current state to backend
   */
  const calculateResults = useCallback(async () => {
    if (!isServerHealthy) {
      console.warn('Server not healthy, skipping calculation');
      return;
    }

    setIsCalculating(true);
    setLastError(null);

    // Prepare request body - only send fields backend expects
    const requestBody = {
      Application: appState.Application,
      Module: appState.Module,
      Model: appState.Model,
      Branch: appState.Branch,
      Position: appState.Position,
      "Lamp Type": appState["Lamp Type"],
      Efficiency: appState.Efficiency,
      "Relative Drive": appState["Relative Drive"],
      "UVT-1cm@254nm": appState["UVT-1cm@254nm"],
      "UVT-1cm@215nm": appState["UVT-1cm@215nm"],
      "Flow Rate": appState["Flow Rate"],
      "Flow Units": appState["Flow Units"],
      "D-1Log": appState["D-1Log"],
      Pathogen: appState.Pathogen
    };

    const result = await apiService.calculate(requestBody);

    if (result.success) {
      // Update results in state with backend response
      setAppState(prev => ({
        ...prev,
        results: {
          "Reduction Equivalent Dose": result.data["Reduction Equivalent Dose"],
          "Head Loss": result.data["Head Loss"],
          "Maximum Electrical Power": result.data["Maximum Electrical Power"],
          "Average Lamp Power Consumption": result.data["Average Lamp Power Consumption"],
          "Expected LI": result.data["Expected LI"],
          calculation_details: result.data.calculation_details
        }
      }));
    } else {
      setLastError(result.error);
    }

    setIsCalculating(false);
  }, [appState, isServerHealthy]);

  /**
   * Update state and trigger recalculation (debounced)
   * 
   * @param {object} updates - Object with fields to update
   */
  const updateState = useCallback((updates) => {
    console.log('State update:', updates);

    setAppState(prev => ({
      ...prev,
      ...updates
    }));

    // Clear existing timer
    if (calculateTimer.current) {
      clearTimeout(calculateTimer.current);
    }

    // Debounce calculation (wait 500ms after last change)
    calculateTimer.current = setTimeout(() => {
      if (!isInitialMount.current && isServerHealthy) {
        calculateResults();
      }
    }, 500);
  }, [calculateResults, isServerHealthy]);

  // Mark that initial mount is complete
  useEffect(() => {
    if (isInitialMount.current && isServerHealthy) {
      isInitialMount.current = false;
      // Do initial calculation
      calculateResults();
    }
  }, [isServerHealthy, calculateResults]);

  /**
   * Manual recalculation trigger (immediate, no debounce)
   */
  const recalculate = useCallback(() => {
    if (calculateTimer.current) {
      clearTimeout(calculateTimer.current);
    }
    calculateResults();
  }, [calculateResults]);

  return {
    appState,
    updateState,
    recalculate,
    isCalculating,
    lastError,
    isServerHealthy,
    checkServerHealth,
    parameterRanges
  };
};

export default useAppState;