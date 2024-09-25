import { Link} from "react-router-dom";

function Main() {
    
    return (
        <main>
            <div className="container_blogs">
                <section className="post">
                    <h2>Brochure</h2>
                    <p>It is a brochure for evidence GA1-240202501-AA1-EV03 Brochure where the student is giving his opinion about the technologist he is studying</p>
                    <Link rel="stylesheet" href="" to={"/brochure"}>Read More</Link>
                </section>
                <section className="post">
                    <h2>Chronicle</h2>
                    <p>This is a chronicle about Fredy Vega, CEO of Platzi, an iconic figure in the software industry and online education.</p>
                    <Link rel="stylesheet" href="" to={"/chronicle"}>Read More</Link>
                </section>
                <section className="post">
                    <h2>Exposure</h2>
                    <p>In accordance with the topic studied in the third level, make a presentation in English in video format about a tourist spot in your region.</p>
                    <Link rel="stylesheet" href="" to={"/exposure"}>Read More</Link>
                </section>
                <section className="post">
                    <h2>Video</h2>
                    <p>In accordance with the topic studied in the first level, choose a family member or a friend to introduce them through a short video using your webcam in English.</p>
                    <Link rel="stylesheet" href="" to={"/video"}>Read More</Link>
                </section>
                <section className="post">
                    <h2>Email</h2>
                    <p>A written document is prepared in the form of an email, applying for a job position, including relevant information from your résumé and making effective use of netiquette.</p>
                    <Link rel="stylesheet" href="" to={"/email"}>Read More</Link>
                </section>
                <section className="post">
                    <h2>Critical Thinking</h2>
                    <p>Critical thinking is the ability to analyze, evaluate, and judge information in a logical and objective way. It involves questioning and examining arguments, beliefs, and sources of information, avoiding accepting ideas without proper analysis.</p>
                    <Link rel="stylesheet" href="" to={"/critical-thinking"}>Read More</Link>
                </section>
                <section className="post">
                    <h2>Crime and Punishment</h2>
                    <p>The topic of &quot;crime and punishment&quot; addresses the various ways in which criminal behavior manifests in society and the different penalties applied to those who break the law.</p>
                    <Link rel="stylesheet" href="" to={"/Crime-and-Punishment"}>Read More</Link>
                </section>
             </div>
        </main>
    )
}

export {Main}