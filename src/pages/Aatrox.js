import React, { useEffect, useState } from 'react'
import Papa from 'papaparse'
import { Bar } from 'react-chartjs-2';
import MultiSelect from "react-multi-select-component";


export const Aatrox = () => {
    const [championArr, setChampionArr] = useState(0);
    const [championList, setChampionList] = useState([])// used to create an array of all champmion names
    const [selected, setSelected] = useState([]);//chooses champion from dropdown menu
    const [champStats, setChampStats] = useState([])//list of the currently selected champions stats


    useEffect(() => {
        Papa.parse("/sheet.csv", {//parses the selected csv file into a 2d array
            download: true,
            complete: function (results) {
                const champNames = []
                for (let i = 0; i < results.data.length - 1; i++) {
                    champNames.push({ label: results.data[i + 1][0], value: i })
                }
                setChampionList(champNames)
                setChampionArr(results.data)
            }

        });
    }, [])
    const datasets = champStats.map((champStat, index) => ({
        label: 'Champion ' + champStats,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: champStat
    }));

    const state = {
        labels: ['Health', 'Health/ Lv', 'Mana',
            'Mana/ Lv', 'AD', 'AS', 'Armor', 'Magic Resist', 'Range', 'Move Speed'],
        datasets: datasets
    }


    useEffect(() => {
        try {
            let champArray = [championArr[3]]
            // for (let champ of selected) {
            //     let champSelect = champ["value"] + 1
            //     champArray.push(championArr[champSelect]);
            // }
            setChampStats(champArray)
            champArray[champArray.length - 1].shift()
            //console.log(champArray)

        }
        catch (err) {
            let errMsg = "Input is " + err;
            console.log(errMsg)
        }
    }, [selected])

    const mystyle = {
        height: "80vh"
    };
    const flexStyle = {
        display: "flex"
    }
    return (<>
            <MultiSelect
                options={championList}
                value={selected}
                onChange={setSelected}
                labelledBy={selected}
            />
            <div style={mystyle}>
                <Bar
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Champion Stats',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        </>
    )
}
