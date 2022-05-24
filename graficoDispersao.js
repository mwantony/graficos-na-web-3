function desenharGraficoDispersao() {

    let busca = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1BYf0Y9m-LKUicfr5MsrTa4anckk3sdpU2tcv6IeJ2oI/edit?usp=sharing'); 


    busca.send(resultadoDaBusca);

    function resultadoDaBusca(resultados) {
        var tabela = resultados.getDataTable();

        let opcoes = {
            title: 'Relação entre os gastors e limite de crédito dos clientes',
            titleTextStyle: {
                fontType: 'Arial',
                fontSize: 20,
                color: '#5e5851'
            },
            width: 900,
            height: 500,
            vAxis: {
                format: 'currency',
                gridlines: {
                    color: 'transparent'
                },
                title: 'Limite de crédito'
            },
            hAxis: {
                format: 'currency',
                title: 'Gasto',
                gridlines: {}
            },
            legend: 'none',
            trendlines: {
                0: {
                    color: 'purple',
                    lineWidth: 6,
                    opacity: 0.4,
                    type: 'linear'
                }
             
            } 

        }

        var grafico = new google.visualization.ScatterChart(document.querySelector('#graficoDispersao'));
        grafico.draw(tabela, opcoes)
    };
};
