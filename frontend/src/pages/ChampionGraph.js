import { Box, CardMedia, Container, Paper } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Papa from 'papaparse';
import React, { useCallback, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';


export const ChampionGraph = () => {
    const [championDataObject, setChampionDataObject] = useState(0);
    const [arrayOfChampionsNamesAndIndex, setArrayOfChampionsNamesAndIndex] = useState([])

    useEffect(() => {
        Papa.parse("/sheet.csv", {
            download: true,
            complete: function (results) {
                const champNames = []
                for (let i = 0; i < results.data.length - 1; i++) {
                    champNames.push({ label: results.data[i + 1][0], value: i })
                }
                setArrayOfChampionsNamesAndIndex(champNames)
                setChampionDataObject(results.data)
            }
        });
    }, [])
    const theme = useTheme()

    let location = window.location.href.split("/").pop()

    const findChampionIndex = useCallback((x) => {
        return x.label === location
    }, [location])


    const [datasets, setDatasets] = useState([{
        label: location,
        backgroundColor: theme.palette.main,
        borderColor: theme.palette.secondary.main,
        borderWidth: 2,
        data: [null]
    }])

    const [pic, setPic] = useState("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg");
    useEffect(() => {
        if (!championDataObject) return
        setDatasets([{
            label: location,
            backgroundColor: theme.palette.main,
            borderColor: theme.palette.secondary.main,
            borderWidth: 2,
            data: championDataObject[arrayOfChampionsNamesAndIndex.find(findChampionIndex).value + 1]?.slice(1, 10)
        }])
        setPic(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${location}_0.jpg`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [championDataObject])
    
    const graphData = {
        labels: ['H', 'H/Lv', 'M',
            'M/Lv', 'AD', 'AS', 'A', 'MR', 'R', 'MS'],
        datasets: datasets
    }
    
    const graphStyle = {

        backgroundColor: theme.palette.primary.main,
        elevation: '20',
        width: '70%',
        opacity: '0.80',
    }

    const backdropImgStyle = {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -100,
        filter: 'grayscale(.7)'
    }
    const containerStyle = {
        display: 'flex',
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '90px',
    }
    const foregroundStyle = {
        position: 'relative',
        width: '70%',
        zIndex: 100,
    }

    return (
        <Box style={foregroundStyle}>
            <Container style={containerStyle} maxWidth="xl">
                <Paper style={graphStyle} >
                    <Bar
                        data={graphData}
                        options={{
                            title: {
                                display: true,
                                text: location,
                                fontSize: 30,
                                fontColor: theme.palette.text.primary
                            },
                            legend: {
                                display: true,
                                position: 'right',
                                labels: {
                                    fontColor: theme.palette.text.primary,
                                    fontStyle: 'bold'
                                }
                            }
                        }}
                    />
                </Paper>
            </Container>
            <CardMedia style={backdropImgStyle}
                component="img"
                image={pic}
                alt="BG image"
            />
        </Box>
    )
}