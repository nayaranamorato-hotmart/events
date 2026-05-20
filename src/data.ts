import { EventData } from './types';

export const eventData: EventData = {
  id: 'hotmart-spark',
  name: 'Hotmart Spark',
  date: '31 de março 2026',
  location: 'Community Creators Academy - São Paulo, SP',
  ticketCount: 3,
  about:
    'O 3º Encontro de Profissionais de 3D e Audiovisual é o ponto de convergência entre a técnica acadêmica e a realidade dos grandes estúdios globais. Em sua terceira edição, o evento deixa as telas para ganhar o mundo real no Centro de Convenções de São Paulo, transformando-se no maior ponto de encontro para artistas, modeladores, diretores de arte e entusiastas da computação gráfica no Brasil.',
  aboutHtml: `<p>O 3º Encontro de Profissionais de 3D e Audiovisual é o ponto de convergência entre a técnica acadêmica e a realidade dos grandes estúdios globais. Em sua terceira edição, o evento deixa as telas para ganhar o mundo real no Centro de Convenções de São Paulo, transformando-se no maior ponto de encontro para artistas, modeladores, diretores de arte e entusiastas da computação gráfica no Brasil. 🇧🇷</p>
<p>Ao longo de dois dias intensos (10 e 11 de setembro), o evento oferece uma imersão profunda nas tendências que estão moldando o futuro do entretenimento e da tecnologia. 💡</p>
<p><strong>Por que participar?</strong> 🤔</p>
<p>Este encontro foi desenhado para quem não se contenta com o básico. Enquanto a nossa escola digital entrega o domínio das ferramentas, o evento presencial entrega a visão de mercado e o networking que os tutoriais não conseguem alcançar.</p>
<p><strong>Palestras de Classe Mundial:</strong> Aprenda com quem está no "front" de produção de títulos AAA e blockbusters internacionais.</p>
<p><strong>Networking Estratégico:</strong> Saia da bolha digital e conecte-se com recrutadores, diretores e possíveis parceiros de projeto.</p>
<p><strong>Tecnologia de Ponta:</strong> Áreas de demonstração com o que há de mais novo em captura de movimento, renderização em tempo real e hardware de alta performance.</p>
<p>Prepare-se para trocar o mouse pelo aperto de mão e o chat pelo café com quem respira 3D todos os dias. O próximo nível do seu portfólio começa aqui.</p>`,
  materials: [
    { id: 'm1', type: 'youtube', title: 'Como Manu Gavassi', subtitle: 'https://www.youtube.com/watch?v=...' },
    { id: 'm2', type: 'pdf-image', title: 'Receita-Pizza-Napolitana', subtitle: 'PDF · 1.2mb' },
    { id: 'm3', type: 'pdf-icon', title: 'Receita-Pizza-Napolitana', subtitle: 'PDF · 1.2mb' },
    { id: 'm4', type: 'link', title: 'Como Manu Gavassi', subtitle: 'https://www.youtube.com/watch?v=...' },
    { id: 'm5', type: 'file', title: 'Receita-Pizza-Napolitana', subtitle: '1.2mb' },
    { id: 'm6', type: 'file', title: 'Receita-Pizza-Napolitana', subtitle: '1.2mb' },
    { id: 'm7', type: 'link', title: 'Como Manu Gavassi', subtitle: 'https://www.youtube.com/watch?v=...' },
    { id: 'm8', type: 'youtube', title: 'Workshop: Iluminação 3D', subtitle: 'https://www.youtube.com/watch?v=...' },
    { id: 'm9', type: 'pdf-icon', title: 'Guia-Renderização-VFX', subtitle: 'PDF · 3.5mb' },
    { id: 'm10', type: 'file', title: 'Slides-Masterclass-Modelagem', subtitle: '8.2mb' },
    { id: 'm11', type: 'link', title: 'Portfólio 3D - Referências', subtitle: 'https://www.artstation.com/...' },
    { id: 'm12', type: 'pdf-image', title: 'Cronograma-Oficial-Evento', subtitle: 'PDF · 0.8mb' },
  ],
  schedule: [
    {
      day: 10,
      dayName: 'SÁB',
      sessions: [
        {
          id: 's1',
          title: 'Credenciamento e abertura',
          startTime: '20h',
          endTime: '21h',
          description:
            'Credenciamento dos participantes e abertura oficial do evento com boas-vindas da organização e apresentação da programação completa.',
        },
        {
          id: 's2',
          title: 'Palestra: Construindo Mundos AAA com Dr. Aris Thorne (Episódio Especial)',
          startTime: '20h',
          endTime: '21h',
          venue: 'Palco Principal',
          speakers: [
            { id: 'sp1', name: 'Dr. Ari Thorne', initials: 'AT', color: '#8B4513' },
            { id: 'sp2', name: 'Carlos Junior', initials: 'CJ', color: '#2E8B57' },
          ],
          description:
            'Prepare-se para dominar a verdadeira Pizza Napolitana com a renomada chef Antonia Lofaso! Nos dias 10 e 11 de março de 2026, venha participar de uma imersão presencial que une o rigor das tradições italianas às técn...',
        },
      ],
    },
    {
      day: 11,
      dayName: 'DOM',
      sessions: [
        {
          id: 's3',
          title: 'Palestra: Modelagem de Personagens Hiper-realistas com Beatriz Fontana',
          startTime: '20h',
          endTime: '21h',
          speakers: [{ id: 'sp3', name: 'Beatriz Fontana', initials: 'BF', color: '#7B2D8B' }],
          description:
            'Uma palestra imersiva sobre as técnicas mais avançadas de modelagem de personagens hiper-realistas utilizadas em produções de alto impacto na indústria do entretenimento global.',
        },
        {
          id: 's4',
          title: 'Palestra: O Futuro do VFX no Cinema com Marcus Vance (Insights Exclusivos)',
          startTime: '20h',
          endTime: '21h',
          speakers: [{ id: 'sp4', name: 'Marcus Vence', initials: 'MV', color: '#C0392B' }],
          description:
            'Marcus Vance compartilha sua visão sobre o futuro dos efeitos visuais no cinema e como as novas tecnologias de IA e renderização em tempo real estão transformando completamente a indústria.',
        },
        {
          id: 's5',
          title: 'Palestra: Realidade Aumentada e Novos Mercados de Trabalho',
          startTime: '20h',
          endTime: '21h',
          speakers: [{ id: 'sp5', name: 'Juliana Salles', initials: 'JS', color: '#2980B9' }],
          description:
            'Como a realidade aumentada está criando novas oportunidades de trabalho e transformando mercados tradicionais. Uma análise profunda das tendências que moldarão os próximos anos.',
        },
        {
          id: 's6',
          title: "Palestra: Masterclass de Renderização Real-Time com Kevin O'Connell",
          startTime: '20h',
          endTime: '21h',
          speakers: [{ id: 'sp6', name: "Kevin O'Connell", initials: 'KO', color: '#16A085' }],
          description:
            "Uma masterclass completa sobre técnicas de renderização em tempo real com Kevin O'Connell, referência mundial em inovação tecnológica e performance gráfica.",
        },
      ],
    },
  ],
};
