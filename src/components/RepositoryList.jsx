import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/hirvin-faria/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {
                    repositories.map(repository => (
                        <RepositoryItem repository={repository} key={repositories.name}/>
                    ))
                }
            </ul>
        </section>
    )
}