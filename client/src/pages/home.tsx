import { motion } from "framer-motion";
import { Star, ShieldCheck, AlertTriangle, ArrowRight, Check, CheckCircle } from "lucide-react";
import { FakeNotifications } from "@/components/fake-notifications";
import { CountdownTimer } from "@/components/countdown-timer";
import ebookCover from "@assets/generated_images/3d_book_mockup_glynch_zero.png";
import doctorImg from "@assets/generated_images/black_doctor_portrait.png";
import bgTexture from "@assets/generated_images/abstract_medical_background.png";

// Fake Reviews Data
const REVIEWS = [
  {
    name: "Carlos Eduardo",
    rating: 5,
    text: "Minha glicose baixou de 280 para 98 em 2 semanas. O médico nem acreditou. Glynch Zero salvou minha vida.",
    verified: true
  },
  {
    name: "Ana Maria Souza",
    rating: 5,
    text: "Eu achava que era golpe, mas pelo preço decidi tentar. Gente, funciona MESMO. Não sinto mais tonturas.",
    verified: true
  },
  {
    name: "Roberto Campos",
    rating: 5,
    text: "Cancelei a cirurgia que ia fazer. O método é agressivo mas eficaz. Recomendo demais.",
    verified: true
  },
  {
    name: "Lúcia Ferreira",
    rating: 5,
    text: "Meu filho tem tipo 1 e isso ajudou a estabilizar como nada antes. Obrigada Glynch Zero!",
    verified: true
  }
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 overflow-x-hidden">
      <FakeNotifications />

      {/* Top Warning Bar */}
      <div className="bg-accent text-white py-2 px-4 text-center font-bold text-sm md:text-base animate-pulse">
        ⚠️ ATENÇÃO: OFERTA DE NATAL ENCERRA EM BREVE
      </div>

      {/* Hero Section */}
      <header className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 opacity-10">
          <img src={bgTexture} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-red-100 text-red-700 font-bold px-4 py-1 rounded-full text-sm mb-6 border border-red-200"
            >
              REVELADO: O FIM DA INDÚSTRIA DA INSULINA
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight"
            >
              Destrua a <span className="text-primary">Diabetes Tipo 2</span> e Reverta a Tipo 1 em <span className="underline decoration-accent decoration-4 underline-offset-4">21 Dias</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              O método polêmico que médicos tradicionais estão tentando esconder. Recupere sua vida sem agulhas e sem remédios caros.
            </motion.p>

            {/* Product Mockup + CTA */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="relative w-64 md:w-80"
              >
                <div className="absolute inset-0 bg-primary blur-3xl opacity-20 rounded-full"></div>
                <img src={ebookCover} alt="Glynch Zero Ebook" className="relative z-10 w-full drop-shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500" />
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black font-black text-xl px-4 py-2 rounded-lg shadow-lg rotate-12 z-20">
                  R$ 29,90
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col items-center md:items-start space-y-6"
              >
                <div className="bg-red-600 text-white p-4 rounded-xl shadow-lg w-full max-w-sm">
                  <p className="text-center font-bold mb-2 text-sm uppercase tracking-wider">Oferta de Natal Expira em:</p>
                  <CountdownTimer />
                </div>
                
                <a 
                  href="#offer" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group bg-green-500 hover:bg-green-600 text-white text-2xl font-black py-6 px-12 rounded-full shadow-[0_10px_20px_rgba(34,197,94,0.4)] hover:shadow-[0_15px_30px_rgba(34,197,94,0.6)] transform hover:-translate-y-1 transition-all duration-300 w-full md:w-auto text-center flex items-center justify-center gap-3"
                >
                  QUERO A CURA AGORA
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </a>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  <span>Garantia de 7 dias ou seu dinheiro de volta</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Agitation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <AlertTriangle className="w-12 h-12 text-red-600" />
              <h2 className="text-3xl font-bold text-gray-900">Você está sentado em uma bomba relógio</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A diabetes não é apenas "açúcar alto". Ela está, neste exato momento, corroendo seus órgãos, cegando seus olhos e destruindo seus nervos. A indústria farmacêutica QUER que você continue doente. Eles lucram bilhões com sua insulina.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed font-bold">
              Você sabia que a cada 6 segundos alguém morre de complicações da diabetes?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Não seja a próxima estatística. Existe um caminho diferente. Um caminho que eles chamam de "milagre", mas nós chamamos de <span className="text-primary font-black">CIÊNCIA</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Authority Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform translate-x-4 translate-y-4"></div>
              <img src={doctorImg} alt="Dr. Roberto Mendes" className="relative z-10 rounded-2xl shadow-2xl w-full" />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">A Opinião Médica</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">"O Glynch Zero vai contra tudo o que aprendemos na faculdade... porque funciona."</h2>
              <blockquote className="text-xl text-gray-600 italic mb-8 border-l-4 border-primary pl-6">
                "Como endocrinologista há 25 anos, nunca vi nada parecido. O protocolo Glynch Zero ataca a RAIZ do problema inflamatório, não apenas os sintomas. Meus pacientes que seguiram o método reduziram a medicação em 90% nas primeiras 3 semanas."
              </blockquote>
              <div>
                <p className="font-bold text-gray-900 text-lg">Dr. Roberto Mendes</p>
                <p className="text-gray-500">Endocrinologista e Pesquisador, PhD</p>
                <div className="flex text-yellow-400 mt-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Grid */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 mb-16">
            Junte-se a mais de <span className="text-primary">12.400</span> Pessoas Curadas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-gray-900 text-sm">{review.name}</span>
                  {review.verified && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full flex items-center gap-1">
                      <Check className="w-3 h-3" /> Compra Verificada
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-accent p-4 text-center relative overflow-visible">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-20 overflow-hidden"></div>
              {/* Gorro de Natal removido */}
              <h3 className="text-white font-black text-3xl tracking-widest animate-pulse drop-shadow-md flex items-center justify-center gap-2 relative z-10">
                OFERTA EXCLUSIVA DE NATAL
              </h3>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="p-8 md:p-12 md:w-1/2 bg-gray-50 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-gray-200">
                <img src={ebookCover} alt="Glynch Zero" className="w-64 drop-shadow-2xl mb-6 transform hover:scale-105 transition-transform" />
                <div className="space-y-2 w-full">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Acesso Imediato</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Atualizações Vitalícias</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>3 Bônus Exclusivos</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                <p className="text-gray-500 line-through text-lg text-center mb-2">De R$ 197,00</p>
                <div className="text-center mb-8">
                  <span className="text-6xl font-black text-green-600">R$ 29,90</span>
                  <p className="text-sm text-gray-500 mt-2">Pagamento único. Sem mensalidades.</p>
                </div>
                
                <button 
                  onClick={() => window.location.href = "https://app.pushinpay.com.br/service/pay/A09233B6-6184-4CD2-AC62-5F7B92D37CA4"} // Coloque seu link de checkout aqui
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-black text-xl py-5 rounded-lg shadow-[0_0_0_0_rgba(34,197,94,0.7)] hover:shadow-[0_0_0_10px_rgba(34,197,94,0)] animate-[pulse-green_2s_infinite] transform hover:-translate-y-1 transition-all duration-200 mb-6 flex items-center justify-center gap-2"
                >
                  COMPRAR AGORA
                  <ArrowRight className="w-6 h-6" />
                </button>
                
                <p className="text-xs text-center text-gray-400">
                  Seus dados estão protegidos. Compra 100% segura.
                  <br />O acesso é enviado para o seu e-mail imediatamente.
                </p>
                
                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center gap-4 grayscale opacity-50">
                  {/* Payment Icons Placeholder */}
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm">
        <div className="container mx-auto px-4">
          <p className="mb-4">© 2024 Glynch Zero. Todos os direitos reservados.</p>
          <p className="max-w-2xl mx-auto text-xs leading-relaxed opacity-60">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usar resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam.
          </p>
        </div>
      </footer>
    </div>
  );
}
