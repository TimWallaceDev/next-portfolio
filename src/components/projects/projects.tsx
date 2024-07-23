import "./projects.scss"
import Image from "next/image"

export function Projects() {

    return (
        <section className="projects">
            <h3 className="projects__heading">Projects</h3>

            <div className="projects__container" >


                <article className="project">
                    <div className="project__right">
                        <Image
                            className="project__image"
                            src="/images/Melody MasterMind - Desktop.png"
                            alt="screenshot of melody mastermind game UI"
                            width={1920}
                            height={1098}
                        ></Image>
                    </div>
                    <div className="project__left">
                        <div className="project__top">
                            <h4 className="project__title">Melody Mastermind</h4>
                            <p className="project__description">A music guessing game. Choose from a variety of genres and playlists. The goal is to correctly identify the title of the song playing. The faster you answer, the more points you earn.</p>
                        </div>
                        <div className="project__bottom">
                            <a className="project__live-link" href="https://timwallace.ca/melody-mastermind/" target="_blank" rel="noreferrer">Live Link</a>
                            <a className="project__github-link" href="https://github.com/TimWallaceDev/melody-mastermind" target="_blank" rel="noreferrer">Github Repo</a>
                        </div>
                    </div>
                </article>


                <article className="project">
                    <div className="project__right">
                        <Image
                            className="project__image"
                            src="/images/Human Magic - full site.png"
                            alt="screenshot of human magic website landing page"
                            width={1920}
                            height={1212}
                        ></Image>
                    </div>
                    <div className="project__left">
                        <div className="project__top">
                            <h4 className="project__title">Human Magic</h4>
                            <p className="project__description">A Website for local Toronto band &quot;Human Magic&quot;.</p>
                        </div>
                        <div className="project__bottom">
                            <a className="project__live-link" href="https://humanmagic.ca" target="_blank" rel="noreferrer">Live Link</a>
                            <a className="project__github-link" href="https://github.com/TimWallaceDev/humanmagic" target="_blank" rel="noreferrer">Github Repo</a>
                        </div>
                    </div>
                </article>


            </div>
        </section>
    )
}