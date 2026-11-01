import './App.css'

function App() {
  const services = [
    { name: 'Amazon EC2', description: 'Scalable virtual servers in the cloud', status: 'Available' },
    { name: 'Amazon S3', description: 'Secure and scalable object storage', status: 'Available' },
    { name: 'AWS IAM', description: 'Identity and access management', status: 'Available' },
    { name: 'AWS VPC', description: 'Isolated cloud networking', status: 'Available' }
  ]

  return (
    <div className="app">
      <header className="header">
        <h2>CloudX</h2>
        <span>AWS Deployment Labs</span>
      </header>

      <main className="container">
        <section className="hero">
          <p className="tag">CLOUD ENGINEERING PROJECT</p>
          <h1>AWS Cloud Infrastructure Dashboard</h1>
          <p>
            Exploring cloud infrastructure, automation and continuous
            deployment using AWS, Terraform and GitHub Actions.
          </p>
          <span className="badge">Deployment Status: Successful</span>
        </section>

        <section className="services">
          <h2>AWS Services</h2>

          <div className="service-grid">
            {services.map((service) => (
              <div className="card" key={service.name}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className="status">{service.status}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="deployment">
          <h2>Deployment Information</h2>
          <p><strong>Frontend:</strong> React.js</p>
          <p><strong>Cloud Provider:</strong> Amazon Web Services</p>
          <p><strong>Infrastructure:</strong> Terraform</p>
          <p><strong>CI/CD:</strong> GitHub Actions</p>
        </section>
      </main>

      <footer>
        <p>CloudX | AWS & DevOps Interview Labs</p>
      </footer>
    </div>
  )
}

export default App