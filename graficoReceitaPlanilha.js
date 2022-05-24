function desenharGraficoReceitaPlanilha() {
    
    let busca = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1C327sMuDCb9i95XMYoXLheT9wMbtQwKqq_6otifT9aM/edit?usp=sharing');
    
    busca.send(resultadoDaBusca);
    
    
    
    function resultadoDaBusca(resultado) {

        let tabela = resultado.getDataTable();
        let opcoes = {
            title: 'Receitas anuais de contas da planilha',
            titleTextStyle: {
                fontType: 'Arial',
                fontSize: 20,
                color: '#5e5851'
            },
            legend: {
                textStyle: {
                    color: '#928e8a',
                    fontSize: 16
                }
            },
            isStacked: 'percent',
            width: 900,
            height: 300,
            series: {
                1: {color: '#a6a6a6'},
                2: {color: '#a6a6a6'},
                3: {color: '#a6a6a6'}

            },
            vAxis: {
                gridlines: {
                    color: 'transparent'
                }
            },
            hAxis: {
                gridlines: {
                    color: 'tranparent'
                },
                format: 'yyyy'
            },

            chartArea: {
                right: 250,
                width: 500,
                height: 200   
            }

        };

        let grafico = new google.visualization.AreaChart(document.querySelector('#graficoReceitaPlanilha'))

        grafico.draw(tabela, opcoes);

        
    }

}


