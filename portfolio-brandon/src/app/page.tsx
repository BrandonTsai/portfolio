import Image from "next/image";
import Header from "../components/Header";
// import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      {/* Bighead Image above Slogan */}
      <div className="w-full flex justify-center bg-white pt-8">
        <Image
          src="/portfolio_bighead.png"
          alt="Brandon Tsai Bighead"
          width={180}
          height={180}
          className="rounded-full shadow-lg border-4 border-[#ff9800] object-cover"
          priority
        />
      </div>
      <main className="flex flex-col items-center min-h-screen p-0 sm:p-0 gap-0 font-[family-name:var(--font-geist-sans)] w-full">
        {/* Slogan (Home) Section */}
        <section id="home" className="w-full flex flex-col items-center text-center gap-6 pt-12 pb-16 bg-white animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl font-bold">Brandon Tsai</h1>
          <h2 className="text-3xl sm:text-4xl font-bold">~ Senior Platform Engineer ~</h2>
          <p className="text-xl text-gray-700 font-medium">Crafting resilient infrastructure without compromise.</p>
        </section>
        <div className="w-full flex justify-center bg-transparent">
        <Image
            src="/aboutme-divider.png"
            alt="Section divider: About Me"
            width={1200}
            height={80}
            className="w-full max-w-3xl h-auto object-contain"
          priority
        />
        </div>
        {/* About Me Section */}
        <section id="about" className="w-full py-16 bg-[#b85c00] text-white animate-fadeIn">
          <div className="max-w-2xl mx-auto flex flex-col gap-4 px-4">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>
            Hi, I am Brandon. With a decade of experience in platform engineering, I believe in building systems that are not only resilient but also empower developers to move fast and with confidence. My entire approach is rooted in DevOps principles: deep collaboration, relentless automation, and a commitment to continuous improvement.
            </p>
            <p>
            I have successfully delivered scalable solutions across industries, from manufacturer company to financial institutions, and thrive in high-impact, high-ownership environments. Whether building GitOps pipelines, deploying secure container platforms, or streamlining developer workflows, I bring clarity, precision, and purpose to every project. My mission is simple: build platforms that enable innovation without compromise.
            </p>
          </div>
        </section>
        <div className="w-full h-0.5 bg-gray-200" />
        {/* Skills Section */}
        <section id="skills" className="w-full py-16 bg-white animate-fadeIn">
          <div className="max-w-3xl mx-auto flex flex-col gap-6 px-4">
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-1">Cloud</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>AWS</li>
                  <li>Azure</li>
                  <li>Private cloud across multiple regions</li>
                  <li>OpenStack</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Container & Platform</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Docker, Podman</li>
                  <li>Kubernetes, OpenShift</li>
                  <li>Helm</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">CI/CD</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Jenkins, GitLab CI </li>
                  <li>GitOps, ArgoCD</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Observability</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Splunk, OpenTelemetry</li>
                  <li>Prometheus, Grafana</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Infrastructure as Code</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Ansible, Terraform, CloudFormation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Security</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Sealed Secrets</li>
                  <li>Trivy, AquaSec</li>
                  <li>NexusRM, NexusIQ, SonarQube</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-0.5 bg-gray-200" />
        {/* Recent Works/Projects Section */}
        <section id="projects" className="w-full py-16 bg-gray-50 animate-fadeIn">
          <div className="max-w-3xl mx-auto flex flex-col gap-4 px-4">
            <h2 className="text-2xl font-semibold mb-2">Recent Works / Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4 bg-white shadow-sm">
                <h3 className="font-semibold text-lg mb-1">Cloud Automation Platform</h3>
                <p className="text-gray-700 mb-1">Developed an internal platform to automate AWS infrastructure provisioning and management for multiple teams.</p>
                <div className="text-xs text-gray-500">Tech: AWS, Terraform, Python, GitLab CI</div>
              </div>
              <div className="border rounded-lg p-4 bg-white shadow-sm">
                <h3 className="font-semibold text-lg mb-1">Observability Stack Rollout</h3>
                <p className="text-gray-700 mb-1">Led the rollout of a unified observability stack across microservices, improving incident response and monitoring.</p>
                <div className="text-xs text-gray-500">Tech: Prometheus, OpenTelemetry, Splunk, Kubernetes</div>
              </div>
              <div className="border rounded-lg p-4 bg-white shadow-sm">
                <h3 className="font-semibold text-lg mb-1">Secure Container Pipeline</h3>
                <p className="text-gray-700 mb-1">Implemented a DevSecOps pipeline for container image scanning and policy enforcement in CI/CD workflows.</p>
                <div className="text-xs text-gray-500">Tech: Docker, Trivy, AquaSec, Jenkins</div>
              </div>
              <div className="border rounded-lg p-4 bg-white shadow-sm">
                <h3 className="font-semibold text-lg mb-1">Developer Enablement Portal</h3>
                <p className="text-gray-700 mb-1">Built a self-service portal for developers to request and manage cloud resources with automated approvals.</p>
                <div className="text-xs text-gray-500">Tech: React, AWS, ArgoCD</div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-0.5 bg-gray-200" />
        {/* Recent Articles Section */}
        <section id="articles" className="w-full py-16 bg-white animate-fadeIn">
          <div className="max-w-2xl mx-auto flex flex-col gap-4 px-4">
            <h2 className="text-2xl font-semibold mb-2">Recent Articles</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <a href="https://medium.com/@brandon-tsai/cloud-automation-best-practices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Cloud Automation Best Practices
                </a>
              </li>
              <li>
                <a href="https://medium.com/@brandon-tsai/devsecops-pipeline-integration" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Integrating DevSecOps into Your CI/CD Pipeline
                </a>
              </li>
              <li>
                <a href="https://medium.com/@brandon-tsai/observability-for-microservices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Observability for Modern Microservices
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className="w-full h-0.5 bg-gray-200" />
        {/* Contact Section (CTA) */}
        <section id="contact" className="w-full py-16 bg-gradient-to-b from-[#ff9800] to-[#b85c00] text-white animate-fadeIn">
          <div className="max-w-2xl mx-auto flex flex-col gap-4 px-4">
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p>
              Interested in working together or have a question? Reach out via email or connect with me on LinkedIn below!
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-200">LinkedIn</a>
              <a href="mailto:brandon@email.com" className="text-white underline hover:text-gray-200">Email</a>
            </div>
    </div>
        </section>
      </main>
    </>
  );
}
