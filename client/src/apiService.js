/**
 * apiService.js
 * 
 * Handles all communication with the FastAPI backend.
 * Matches the exact API structure from the backend.
 */

import config from '../config.json';
const API_BASE_URL = `http://${config.SERVER_IP}:${config.PORT}`;

class APIService {
  /**
   * Check if the backend server is healthy
   * GET /health
   */
  async checkHealth() {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      const data = await response.json();
      return {
        success: true,
        healthy: data.status === 'healthy' && data.calculator_initialized,
        data
      };
    } catch (error) {
      console.error('Health check failed:', error);
      return {
        success: false,
        healthy: false,
        error: error.message
      };
    }
  }

  /**
   * Get supported systems from backend
   * GET /systems/supported
   */
  async getSupportedSystems() {
    try {
      const response = await fetch(`${API_BASE_URL}/systems/supported`);
      const data = await response.json();
      return {
        success: true,
        systems: data.systems
      };
    } catch (error) {
      console.error('Failed to get supported systems:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Get valid parameter ranges for a specific system
   * GET /system/{system_type}/ranges
   * 
   * @param {string} systemType - e.g., "RZ-104-11"
   */
  async getParameterRanges(systemType) {
    try {
      const response = await fetch(`${API_BASE_URL}/system/${systemType}/ranges`);
      const data = await response.json();
      return {
        success: true,
        ranges: data.ranges,
        systemType: data.system_type
      };
    } catch (error) {
      console.error('Failed to get parameter ranges:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Main calculation method
   * POST /calculate
   * 
   * Sends parameters exactly as backend expects them
   */
  async calculate(params) {
    try {
      console.log('Sending to backend:', params);

      const response = await fetch(`${API_BASE_URL}/calculate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Calculation failed');
      }

      const data = await response.json();
      console.log('Received from backend:', data);

      return {
        success: true,
        data: data
      };
    } catch (error) {
      console.error('Calculation error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
}

// Export singleton instance
export default new APIService();