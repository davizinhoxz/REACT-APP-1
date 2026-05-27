import React, { useState } from 'react';

function Notas() {

    const [formData, setFormData] = useState({
        id: '',
        nome: '',
        disciplina: '',
        notaTeste: '',
        notaTrabalho: '',
        notaAtitudes: '',
        testes: '',
        trabalhos: '',
        atitudes: ''
    });

    const [notas, setNotas] = useState([]);
    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        setDadosSubmetidos(formData);

        const novaNota = {
            id: Date.now(),
            nome: formData.nome,
            disciplina: formData.disciplina,
            notaTeste: formData.notaTeste,
            notaTrabalho: formData.notaTrabalho,
            notaAtitudes: formData.notaAtitudes,
            testes: formData.testes,
            trabalhos: formData.trabalhos,
            atitudes: formData.atitudes
        };
        setNotas([...notas, novaNota]);
    }

    function limparFormulario() {
        setFormData({ id: '', nome: '', disciplina: '', notaTeste: '', notaTrabalho: '', notaAtitudes: '', testes: '', trabalhos: '', atitudes: '' });
        setDadosSubmetidos(null);
    }

    function calcularNotaFinal(dados) {
        return (
            (Number(dados.notaTeste) * Number(dados.testes) / 100) +
            (Number(dados.notaTrabalho) * Number(dados.trabalhos) / 100) +
            (Number(dados.notaAtitudes) * Number(dados.atitudes) / 100)
        ).toFixed(1);
    }

    function aprovacao(dados) {
        const notaFinal = calcularNotaFinal(dados);

        if (notaFinal >= 9.5) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }

    return (
        <div className="container mt-4">

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <div className="row p-2">
                        <div className="col-md-8">
                            <label>Nome do aluno:</label>
                            <input type="text" className="form-control"
                                value={formData.nome}
                                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                required />
                        </div>
                        <div className="col-md-4">
                            <label>Disciplina:</label>
                            <input type="text" className="form-control"
                                value={formData.disciplina}
                                onChange={(e) => setFormData({ ...formData, disciplina: e.target.value })}
                                required />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row p-2">
                        <div className="col-md-3">
                            <label>Nota dos Testes:</label>
                            <input type="number" className="form-control"
                                value={formData.notaTeste}
                                onChange={(e) => setFormData({ ...formData, notaTeste: e.target.value })} />
                        </div>
                        <div className="col-md-3">
                            <label>(%) Testes:</label>
                            <input type="number" className="form-control"
                                value={formData.testes}
                                onChange={(e) => setFormData({ ...formData, testes: e.target.value })} />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row p-2">
                        <div className="col-md-3">
                            <label>Nota dos Trabalhos:</label>
                            <input type="number" className="form-control"
                                value={formData.notaTrabalho}
                                onChange={(e) => setFormData({ ...formData, notaTrabalho: e.target.value })} />
                        </div>
                        <div className="col-md-3">
                            <label>(%) Trabalhos:</label>
                            <input type="number" className="form-control"
                                value={formData.trabalhos}
                                onChange={(e) => setFormData({ ...formData, trabalhos: e.target.value })} />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row p-2">
                        <div className="col-md-3">
                            <label>Nota das Atitudes:</label>
                            <input type="number" className="form-control"
                                value={formData.notaAtitudes}
                                onChange={(e) => setFormData({ ...formData, notaAtitudes: e.target.value })} />
                        </div>
                        <div className="col-md-3">
                            <label>(%) Trabalhos:</label>
                            <input type="number" className="form-control"
                                value={formData.atitudes}
                                onChange={(e) => setFormData({ ...formData, atitudes: e.target.value })} />
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mr-2">Calcular</button>
                <button type="button" className="btn btn-outline-secondary" onClick={limparFormulario}>Limpar</button>
            </form>

            {dadosSubmetidos && (
                <div className="card mt-4">
                    <div className="card-body">
                        <h5 className="card-title">Dados Recebidos</h5>
                        <p><strong>Nome do Aluno:</strong> {dadosSubmetidos.nome}</p>
                        <p><strong>Disciplina:</strong> {dadosSubmetidos.disciplina}</p>
                        <p><strong>Nota dos Testes:</strong> {dadosSubmetidos.notaTeste} ({dadosSubmetidos.testes}%)</p>
                        <p><strong>Nota dos Trabalhos:</strong> {dadosSubmetidos.notaTrabalho} ({dadosSubmetidos.trabalhos}%)</p>
                        <p><strong>Nota das Atitudes:</strong> {dadosSubmetidos.notaAtitudes} ({dadosSubmetidos.atitudes}%)</p>
                        <p><strong>Nota Final:</strong> {calcularNotaFinal(dadosSubmetidos)}</p>
                        <p><strong>Resultado:</strong> {aprovacao(dadosSubmetidos)}</p>
                    </div>
                </div>
            )}

            <ul className="list-group mt-4">
                {notas.map((nota) => (
                    <li key={nota.id} className="list-group-item">
                        <h5>{nota.nome} — {nota.disciplina}</h5>
                        <p>Testes: {nota.notaTeste} ({nota.testes}%) | Trabalhos: {nota.notaTrabalho} ({nota.trabalhos}%) | Atitudes: {nota.notaAtitudes} ({nota.atitudes}%)</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Notas;