import Card from "./Card";

const assuntos = [
    {
        nome: "Disciplina 1",
        aulas: [{ nome: "Aula 1", concluido: false }, { nome: "Aula 2", concluido: true }, { nome: "Aula 3", concluido: false }, { nome: "Aula 4", concluido: true },],
    },
    {
        nome: "Disciplina 2",
        aulas: [{ nome: "Aula 1", concluido: true }, { nome: "Aula 2", concluido: true }, { nome: "Aula 3", concluido: true }],
    },
    {
        nome: "Disciplina 3",
        aulas: [{ nome: "Aula 1", concluido: false }, { nome: "Aula 2", concluido: true }],
    },
    {
        nome: "Disciplina 4",
        aulas: [{ nome: "Aula 1", concluido: true }, { nome: "Aula 2", concluido: true }, { nome: "Aula 3", concluido: false }, { nome: "Aula 4", concluido: true },],
    },
]

const exercicios = [
    {
        nome: "Exercicio 1",
        data: "01/01/2024",
        detalhes: "Descricao do exercicio 1",
    },
    {
        nome: "Exercicio 2",
        data: "05/01/2024",
        detalhes: "Descricao do exercicio 2",
    },
    {
        nome: "Exercicio 3",
        data: "10/01/2024",
        detalhes: "Descricao do exercicio 3",
    },
    {
        nome: "Exercicio 4",
        data: "08/01/2024",
        detalhes: "Descricao do exercicio 4",
    },
]

const Conteudos = ({ disciplina }: any): any => {
    return (
        <div className="flex flex-wrap w-full items-baseline justify-around gap-3 mt-10">
            <Card nome={"Vídeo aulas"} assunto={assuntos} exercicios={exercicios} />
            <Card nome={"Em progresso"} assunto={assuntos} exercicios={exercicios} />
            <Card nome={"Exercícios Resolvidos"} assunto={assuntos} exercicios={exercicios}/>
        </div>
    );
};

export default Conteudos;
