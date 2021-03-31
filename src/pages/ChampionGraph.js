import React, { useEffect, useState } from 'react';
import Papa from 'papaparse'
import { Bar } from 'react-chartjs-2';
import { useTheme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';


export const ChampionGraph = () => {
    const [championDataObject, setChampionDataObject] = useState(0);
    const [listofChampionsNamesAndIndex, setListofChampionsNamesAndIndex] = useState([])
    
    useEffect(() => {
        Papa.parse("/sheet.csv", {
            download: true,
            complete: function (results) {
                const champNames = []
                for (let i = 0; i < results.data.length - 1; i++) {
                    champNames.push({ label: results.data[i + 1][0], value: i })
                }
                setListofChampionsNamesAndIndex(champNames)
                setChampionDataObject(results.data)
            }
        });
    }, [])
    const theme = useTheme()

    let location = window.location.href.split("/").pop()
    const [selected] = useState({ label: location, value: listofChampionsNamesAndIndex.findIndex(x => x.label === location) + 1 })
    const datasets = [{
        label: location,
        backgroundColor: theme.palette.main,
        borderColor: theme.palette.accent,
        borderWidth: 2,
        data: championDataObject[selected.value+1]?.slice(1,10)
    }];
    
    const state = {
        labels: ['H', 'H/Lv', 'M',
            'M/Lv', 'AD', 'AS', 'A', 'MR', 'R', 'MS'],
        datasets: datasets //remember to delete the champion name from dataset
    }
    const mystyle = {
        backgroundColor: theme.palette.primary.main,
        elevation: '20'
    }

    return (
        <>
            
            <Paper style={mystyle} >
                <Bar 
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Champion Stats',
                            fontSize: 30,
                            fontColor: theme.palette.text.primary
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            labels:{
                            fontColor: theme.palette.text.primary,
                            fontStyle: 'bold'
                            }
                        }
                    }}
                />
            </Paper>
        </>

    )
}








