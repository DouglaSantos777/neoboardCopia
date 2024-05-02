import '../homepage/HomePage.css'
import React, { useEffect, useState } from 'react'
// @ts-ignore
import { auth } from '../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../components/loading/Loading.tsx';
import Aside from '../../components/aside/Aside.tsx';
import Home from '../../layout/dashboard/Home.tsx';
import Produtos from '../../layout/produtos/Produtos.tsx';
import Regioes from '../../layout/regioes/Regioes.tsx';
import Financeiro from '../../layout/financeiro/Financeiro.tsx';
import Relatorio from '../../layout/relatorio/Relatorio.tsx';
import Funcionarios from '../../layout/funcionarios/Funcionarios.tsx';
import FAQ from '../../layout/FAQ/FAQ.tsx';

const HomePage = () => {
    const savedComponent = sessionStorage.getItem('currentComponent');
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [currentComponent, setCurrentComponent] = useState<string>(savedComponent || 'Dashboard');

    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        document.title = `${user?.displayName + " | NeoBoard" || "Home"}, bem vindo!!`;
    }, [user]);

    useEffect(() => {
        if (user) {
            setName(user.displayName ?? "");
            setEmail(user.email ?? "");
            setPhoto(user.photoURL ?? "img/no_profile.png");
        }
    }, [user]);

    useEffect(() => {
        if (savedComponent !== null) {
            setCurrentComponent(savedComponent);
        } else {
            setCurrentComponent('Dashboard'); // Define o valor padrão como 'Dashboard'
        }
    }, []);

    const changeComponentStorage = (componentName: string) => {
        sessionStorage.setItem('currentComponent', componentName);
        setCurrentComponent(componentName); // Defina o estado com o novo valor
    };

    const renderComponent = () => {
        switch (currentComponent) {
            case 'Dashboard':
                return <Home user={{ displayName: user ? user.displayName || undefined : undefined }} />;
            case 'Produtos':
                return <Produtos />;
            case 'Regioes':
                return <Regioes />;
            case 'Funcionarios':
                return <Funcionarios />;
            case 'Financeiro':
                return <Financeiro />;
            case 'Relatorio':
                return <Relatorio />;
            case 'FAQ':
                return <FAQ />;
            default:
                return <Home user={{ displayName: user ? user.displayName || undefined : undefined }} />;
        }
    };

    if (loading) return <Loading />;

    return (
        <>
            <div id="homepage">
                <Aside user={user} changeComponent={(component: string) => changeComponentStorage(component)} />
                <div id="home-screen">
                    {renderComponent()}
                </div>
            </div>
        </>
    )
}

export default HomePage;