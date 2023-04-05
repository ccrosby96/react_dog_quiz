import logo from './logo.svg';
import './App.css';

function Quiz() {
    return (
        <div className="row">
            <div className= "col-2">

            </div>
            <div className= "col-8">
                <h1 className = "d-flex justify-content-center">My dogs!</h1>

                <h3 className = "d-flex justify-content-center">Meet my 5 dogs!</h3>
                <div className="text-center">
                    <img src="/Images/Grouppic.jpg"  className= "img-fluid" />
                </div>

                <p>Click on their profiles to learn more:</p>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link" href="/pset2/Pards.html">Pards</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pset2/Baby.html">Baby</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/pset2/Zeus.html">Zeus</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/pset2/joey_juliette.html">Joey and Juliette</a>
                    </li>
                </ul>


                <p>
                    <strong>Find out which dog you are here:</strong>
                    <a className="btn btn-primary ms-2" href="/pset2/Quiz4.html" role="button">Quiz</a>
                </p>


            </div>
            <div className= "col-2" >

            </div>


            </div>


    );
}

export default Quiz;
