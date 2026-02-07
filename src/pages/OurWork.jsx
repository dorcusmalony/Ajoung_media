import './PageStyles.css'

const OurWork = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Work</h1>
          <p className="lead">
            Professional cultural documentation and media production serving South Sudanese communities.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          
          {/* Documentaries */}
          <div className="work-section">
            <h2 className="section-title">Documentaries</h2>
            <div className="projects-showcase">
              <div className="project-item">
                <div className="project-visual">
                  <div className="visual-placeholder">
                    <span className="visual-icon">🎬</span>
                  </div>
                </div>
                <h3>Voices of Juba</h3>
                <p className="project-meta">60 min • 2025</p>
              </div>

              <div className="project-item">
                <div className="project-visual">
                  <div className="visual-placeholder">
                    <span className="visual-icon">🎬</span>
                  </div>
                </div>
                <h3>The Diaspora Bridge</h3>
                <p className="project-meta">Documentary Series • 2025</p>
              </div>

              <div className="project-item">
                <div className="project-visual">
                  <div className="visual-placeholder">
                    <span className="visual-icon">🎬</span>
                  </div>
                </div>
                <h3>Stories of Resilience</h3>
                <p className="project-meta">45 min • 2024</p>
              </div>

              <div className="project-item">
                <div className="project-visual">
                  <div className="visual-placeholder">
                    <span className="visual-icon">🎬</span>
                  </div>
                </div>
                <h3>Cultural Crossroads</h3>
                <p className="project-meta">52 min • 2024</p>
              </div>
            </div>
          </div>

          {/* Cultural Archives */}
          <div className="work-section">
            <h2 className="section-title">Cultural Archives</h2>
            <div className="projects-showcase">
              <div className="project-item">
                <div className="project-visual">
                  <div className="visual-placeholder">
                    <span className="visual-icon">📚</span>
                  </div>
                </div>
                <h3>Oral Histories: Elders Speak</h3>
                <p className="project-meta">50+ Interviews</p>
              </div>

              <div className="project-item">
                <div className="project-visual">
                  <div className="visual-placeholder">
                    <span className="visual-icon">📚</span>
                  </div>
                </div>
                <h3>Traditional Music Archive</h3>
                <p className="project-meta">Audio Collection</p>
              </div>

              <div className="project-item">
                <div className="project-visual">
                  <div className="visual-placeholder">
                    <span className="visual-icon">📚</span>
                  </div>
                </div>
                <h3>Cultural Practices Documentation</h3>
                <p className="project-meta">Video & Photography</p>
              </div>

              <div className="project-item">
                <div className="project-visual">
                  <div className="visual-placeholder">
                    <span className="visual-icon">📚</span>
                  </div>
                </div>
                <h3>Migration Stories Collection</h3>
                <p className="project-meta">Written & Audio</p>
              </div>
            </div>
          </div>

          {/* Community & Civic Projects */}
          <div className="work-section">
            <h2 className="section-title">Community & Civic Projects</h2>
            <div className="projects-showcase">
              <div className="project-item">
                <div className="project-visual">
                  <div className="visual-placeholder">
                    <span className="visual-icon">🤝</span>
                  </div>
                </div>
                <h3>Youth Leadership Initiative</h3>
                <p className="project-meta">Community Program</p>
              </div>

              <div className="project-item">
                <div className="project-visual">
                  <div className="visual-placeholder">
                    <span className="visual-icon">🤝</span>
                  </div>
                </div>
                <h3>Civic Engagement Workshops</h3>
                <p className="project-meta">Educational Series</p>
              </div>

              <div className="project-item">
                <div className="project-visual">
                  <div className="visual-placeholder">
                    <span className="visual-icon">🤝</span>
                  </div>
                </div>
                <h3>Community Dialogue Forums</h3>
                <p className="project-meta">Ongoing</p>
              </div>

              <div className="project-item">
                <div className="project-visual">
                  <div className="visual-placeholder">
                    <span className="visual-icon">🤝</span>
                  </div>
                </div>
                <h3>Cultural Exchange Program</h3>
                <p className="project-meta">Partnership Initiative</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default OurWork