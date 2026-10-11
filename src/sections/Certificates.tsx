import { CertificateCard } from "../components/CertificateCard"
import { SectionHeading } from "../components/SectionHeading"
import { certificates } from "../data/certificates"

export function Certificates() {
  return (
    <section id="certificates" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Certificates"
          description="Names and organizations are taken from LinkedIn posts. Credential URLs and images are placeholders until official files are added."
        />
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  )
}
