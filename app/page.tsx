'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Instagram, Linkedin, MessageCircle, ChevronDown, Plus, Minus, Star, Quote, Sun, Moon, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle('light-theme');
  };

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Cases', href: '#cases' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#121212]/95 backdrop-blur-md border-b border-white/10 py-4 text-white' : 'bg-transparent py-6 text-text-primary'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-display tracking-tighter">
          OPTCHA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-accent uppercase tracking-widest hover:text-brand transition-colors">
              {link.name}
            </Link>
          ))}
          <button onClick={toggleTheme} className={`w-10 h-10 rounded-full border flex items-center justify-center hover:text-brand hover:border-brand transition-all ${isScrolled ? 'border-white/10 text-white' : 'border-border-main'}`} title="Alternar Tema">
            {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <Link 
            href="https://wa.me/5511921414523" 
            className={`border border-brand px-6 py-2 rounded-full text-sm font-accent uppercase tracking-widest hover:bg-brand hover:text-white transition-all duration-300 ${isScrolled ? 'text-white' : ''}`}
          >
            Assessoria
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#121212] border-b border-white/10 p-6 flex flex-col gap-6 lg:hidden text-white"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-display uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="https://wa.me/5511921414523" 
              className="bg-brand text-white text-center py-3 rounded-full font-accent uppercase tracking-widest"
            >
              Assessoria
            </Link>
            <button onClick={toggleTheme} className="flex items-center gap-4 text-xl font-display uppercase tracking-wider">
              {isLightMode ? <><Moon size={24} /> Modo Escuro</> : <><Sun size={24} /> Modo Claro</>}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,0,16,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3 mb-8">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-3 h-3 bg-brand rounded-full" 
            />
            <span className="text-xs font-accent uppercase tracking-[0.3em] text-text-tertiary">Assessoria Digital</span>
          </div>

          <h1 className="text-[clamp(3rem,10vw,8rem)] xl:text-[10rem] font-display leading-[0.9] uppercase tracking-normal mb-4">
            Escolha o digital, <br />
            <span className="text-brand block mt-4">transforme marcas.</span>
          </h1>

          <div className="w-full flex flex-col items-center gap-8 mt-4">
            <p className="max-w-md text-text-secondary text-lg md:text-xl font-light leading-relaxed text-center tracking-normal">
              Estratégia, criatividade e presença online para quem quer crescer de verdade.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const items = [
    "RESULTADO", 
    "SOLUÇÃO", 
    "ESTRATÉGIA", 
    "POSICIONAMENTO"
  ];
  return (
    <div className="bg-text-primary py-6 overflow-hidden flex whitespace-nowrap relative z-20 -mt-[42px] md:-mt-[54px]">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex gap-12 items-center"
      >
        {[...Array(10)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((item) => (
              <span key={item} className="text-bg-primary font-display text-4xl md:text-6xl uppercase flex items-center gap-12">
                {item} <span className="text-2xl">✦</span>
              </span>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-32 px-6 max-w-7xl mx-auto relative">
      <span className="text-brand font-accent uppercase tracking-widest text-sm mb-8 block">Sobre Nós</span>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24 md:mb-32">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display uppercase leading-tight tracking-wide">
            ASSESSORIA PARA POSICIONAMENTO, <br className="hidden md:block" /> MARKETING DIGITAL E PRESENÇA ONLINE.
          </h2>
        </div>

        <div className="lg:pl-12 flex flex-col justify-between h-full">
          <div className="relative">
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-12">
              Somos especialistas em posicionamento e marketing digital com mais de 7 anos de mercado. Trabalhamos com quem quer mais do que seguidores quer presença real, autoridade e crescimento sustentável.
            </p>
            <p className="text-text-secondary mb-8">
              Atendimento 100% online. Em todo o Brasil.
            </p>
          </div>
        </div>
      </div>

      {/* Large Rotating Badge at the fold */}
      <div className="absolute left-1/2 -bottom-32 md:-bottom-40 -translate-x-1/2 z-10">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="w-64 h-64 md:w-80 md:h-80 border border-border-main rounded-full flex items-center justify-center relative bg-bg-primary"
        >
          <div className="absolute inset-0 flex items-center justify-center text-[13px] md:text-[16px] font-accent uppercase tracking-widest">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text className="fill-text-primary">
                <textPath href="#circlePath">OPTCHA ⟶ OPTCHA ⟶ OPTCHA ⟶ </textPath>
              </text>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: '250+', label: 'Projetos Entregues', sub: 'Cada um com propósito e resultado.' },
    { value: '7+', label: 'Anos de Experiência', sub: 'Posicionando marcas no digital.' },
    { value: '37%', label: 'Alcance Nacional', sub: 'Atendemos em mais de 10 estados.' },
  ];

  return (
    <section className="bg-bg-secondary py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`flex flex-col items-center text-center ${i < 2 ? 'sm:border-r border-border-main' : ''}`}
          >
            <span className="text-6xl md:text-8xl font-display mb-4">{stat.value}</span>
            <span className="text-xl font-accent uppercase tracking-widest mb-2">{stat.label}</span>
            <span className="text-text-secondary text-sm max-w-[200px]">{stat.sub}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const services = [
    { id: '01', title: 'Social Media', desc: 'Criamos estratégias de social media que transformam seguidores em clientes reais. Conteúdo com intenção, consistência e identidade.' },
    { id: '02', title: 'Tráfego Pago', desc: 'Campanhas que convertem. Anúncios com propósito cada centavo investido pensado para gerar resultado mensurável.' },
    { id: '03', title: 'Website e Sistemas', desc: 'Sites e sistemas sob medida para impulsionar o crescimento do seu negócio. Do design ao desenvolvimento, entregamos experiências que vendem.' },
    { id: '04', title: 'Google Meu Negócio', desc: 'Apareça quando seu cliente está buscando. Otimizamos seu perfil para que sua empresa seja encontrada e escolhida.' },
  ];

  return (
    <section id="servicos" className="py-32 px-6 max-w-7xl mx-auto">
      <span className="text-brand font-accent uppercase tracking-widest text-sm mb-4 block">O QUE FAZEMOS</span>
      <h2 className="text-4xl md:text-6xl font-display uppercase mb-20">Sua marca posicionada no digital.</h2>

      <div className="flex flex-col">
        {services.map((service, i) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="group border-t border-border-main py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-all duration-500"
          >
            <div className="flex items-center gap-8 md:gap-16">
              <span className="text-text-tertiary opacity-30 font-display text-2xl">{service.id}</span>
              <h3 className="text-3xl md:text-5xl font-display uppercase group-hover:text-brand transition-colors">
                {service.title}
              </h3>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 mt-6 md:mt-0">
              <p className="text-text-secondary text-sm lg:hidden">
                {service.desc}
              </p>
              <motion.p 
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: hovered === i ? 1 : 0,
                  height: hovered === i ? 'auto' : 0,
                  width: hovered === i ? '300px' : '0px'
                }}
                className="text-text-secondary text-sm hidden lg:block overflow-hidden"
              >
                {service.desc}
              </motion.p>
              <motion.div
                animate={{ rotate: hovered === i ? 45 : 0 }}
                className="w-12 h-12 rounded-full border border-border-main hidden lg:flex items-center justify-center group-hover:border-brand"
              >
                <ArrowRight className="group-hover:text-brand" />
              </motion.div>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-border-main" />
      </div>
    </section>
  );
};

const Cases = () => {
  return (
    <section id="cases" className="relative py-48 px-6 overflow-hidden bg-bg-primary">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[25vw] font-display text-outline opacity-20 select-none">CASES</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-brand font-accent uppercase tracking-widest text-sm mb-4 block">Cases de Sucesso</span>
            <h2 className="text-4xl md:text-6xl font-display uppercase">Resultados que falam.</h2>
          </div>
          <p className="text-text-secondary max-w-xs text-right mt-6 md:mt-0 whitespace-pre-line">
            Projetos entregues com resultados reais.{"\n"}
            Clientes que cresceram com a gente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image 
              src="https://picsum.photos/seed/nico.ag-site-marketing-identidade-visual/600/800?grayscale" 
              alt="@Nico.Ag" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/20 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-display uppercase text-white">@Nico.Ag</h3>
            </div>
          </div>
          
          <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl md:mt-12">
            <Image 
              src="https://picsum.photos/seed/google-meu-negocio-epi-equipamentos-de-protecao-/600/800?grayscale" 
              alt="@Epimero" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/20 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-display uppercase text-white">@Epimero</h3>
            </div>
          </div>
          
          <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image 
              src="https://picsum.photos/seed/loja-simonetto-arquitetura-design-interiores-moveis-planejados-instagram-social-media/600/800?grayscale" 
              alt="@simonetto" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/20 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-display uppercase text-white">@simonetto</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { title: 'Social Media', features: ['Calendário Editorial', 'Identidade Visual Aplicada', 'Relatório Mensal'], tag: 'Assinatura Mensal' },
    { title: 'Website e Sistemas', features: ['Design Responsivo', 'Integração de Ferramentas', 'Suporte Pós-entrega'], tag: 'Sob Consulta' },
    { title: 'Google Meu Negócio', features: ['Otimização de Perfil', 'Gestão de Avaliações', 'Visibilidade Local'], tag: 'Mês a Mês' },
    { title: 'Tráfego Pago', features: ['Google & Meta Ads', 'Otimização Contínua', 'Relatórios de ROI'], tag: 'Contrato Mensal' },
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <span className="text-brand font-accent uppercase tracking-widest text-sm mb-4 block">SERVIÇOS ESSENCIAIS</span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-12 md:mb-20">Assessoria completa, valor consciente.</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
        {plans.map((plan, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.01, borderColor: '#F4611A' }}
            className="bg-bg-secondary border border-border-light p-10 rounded-3xl transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-3xl font-display uppercase">{plan.title}</h3>
              <span className="text-[10px] font-accent uppercase tracking-widest bg-border-light px-3 py-1 rounded-full text-text-primary">
                {plan.tag}
              </span>
            </div>
            <ul className="space-y-4">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-text-secondary text-sm">
                  <div className="w-1 h-1 bg-brand rounded-full" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center">
        <Link 
          href="https://wa.me/5511921414523" 
          className="inline-flex items-center gap-4 bg-brand text-white px-10 py-4 rounded-full font-accent uppercase tracking-widest hover:scale-105 transition-transform shadow-lg"
        >
          Solicitar Orçamento <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "O Google Meu Negócio e o Site trouxeram resultados reais para a Epimero. Hoje somos encontrados com facilidade e os clientes chegam com mais confiança.",
      name: "Caique Freitas Moraes",
      handle: "@epimero",
      image: "https://picsum.photos/seed/client1/100/100"
    },
    {
      quote: "O trabalho da OPTCHA transformou nossa presença digital. O design e a gestão das redes sociais trouxeram uma nova cara para o nosso negócio.",
      name: "Maria Rosivania",
      handle: "@divinosaborbarerestaurante",
      image: "https://picsum.photos/seed/client2/100/100"
    },
    {
      quote: "Com o cardápio digital e a nova estratégia de redes sociais, nosso atendimento ficou muito mais ágil e profissional. Excelente trabalho!",
      name: "Reinaldo Lopes",
      handle: "@flordapavao",
      image: "https://picsum.photos/seed/client3/100/100"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-bg-secondary py-48 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Quote className="text-brand mx-auto mb-12 opacity-50" size={64} />
        
        <div className="relative min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <h2 className="text-2xl md:text-4xl font-light leading-relaxed mb-12 italic text-text-primary">
                &quot;{testimonials[currentIndex].quote}&quot;
              </h2>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-brand">
                  <Image 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    width={64} 
                    height={64} 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-display uppercase tracking-wider text-text-primary">{testimonials[currentIndex].name}</span>
                <span className="text-brand text-xs font-accent uppercase tracking-widest">{testimonials[currentIndex].handle}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button onClick={prev} className="w-12 h-12 rounded-full border border-border-main flex items-center justify-center hover:border-brand hover:text-brand transition-all">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="w-12 h-12 rounded-full border border-border-main flex items-center justify-center hover:border-brand hover:text-brand transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'O que destaca a assessoria de vocês?', a: 'Não trabalhamos com pacotes prontos. Cada projeto é construído com atenção, estratégia e criatividade sempre com uma visão honesta do que realmente funciona para o seu negócio.' },
    { q: 'Como funciona a Assessoria?', a: 'Começamos com um diagnóstico para entender sua marca, seus objetivos e seu público. A partir daí, montamos um plano sob medida e colocamos em prática com acompanhamento próximo.' },
    { q: 'A partir de quando o trabalho começa?', a: 'Logo após a assinatura do contrato e o alinhamento inicial. Em geral, iniciamos as entregas na primeira semana.' },
    { q: 'E se eu tiver uma empresa pequena?', a: 'Melhor ainda. Trabalhamos com negócios de diferentes tamanhos o que importa é a vontade de crescer, não o tamanho atual.' },
    { q: 'Precisa de contrato?', a: 'Sim. O contrato protege você e garante clareza sobre prazos, entregas e responsabilidades. Nada de surpresas.' },
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="text-brand font-accent uppercase tracking-widest text-sm mb-4 block">FAQ</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase mb-8">Sem <br /> mistério.</h2>
          <p className="text-text-secondary max-w-xs">Respondemos tudo o que você precisar para dar o próximo passo.</p>
        </div>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border-main pb-6">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-4 text-left group"
              >
                <span className={`text-xl md:text-2xl font-display uppercase transition-colors ${openIndex === i ? 'text-brand' : 'text-text-primary'}`}>
                  {faq.q}
                </span>
                <div className="text-text-secondary group-hover:text-brand transition-colors">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-text-secondary leading-relaxed pb-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section id="contato" className="bg-brand py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display uppercase text-white leading-none mb-8"
        >
          Opta. Inova. <br /> Expande.
        </motion.h2>
        <p className="text-white/80 text-lg md:text-xl mb-12 font-medium">Pronto para transformar sua marca no digital?</p>
        <Link 
          href="https://wa.me/5511921414523" 
          className="inline-flex items-center gap-4 bg-[#121212] text-white px-8 py-4 md:px-12 md:py-6 rounded-full text-sm md:text-base font-accent uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl text-center"
        >
          Falar com uma especialista <ArrowRight size={20} className="hidden sm:block" />
        </Link>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bg-primary pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-32">
          <div className="col-span-1 sm:col-span-2">
            <Link href="/" className="text-4xl font-display tracking-tighter mb-6 block">
              OPTCHA
            </Link>
            <p className="text-text-secondary text-xl font-accent uppercase tracking-widest mb-8">
              Opta. Inova. Expande. ⟶
            </p>
            <div className="flex gap-6">
              <Link href="#" className="w-12 h-12 rounded-full border border-border-main flex items-center justify-center hover:border-brand hover:text-brand transition-all">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full border border-border-main flex items-center justify-center hover:border-brand hover:text-brand transition-all">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-accent uppercase tracking-widest text-xs text-brand mb-8">Contato</h4>
            <ul className="space-y-4 text-text-secondary">
              <li className="flex items-center gap-3"><MessageCircle size={16} className="text-brand" /> (11) 9 2141-4523</li>
              <li>optchabrasil@gmail.com</li>
              <li className="text-text-tertiary opacity-50">📍 São Paulo — SP</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-accent uppercase tracking-widest text-xs text-brand mb-8">Navegação</h4>
            <ul className="space-y-4 text-text-secondary">
              <li><Link href="#" className="hover:text-brand transition-colors">Início</Link></li>
              <li><Link href="#sobre" className="hover:text-brand transition-colors">Sobre Nós</Link></li>
              <li><Link href="#servicos" className="hover:text-brand transition-colors">Serviços</Link></li>
              <li><Link href="#cases" className="hover:text-brand transition-colors">Cases</Link></li>
            </ul>
          </div>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-16">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square relative overflow-hidden group">
              <Image 
                src={`https://picsum.photos/seed/insta${i}/400/400?grayscale`} 
                alt={`Insta ${i}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram size={24} />
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border-light pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-text-tertiary text-xs uppercase tracking-widest">
          <span>© 2026 OPTCHA. Todos os direitos reservados.</span>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-text-primary transition-colors">Privacidade</Link>
            <Link href="#" className="hover:text-text-primary transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main Page ---

export default function LandingPage() {
  return (
    <div className="selection:bg-brand selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Services />
        <Cases />
        <Pricing />
        <Testimonial />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      
      {/* Custom Cursor (Simplified) */}
      <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999]">
        <motion.div 
          className="w-8 h-8 border border-brand rounded-full mix-blend-difference"
          animate={{ x: -16, y: -16 }}
          style={{ position: 'fixed', left: 'var(--mouse-x)', top: 'var(--mouse-y)' }}
        />
      </div>
      <script dangerouslySetInnerHTML={{ __html: `
        window.addEventListener('mousemove', (e) => {
          document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
          document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
        });
      `}} />
    </div>
  );
}
