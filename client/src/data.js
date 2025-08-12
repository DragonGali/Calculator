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
        treeView: {

            labels: [
                "Pathogen Type" , "1-Log Dose [mJ/cm2]"
            ],
            
            treeData : [
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
            ]},

        tableView: {

            labels: [
                "Pathogen Type" , "1-Log Dose [mJ/cm2]"
            ],
            
            tableData : [
                { name: 'Aeromonas Handrohenus', oneLog: 1.0, twoLog: 2.0, threeLog: 4.6 },
                { name: 'Aeromonas Handrophila', oneLog: 1.1, twoLog: 2.6, threeLog: 3.9 },
                { name: 'Bacillus Anthracis', oneLog: 8.7, twoLog: 17.4, threeLog: 26.1 },
                { name: 'Bacillus Cereus', oneLog: 1.8, twoLog: 3.6, threeLog: 5.4 },
                { name: 'Bacillus Subtilis', oneLog: 2.2, twoLog: 4.4, threeLog: 6.6 },
                { name: 'Campylobacter Jejuni', oneLog: 1.5, twoLog: 3.0, threeLog: 4.5 },
                { name: 'Clostridium Perfringens', oneLog: 3.0, twoLog: 6.0, threeLog: 9.0 },
                { name: 'E. Coli', oneLog: 3.0, twoLog: 6.0, threeLog: 9.0 },
                { name: 'Enterococcus Faecalis', oneLog: 4.6, twoLog: 9.2, threeLog: 13.8 },
                { name: 'Legionella Pneumophila', oneLog: 0.9, twoLog: 1.8, threeLog: 2.7 },
                { name: 'Listeria Monocytogenes', oneLog: 2.4, twoLog: 4.8, threeLog: 7.2 },
                { name: 'Pseudomonas Aeruginosa', oneLog: 5.5, twoLog: 11.0, threeLog: 16.5 },
                { name: 'Salmonella Typhimurium', oneLog: 2.5, twoLog: 5.0, threeLog: 7.5 },
                { name: 'Staphylococcus Aureus', oneLog: 2.2, twoLog: 4.4, threeLog: 6.6 },
                { name: 'Streptococcus Faecalis', oneLog: 3.8, twoLog: 7.6, threeLog: 11.4 }
            ]
        },

        buttons : ["Display Tree View", "Display Table View", "Full Table"]
    },
}

export default data;