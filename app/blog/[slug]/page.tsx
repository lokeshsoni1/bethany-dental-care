"use client";

import React from "react";
import { useParams } from "next/navigation";
import { BookOpen, Clock, ArrowLeft, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

const articles = [
  {
    slug: "cosmetic-dentistry-and-smile-design",
    id: 1,
    title: "Cosmetic Dentistry & Smile Design: The Science of Visual Harmony",
    category: "Cosmetic Dentistry",
    readTime: "4 min read",
    images: [
      "https://res.cloudinary.com/dbpdexty8/image/upload/v1783624588/Doctor_examining_patient_dental___202607100040_y3pdpt.jpg",
      "https://res.cloudinary.com/dbpdexty8/image/upload/v1783624586/View__A_portrait_photograph__3_4_202607100035_acwyqp.jpg",
      "https://res.cloudinary.com/dbpdexty8/image/upload/v1783624587/Dental_treatment_bay_with_chair_202607100040_lfxztz.jpg"
    ],
    content: `Cosmetic dentistry is far more than a collection of aesthetic treatments; it is a highly specialized clinical discipline that combines the physics of light, the chemistry of modern ceramic materials, and the biological principles of periodontal health. Smile design is a structured methodology used to analyze, diagnose, and construct visually harmonious smiles that complement an individual's unique facial features. 

The process begins with digital smile mapping telemetry. High-resolution intraoral scanners capture the exact coordinates of the dental arch, while facial photographs analyze the interpupillary line, the lip line, and the dental midline. Achieving visual harmony requires strict adherence to golden proportion ratios. The width of the central incisor, lateral incisor, and canine must relate mathematically to project a balanced profile.

Porcelain veneers represent the gold standard in cosmetic smile design. These ultra-thin shells of feldspathic porcelain or lithium disilicate are bonded directly to the enamel using advanced adhesive resins. The preparation requires microscopic tooth reduction, ensuring the conservation of healthy tooth structure while creating adequate room for the ceramic layer to mimic natural light transmission. Translucency, chroma, and value are carefully calculated to prevent a chalky, artificial appearance.

Furthermore, periodontal aesthetics are crucial. A visual smile design must address the gingival architecture, correcting uneven gum lines using precision tissue contouring lasers. This ensures that the gingival zenith—the highest point of the gum line on each tooth—is correctly positioned relative to the clinical crown. By aligning the soft tissues and the hard ceramic structures, cosmetic dentistry delivers stable, biological, and stunning smiles that stand the test of time, improving oral function and patient self-confidence simultaneously.`
  },
  {
    slug: "advanced-orthodontics-and-invisalign",
    id: 2,
    title: "Advanced Orthodontics & Invisalign: Aligning Bites and Enamel Profiles",
    category: "Orthodontics",
    readTime: "5 min read",
    images: [
      "https://res.cloudinary.com/dbpdexty8/image/upload/v1783624586/View__A_portrait_photograph__3_4_202607100035_acwyqp.jpg",
      "https://res.cloudinary.com/dbpdexty8/image/upload/v1783624587/Patient_completing_paperwork_at___202607100036_f3on1u.jpg",
      "https://res.cloudinary.com/dbpdexty8/image/upload/v1783624587/Dental_treatment_bay_with_chair_202607100040_lfxztz.jpg"
    ],
    content: `Orthodontic treatment has evolved from rigid metal wires to highly predictable clear aligner therapy. Invisalign represents a breakthrough in digital biomechanics, allowing dentists to resolve complex malocclusions with minimal impact on a patient's lifestyle. The core of this system is SmartTrack material, a proprietary medical-grade thermoplastic engineered to deliver constant, gentle orthodontic forces to the dentition.

The biomechanical planning is executed through virtual CAD/CAM software. The software maps the movement of each tooth in increments of 0.25 millimeters per stage. This level of microscopic control allows clinicians to plan root movement, rotation, and intrusion with clinical safety, avoiding the risk of root resorption. Attachments—small, tooth-colored composite shapes—are bonded to the enamel to act as force anchors, allowing the clear aligners to execute complex movements like bodily root translation.

Correcting the bite involves optimizing the relationship between the maxillary and mandibular arches. Malocclusions such as overbites, underbites, crossbites, and crowding are not merely cosmetic concerns; they cause enamel attrition, temporomandibular joint (TMJ) stress, and increase the risk of periodontal disease. By aligning the teeth, the masticatory forces are distributed evenly across the dental arch, protecting the enamel from premature wear.

Compliance is a critical factor in Invisalign success. Aligners must be worn for 20 to 22 hours per day, removed only for meals and oral hygiene. Advanced monitoring systems allow patients and doctors to track progress virtually, reducing clinical visit times while maintaining exceptional alignment quality. The final outcome is a stable, well-aligned occlusion that supports speech, chewing, and a lifelong balanced dental arch.`
  },
  {
    slug: "precision-root-canal-therapy",
    id: 3,
    title: "Precision Root Canal Therapy: Modern Sedation and Microscopic Endodontics",
    category: "Endodontics",
    readTime: "4 min read",
    images: [
      "https://res.cloudinary.com/dbpdexty8/image/upload/v1783624588/Doctor_examining_patient_dental___202607100040_y3pdpt.jpg",
      "https://res.cloudinary.com/dbpdexty8/image/upload/v1783538213/Modern_dental_operatory_interior__2K_202607090041_ukinvc.jpg",
      "https://res.cloudinary.com/dbpdexty8/image/upload/v1783624587/Dental_assistant_loading_autoclave_2K_202607100035_pxbzlr.jpg"
    ],
    content: `Root canal therapy is one of the most misunderstood procedures in dentistry, often associated with pain. However, modern endodontic techniques, high-powered surgical microscopes, and advanced sedation options have transformed this procedure into a precise, comfortable, and highly successful method for saving infected teeth. Endodontic therapy addresses inflammation or infection within the pulp tissue, which contains the nerves and blood vessels of the tooth.

The primary cause of pulpal infection is deep dental caries or structural fractures that allow oral bacteria to breach the protective dentin layer. Once bacteria enter the pulp chamber, the tissue becomes inflamed. If left untreated, the infection can progress to the surrounding alveolar bone, forming a painful abscess. Precision diagnostics, including 3D Cone Beam Computed Tomography (CBCT), allow dentists to map the root canals in three dimensions before starting treatment.

During the procedure, the endodontist uses a surgical microscope to locate all canal orifices, which can be as narrow as a hair. Specialized nickel-titanium rotary instruments are used to clean, shape, and debride the canals, removing all necrotic tissue and bacterial biofilms. High-velocity chemical irrigants, activated by ultrasonic waves, sanitize the microscopic accessory canals that mechanical instruments cannot reach.

Once sterile, the canals are obturated—or sealed—using a biocompatible material called gutta-percha combined with a resin-based sealer. This hermetic seal prevents future bacterial colonization. Finally, the tooth is restored with a custom crown to protect its weakened structure. With neuromuscular oral sedation, patients experience a zero-pain environment, changing root canal therapy into a routine, comfortable visit.`
  },
  {
    slug: "neuromuscular-oral-sedation",
    id: 4,
    title: "Neuromuscular Oral Sedation: Eliminating Dental Anxiety and Gag Reflexes",
    category: "Anesthesiology",
    readTime: "5 min read",
    images: [
      "https://res.cloudinary.com/dbpdexty8/image/upload/v1783624588/Doctor_examining_patient_dental___202607100040_y3pdpt.jpg",
      "https://res.cloudinary.com/dbpdexty8/image/upload/v1783624586/View__A_portrait_photograph__3_4_202607100035_acwyqp.jpg",
      "https://res.cloudinary.com/dbpdexty8/image/upload/v1783624587/Patient_completing_paperwork_at___202607100036_f3on1u.jpg"
    ],
    content: `Dental phobia is a significant barrier to oral health, causing millions of individuals to avoid essential treatment. Neuromuscular oral conscious sedation is a highly effective pharmacological approach designed to eliminate fear, suppress overactive gag reflexes, and create a calm state during complex dental procedures. Unlike general anesthesia, oral sedation keeps the patient conscious, cooperative, and able to respond to verbal cues.

The sedation process involves the administration of oral sedative medications, typically from the benzodiazepine family, taken shortly before the appointment. These medications target GABA-A receptors in the brain, enhancing inhibitory pathways that reduce anxiety and induce muscle relaxation. Because these agents have strong amnestic properties, patients frequently have little to no memory of the procedure.

For patients with a hyperactive gag reflex, oral sedation relaxes the neuromuscular pathways responsible for this involuntary response. This allows the clinical team to perform procedures like impressions, scanning, and endodontics with ease, ensuring high clinical accuracy and patient comfort. Throughout the entire appointment, the patient's vital signs, including oxygen saturation, heart rate, and blood pressure, are continuously monitored.

Additionally, oral sedation allows for "treatment consolidation," where multiple procedures (such as root canals, crowns, and implants) are completed in a single session. This saves valuable hours for busy professionals, ensuring high-efficiency care in a safe environment. By eliminating pain and anxiety, neuromuscular sedation helps patients rebuild their trust in dental care and maintain healthy smiles.`
  },
  {
    slug: "preventative-bio-telemetry-mapping",
    id: 5,
    title: "Preventative Bio-Telemetry Mapping: Catching Friction Points Before Pain Occurs",
    category: "Preventative Dentistry",
    readTime: "4 min read",
    images: [
      "https://res.cloudinary.com/dbpdexty8/image/upload/v1783624587/Patient_completing_paperwork_at___202607100036_f3on1u.jpg",
      "https://res.cloudinary.com/dbpdexty8/image/upload/v1783624587/Dental_treatment_bay_with_chair_202607100040_lfxztz.jpg",
      "https://res.cloudinary.com/dbpdexty8/image/upload/v1783624587/Dental_assistant_loading_autoclave_2K_202607100035_pxbzlr.jpg"
    ],
    content: `Preventative bio-telemetry mapping represents the future of preventative dentistry. Rather than waiting for dental structures to break, decay, or become painful, this digital methodology utilizes force-sensing sensors and structural telemetry to analyze bite forces and protect enamel integrity. By identifying micro-friction points and stress zones, dentists can intervene before structural damage occurs.

The core technology of bio-telemetry mapping is the digital occlusal analysis system. When a patient bites down on a electronic sensor strip, the system measures force distribution and timing in real-time. It records which teeth contact first, how much force is applied to each tooth, and how the bite shifts during movement. Traditional bite paper only shows *where* teeth touch; digital telemetry shows *when* and with *how much force* they touch.

Micro-friction points—areas of excessive pressure or friction during jaw movement—are primary causes of enamel wear, cracked teeth, and TMJ disorders. If a single molar bears double its share of bite pressure, the enamel will eventually crack or erode at the gum line. Catching these stress points early allows for minor adjustments (occlusal equilibration) or the design of a custom protective nightguard.

Furthermore, bio-telemetry mapping is invaluable for patients receiving restorations like crowns or implants. It ensures that new restorations are perfectly integrated into the existing bite mechanics, preventing premature failure or discomfort. By shifting the clinical focus from reactive restoration to proactive force balance, preventative telemetry safeguards the dentition, ensuring a healthy, functional smile for life.`
  }
];

export default function BlogPostDetail() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug) || articles[0];

  return (
    <main className="min-h-screen bg-[#09192c] text-white">
      <Navbar />

      <section className="relative pt-36 pb-24 px-6 md:px-12 max-w-6xl mx-auto z-10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Journal
        </Link>

        {/* Horizontal Mesh Architecture Card */}
        <div 
          style={{
            background: "rgba(255, 255, 255, 0.07)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            borderRadius: "28px",
            boxShadow: "0 30px 60px rgba(0,0,0,0.3)"
          }}
          className="flex flex-col lg:flex-row items-stretch overflow-hidden w-full gap-8 p-8 md:p-12 mb-12"
        >
          {/* Left Column: Heading, Meta information on a frosted silver backplate */}
          <div 
            style={{
              background: "rgba(240, 244, 250, 0.12)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "20px"
            }}
            className="w-full lg:w-2/5 p-8 flex flex-col justify-between"
          >
            <div>
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-xs font-extrabold text-cyan-300 uppercase tracking-wide inline-block mb-6">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
                {article.title}
              </h1>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300 font-semibold">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Right Column: Editorial image & intro */}
          <div className="w-full lg:w-3/5 overflow-hidden rounded-2xl relative min-h-[300px]">
            <img 
              src={article.images[0]} 
              alt={article.title} 
              className="w-full h-full object-cover object-center rounded-2xl"
            />
          </div>
        </div>

        {/* Article Body Content with Inline Editorial Images */}
        <div className="max-w-4xl mx-auto space-y-8 text-slate-200 text-lg leading-relaxed font-medium">
          {article.content.split("\n\n").map((paragraph, i) => {
            const hasImage = i > 0 && i < article.images.length;
            return (
              <div key={i} className="space-y-8">
                <p className="first-letter:text-5xl first-letter:font-black first-letter:text-cyan-400 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                  {paragraph}
                </p>
                {hasImage && (
                  <div className="w-full h-[400px] rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 my-8">
                    <img 
                      src={article.images[i]} 
                      alt={`Illustration ${i}`} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
