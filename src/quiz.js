import logo from './logo.svg';
import './App.css';

function Quiz() {
    return (
        <div className="quiz">

            <h1>My dogs!</h1>

            <h3>Meet my 5 dogs!</h3>
            <img src="/Images/Grouppic.jpg" width="500" height="350" />
            <p>Click on their profiles to learn more:</p>
            <a href="/pset2/Pards.html">Pards</a>
            <a href="/pset2/Baby.html">Baby</a>
            <a href="/pset2/Zeus.html">Zeus</a>
            <a href="/pset2/joey_juliette.html">Joey and Juliette</a>

            <p>
                <strong>Find out which dog you are here:</strong>
                <a href="/pset2/Quiz4.html">Quiz</a>
            </p>

        </div>
    );
}

export default Quiz;
