const frm = document.querySelector('form')
const resp = document.querySelector('#inResposta')
frm.inMotoristaMecanico.focus()

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const inMecanico = frm.inMotoristaMecanico.value
    const inSos = frm.inCarroSos.value
    const inCarDefeito = frm.inCarroDefeito.value
    const inHorarioCar = frm.inHorarioCarro.value
    const linha = frm.inLinha.value
    const motorista = frm.inMotorista.value
    const dataViagem = frm.inDataViagem.value
    const localSos = frm.inLocalSos.value
    const horaSaida = frm.inHorarioSaida.value
    const soubeSos = frm.inSoube.value
    const motivo = frm.inMotivo.value

    if (!inMecanico) {
        alert('Informe todos os campos obrigatórios.')
    }

    resp.innerText = `SOS em andamento, informações preliminares. O ${inMecanico} está saindo no carro ${inSos} para prestar socorro ao veículo ${inCarDefeito}, que está cumprindo o horário de ${inHorarioCar}, ${linha}.

    - Motorista: ${motorista}
    - Data da viagem: ${dataViagem}
    - Local do Socorro: ${localSos}
    - Motivo do Socorro: ${motivo}.
    - Horário da saída: ${horaSaida}
    - Como soube deste socorro: ${soubeSos}`


    frm.inMotoristaMecanico.value = ''
    frm.inCarroSos.value = ''
    frm.inCarroDefeito.value = ''
    frm.inHorarioCarro.value = ''
    frm.inLinha.value = ''
    frm.inMotorista.value = ''
    frm.inDataViagem.value = ''
    frm.inLocalSos.value = ''
    frm.inHorarioSaida.value = ''
    frm.inSoube.value = ''
    frm.inMotivo.value = ''

    frm.inMotoristaMecanico.focus()
})

function MascaraHoraCarro() {
    let horaCarro = document.getElementById('inHorarioCarro')
    let horaC = horaCarro.value

    if (horaC.length == 2) {
        horaC = horaC + ":"
        horaCarro.value = horaC
    }
}

function DataViagem() {
    let dataViagem = frm.inDataViagem
    let dateV = dataViagem.value
    if (dateV.length == 2) {
        dateV = dateV + "/"
        dataViagem.value = dateV
    }
    if (dateV.length == 5) {
        dateV = dateV + "/"
        dataViagem.value = dateV
    }
}

function HoraSaida() {
    let horaSaida = frm.inHorarioSaida
    let HourExit = horaSaida.value
    if (HourExit.length == 2) {
        HourExit = HourExit + ":"
        horaSaida.value = HourExit
    }
}