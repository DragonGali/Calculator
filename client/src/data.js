import PlotFigures from "./Components/PlotFigures";

const data = {

    options: [
        'Full Range UV Systems',
        'Medium Pressure UV Systems',
        'Decholoration | Ozone Decomposition'
    ],

    modules: [
        { value: "RZ-163", label: "RZ-163" },
        { value: "RZ-163-UHP", label: "RZ-163-UHP" },
        { value: "RZ-104", label: "RZ-104" },
        { value: "RZ-300", label: "RZ-300" },
        { value: "WW module", label: "WW module" }
    ],
    model: [{value: "11", label: "11"}, {value: "12", label: "12"}, {value: "13", label: "13"}, {value: "14", label: "14"}],

    HODButtons: ['Regular', 'Ozone Free', 'VUV'],

    CalculatorVersionButtons: ['Developer', 'Marketing'],

    PlotFiguresButtons: ['PlotPlot Red = f(UVT)', 'Plot Red = f(Flow)', 'Plot Red = f(Rel.Drive)'],

    Specifications: {
        top: [
            ['Lamp Efficiency:', 25 , 100, '[% Efficiency]'],
            ['Relative Drive:', 40, 100, '[% Power]'],
            ['UVT-1cm @254nm:', 25, 99, '[%-1cm]'],
            ['UVT-1cm @215nm:', 0, 99, '[%-1cm]']
        ],

        bottom: {
                fieldName: "Flow rate:",

                options: [
                    {value: "[m³/hr]", label: "[m³/hr]"},
                    {value: "[US GPM]", label: "[US GPM]"}],

                ranges: [{min: 30, max: 360}, {min: 132, max: 1585}],

                buttons: ["Reset To Default Values", "Flow For Target Dose"]
        }

        
        
    }
}

export default data;