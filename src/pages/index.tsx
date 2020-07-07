import React, { useEffect, useState } from 'react';
import '../styles/index.css';

function Index() {
    const [date, setDate] = useState(null);
    useEffect(() => {
        async function getDate() {
            const res = await fetch('/api/date');
            const newDate = await res.text() ;
            setDate(newDate as any);
        }
        getDate().then(r => r);
    }, []);
    return (
        <main>
            <p>Hello , Gatsby </p>
            <p>{date ? date : 'Loading date...'}</p>
        </main>
    );
}

export default Index;
