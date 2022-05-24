function desenharGraficoHistograma() {

    let busca = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1BYf0Y9m-LKUicfr5MsrTa4anckk3sdpU2tcv6IeJ2oI/edit?usp=sharing')

    busca.send(resultadoDaBusca)
    
    function resultadoDaBusca(resultado) {
        let tabela = resultado.getDataTable();

        
        let opcoes = {
            title: 'Distribuição de clientes por idade',
            legend: 'none',
            titleTextStyle: {
                color: '#5e5851',
                fontType: 'Arial',
                fontSize: 18
            },
            width: 900,
            height: 500,
            vAxis: {
                gridlines: {
                    color: 'transparent'
                }
            },
            histogram: {
                bucketSize: 5,
                hideBucketItems: true,
                minValue: 0,
                maxValue: 70
            },
            bar: {
                gap: 0
            }
        }
        
        let grafico = new google.visualization.Histogram(document.querySelector('#graficoHistograma'))
        grafico.draw(tabela, opcoes)
    }

}