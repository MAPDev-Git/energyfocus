import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Pill, Activity, Zap, Check } from 'lucide-react';
import labelImg from '../../Assets/EnergyFocus_NewLabel.png';

const ingredients = [
  {
    name: 'Ashwagandha (KSM-66)',
    role: 'Adaptógeno & Anti-Estresse',
    description:
      'Ajuda a regular os níveis de cortisol, reduzindo o estresse mental e a ansiedade, enquanto promove clareza cognitiva e equilíbrio emocional.',
  },
  {
    name: 'Creatina Monohidratada',
    role: 'Combustível Celular & Memória',
    description:
      'Restaura a bioenergética cerebral (reserva de ATP neurais), acelerando o raciocínio rápido e prevenindo a fadiga mental durante momentos de alta demanda.',
  },
  {
    name: 'Cafeína Anidra',
    role: 'Alerta & Foco Imediato',
    description:
      'Fornece aquele impulso de atenção imediato na medida exata para ativar os receptores de adenosina no cérebro sem causar agitação ou tremores.',
  },
];

export default function Formula() {
  return (
    <section id="formula" className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="badge-gold">CIÊNCIA & FÓRMULA</span>
          <h2 className="text-section-title text-gradient-gold">
            A Sinergia Perfeita Entre 3 Ingredientes Clinicamente Estudados
          </h2>
          <p className="text-body">
            Nossa fórmula exclusiva combina nootrópicos e adaptógenos para otimizar o seu cérebro e seu corpo em perfeita harmonia.
          </p>
        </div>

        {/* Grid Formula Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Ingredients Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            {ingredients.map((ing, idx) => (
              <motion.div
                key={idx}
                className="glass-panel p-6 border-l-4 border-l-[#C9A84C] flex gap-5 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/15 flex items-center justify-center text-[#F5D66E] shrink-0 mt-1">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-[#F0E8C8]">{ing.name}</h3>
                    <span className="text-xs font-mono text-[#F5D66E] bg-[#C9A84C]/15 px-2.5 py-0.5 rounded-full">
                      {ing.role}
                    </span>
                  </div>
                  <p className="text-sm text-[#9A8E6E] leading-relaxed">
                    {ing.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Recommended Dosage Banner */}
            <div className="bg-[#171613] border border-[#C9A84C]/25 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#C9A84C] text-[#0E0D0B] flex items-center justify-center shrink-0 font-bold">
                <Pill className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#F0E8C8] text-sm uppercase tracking-wide">
                  MODO DE USO RECOMENDADO
                </h4>
                <p className="text-xs text-[#9A8E6E] mt-1">
                  Tome <strong>2 cápsulas ao dia</strong>: 1 cápsula pela manhã ou pré-treino, e 1 cápsula após o almoço para manter o foco constante durante todo o dia.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Label Showcase */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel p-6 text-center w-full max-w-md">
              <img
                src={labelImg}
                alt="Energy & Focus Formula Label"
                className="w-full h-auto rounded-xl object-cover mb-4 border border-[#C9A84C]/20 shadow-2xl"
              />
              <span className="text-xs font-mono text-[#F5D66E] block mb-1">
                FÓRMULA TRANSPARENTE
              </span>
              <p className="text-xs text-[#9A8E6E]">
                Sem misturas secretas. Dosagens exatas e rotulagem 100% transparente para sua segurança.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
