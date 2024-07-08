# Preliminary information
Developed to assist co-workers in reporting incidents

[Página](https://genariocoliveira.github.io/preliminary-information/)


~~~html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script defer>
        function MascaraHoraCarro() {
            let horaCarro = document.getElementById('inHorarioCarro');
            let horaC = horaCarro.value;

            if (horaC.length == 2) {
                horaC = horaC + ":";
                horaCarro.value = horaC;
            }
        }

        function DataViagem() {
            let frm = document.querySelector('form');
            let dataViagem = frm.inDataViagem;
            let dateV = dataViagem.value;
            if (dateV.length == 2 || dateV.length == 5) {
                dateV = dateV + "/";
                dataViagem.value = dateV;
            }
        }

        function HoraSaida() {
            let horaSaida = document.getElementById('inHorarioSaida');
            let HourExit = horaSaida.value;
            if (HourExit.length == 2) {
                HourExit = HourExit + ":";
                horaSaida.value = HourExit;
            }
        }

        function abrirModal() {
            const frm = document.querySelector('form');
            const modal = document.getElementById('modal');
            const textoGerado = document.getElementById('textoGerado');
            const btnCopiar = document.getElementById('btnCopiar');

            const inMecanico = frm.inMotoristaMecanico.value;
            const inSos = frm.inCarroSos.value;
            const inCarDefeito = frm.inCarroDefeito.value;
            const inHorarioCar = frm.inHorarioCarro.value;
            const linha = frm.inLinha.value;
            const motorista = frm.inMotorista.value;
            const dataViagem = frm.inDataViagem.value;
            const localSos = frm.inLocalSos.value;
            const horaSaida = frm.inHorarioSaida.value;
            const soubeSos = frm.inSoube.value;
            const motivo = frm.inMotivo.value;

            if (!inMecanico) {
                alert('Informe todos os campos obrigatórios.');
                return;
            }

            const texto = `SOS em andamento, informações preliminares. O ${inMecanico} saíram/saiu no carro ${inSos} para socorrer o carro ${inCarDefeito}, que está cumprindo o horário de ${inHorarioCar}, ${linha}.

- Motorista: ${motorista}
- Data da viagem: ${dataViagem}
- Local do Socorro: ${localSos}
- Motivo do Socorro: ${motivo}.
- Horário da saída: ${horaSaida}
- Como soube deste socorro: ${soubeSos}`;

            textoGerado.innerText = texto;
            modal.classList.remove('hidden');
            modal.classList.add('flex');

            // Limpar formulário
            frm.reset();
            frm.inMotoristaMecanico.focus();

            btnCopiar.addEventListener('click', () => {
                navigator.clipboard.writeText(texto).then(() => {
                    const originalText = btnCopiar.innerText;
                    btnCopiar.innerText = 'TEXTO COPIADO';
                    setTimeout(() => {
                        btnCopiar.innerText = originalText;
                    }, 2000);
                }).catch(err => {
                    console.error('Erro ao copiar texto:', err);
                });
            });
        }

        function fecharModal() {
            const modal = document.getElementById('modal');
            modal.classList.remove('flex');
            modal.classList.add('hidden');
        }
    </script>
    <link rel="shortcut icon" href="img/icons8-notícias-100.png" type="image/x-icon">
    <title>Informações Preliminares</title>
</head>

<body class="bg-[#ebe9e9]">
    <main class="min-h-screen flex justify-center items-center">
        <div class="container mx-auto">
            <div class="w-full flex justify-center items-center">
                <form action="#" class="bg-[#f6f0ed] px-6 py-10 rounded-md w-[600px] shadow-lg font-semibold text-[#3581bb] mt-8">
                    <div class="grid sm:grid-cols-2 gap-4">
                        <label for="inMotoristaMecanico">Motorista / Mecânico<span class="text-rose-900 text-[1rem]">*</span>
                            <input type="text" name="inMotoristaMecanico" id="inMotoristaMecanico"
                                class="block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-300 focus:outline-none focus:border-[#3581bb] focus:ring-1 focus:ring-[#3581bb]"
                                placeholder="Quem está socorrendo?" autofocus required>
                        </label>
                        <label for="inCarroSos">Carro SOS<span class="text-rose-900 text-[1rem]">*</span>
                            <input type="text" name="inCarroSos" id="inCarroSos"
                                class="block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                placeholder="Digite o número do carro" maxlength="4" required>
                        </label>
                    </div>

                    <div class="grid sm:grid-cols-2 gap-4 mt-3">
                        <label for="inCarroDefeito">Carro com defeito<span class="text-rose-900 text-[1rem]">*</span>
                            <input type="text" name="inCarroDefeito" id="inCarroDefeito"
                                class="block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-300 focus:outline-none focus:border-[#3581bb] focus:ring-1 focus:ring-[#3581bb]"
                                placeholder="Qual carro está com defeito?" required>
                        </label>
                        <label for="inHorarioCarro">Horário do carro<span class="text-rose-900 text-[1rem]">*</span>
                            <input type="text" name="inHorarioCarro" id="inHorarioCarro"
                                class="block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                placeholder="00:00" maxlength="5" onkeyup="MascaraHoraCarro()" required>
                        </label>
                    </div>

                    <div class="grid sm:grid-cols-2 gap-4 mt-3">
                        <label for="inLinha">Linha<span class="text-rose-900 text-[1rem]">*</span>
                            <input type="text" name="inLinha" id="inLinha"
                                class="block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-300 focus:outline-none focus:border-[#3581bb] focus:ring-1 focus:ring-[#3581bb]"
                                placeholder="Digite a linha" required>
                        </label>
                        <label for="inMotorista">Motorista<span class="text-rose-900 text-[1rem]">*</span>
                            <input type="text" name="inMotorista" id="inMotorista"
                                class="block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                placeholder="Digite o nome do motorista" required>
                        </label>
                    </div>

                    <div class="grid sm:grid-cols-2 gap-4 mt-3">
                        <label for="inDataViagem">Data da viagem<span class="text-rose-900 text-[1rem]">*</span>
                            <input type="text" name="inDataViagem" id="inDataViagem"
                                class="block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-300 focus:outline-none focus:border-[#3581bb] focus:ring-1 focus:ring-[#3581bb]"
                                placeholder="00/00/0000" onkeyup="DataViagem()" maxlength="10" required>
                        </label>
                        <label for="inLocalSos">Local do Socorro<span class="text-rose-900 text-[1rem]">*</span>
                            <input type="text" name="inLocalSos" id="inLocalSos"
                                class="block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                placeholder="Digite o local do SOS" required>
                        </label>
                    </div>

                    <div class="grid sm:grid-cols-2 gap-4 mt-3">
                        <label for="inHorarioSaida">Horário da saída<span class="text-rose-900 text-[1rem]">*</span>
                            <input type="text" name="inHorarioSaida" id="inHorarioSaida"
                                class="block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-300 focus:outline-none focus:border-[#3581bb] focus:ring-1 focus:ring-[#3581bb]"
                                placeholder="00:00" onkeyup="HoraSaida()" maxlength="5" required>
                        </label>
                        <label for="inSoube">Como soube deste SOS<span class="text-rose-900 text-[1rem]">*</span>
                            <input type="text" name="inSoube" id="inSoube"
                                class="block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                placeholder="Motorista ou Sigla?" required>
                        </label>
                    </div>

                    <div class="grid gap-4 mt-3">
                        <label for="inMotivo">Digite o motivo do SOS<span class="text-rose-900 text-[1rem]">*</span>
                            <textarea name="inMotivo" id="inMotivo" cols="0"
                                class="w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                rows="0" placeholder="Digite o motivo do Socorro" required></textarea>
                        </label>
                    </div>

                    <div class="grid gap-4 mt-3">
                        <input type="button" value="GERAR TEXTO"
                            class="bg-[#FCB07E] w-full py-3 rounded-md hover:bg-[#EE8F50] duration-300" onclick="abrirModal()">
                    </div>
                </form>
            </div>

            <!-- Modal -->
            <div id="modal" class="hidden fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
                <div class="relative p-8 bg-white w-[600px] mx-auto mt-20 rounded-lg">
                    <div class="flex justify-end">
                        <button id="fecharModal" class="text-3xl font-semibold focus:outline-none" onclick="fecharModal()">&times;</button>
                    </div>
                    <div id="textoGerado" class="mt-4"></div>
                    <button id="btnCopiar"
                        class="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none">
                        COPIAR TEXTO
                    </button>
                </div>
            </div>
        </div>
    </main>
</body>

</html>

~~~
