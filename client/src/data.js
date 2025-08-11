import PathogenReduction from "./Components/PathogenReduction";
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
    },

    Results: [
        {fieldName: "Reduction Equivalent Dose (RED):", value: 67.6, scale: "[mj/cm²]"},
        {fieldName: "Head Loss (on HOD Systems Only):", value: 0.03, options: [{value: "[m/H₂O]", label: "[m/H₂O]"}, {value: "[cm/H₂O]", label: "[cm/H₂O]"}, {value: "[in/H₂O]", label: "[in/H₂O]"}, {value: "[bar]", label: "[bar]"}, {value: "[PSI]", label: ["PSI"]}]},
        {fieldName: "Maximum Electrical Power:", value: 1.705, scale: "[kW]"},
        {fieldName: "Est. avg. lamp power consumption:", value: 1.534, scale: "[kW]"}
    ],

    PathogenReduction: {
        treeView: [
                    {
                    label: 'Deciduous',
                    children: [
                    { label: 'Birch' },
                    {
                        label: 'Maple',
                        children: [
                        { label: 'Field maple' },
                        { label: 'Red maple' },
                        { label: 'Sugar maple' }
                        ]
                    },
                    { label: 'Oak' }
                    ]
                },
                {
                    label: 'Coniferous',
                    children: [
                    { label: 'Cedar' },
                    { label: 'Pine' },
                    { label: 'Spruce' }
                    ]
                },
                {
                    label: 'Non-trees',
                    children: [
                    { label: 'Bamboo' },
                    { label: 'Cactus' },
                    { label: 'Fern' }
                    ]
                }
            ]
    }
}

export default data;