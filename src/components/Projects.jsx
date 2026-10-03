function Projects() {
    return (
        <section id="projects" className="projects">

            <h2 className="section-title">Projects</h2>

            <div className="projects-container">

                <article className="project-card">

                    <h3 className="project-title">Todo App</h3>

                    <p className="project-text">A Task management application built using React.js and LocalStorage
                        Users can add,edit,delete and manage daily tasks.</p>

                    <a className="project-link" href="https://github.com/sahibms/Todo-app" target="_blank" rel="noreferrer">GitHub</a>
                    <a className="project-link" href="https://sahib-todo-app.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a>

                </article>

                <article className="project-card">

                    <h3 className="project-title">Notes App</h3>

                    <p className="project-text">A Notes application built using React.js and LocalStorage.</p>

                    <a className="project-link" href="https://github.com/sahibms/notes-app" target="_blank" rel="noreferrer">GitHub</a>
                    <a className="project-link" href="https://sahib-notes-app.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>

                </article>

                <article className="project-card">

                    <h3 className="project-title">Weather App</h3>

                    <p className="project-text">A Weather application built using React.js and Weather API.</p>

                    <a className="project-link" href="https://github.com/sahibms/weather-app" target="_blank" rel="noreferrer">GitHub</a>
                    <a className="project-link" href="https://weather-app-eta-ten-82.vercel.app" target="_blank" rel="noreferrer">Live Demo</a>

                </article>

                <article className="project-card">

                    <h3 className="project-title">Expense Tracker App</h3>

                    <p className="project-text">A modern Expense Tracker bulit using React.js. Users can add,edit,delete and manage
                        income and expense transactions with automatic balance calculation and Local Storage support</p>

                    <a className="project-link" href="https://github.com/sahibms/expense-tracker" target="_blank" rel="noreferrer">GitHub</a>
                    <a className="project-link" href="https://sahib-expense-tracker.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>
                </article>

                <article className="project-card">
                    <h3 className="project-title">E-Commerce App</h3>

                    <p className="project-text">A responsive e-commerce App build with React. This frontent project includes
                        product listing, search, catrgory filtering, sorting, facorites, cart manangement, React Router navigation, and API integration</p>

                    <a className="project-link" href="https://github.com/sahibms/ecommerce-app" target="_blank" rel="noreferrer">GitHub</a>
                    <a className="project-link" href="https://sahib-ecommerce-app.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a>    
                    
                </article>

            </div>

        </section>
    );
}
export default Projects;