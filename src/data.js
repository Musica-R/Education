import { FaFileWord, FaFileExcel, FaFilePowerpoint, FaJava, FaPython } from 'react-icons/fa';
import { SiC } from 'react-icons/si';

const u = (id, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const img = {
  hero: u('photo-1523240795612-9a054b0db644', 1000),
  hero2: u('photo-1571260899304-425eee4c7efc', 700),
  class: u('photo-1524178232363-1fb2b075b655', 900),
  team: u('photo-1522202176988-66273c2fd55f', 900),
  lab: u('photo-1498050108023-c5249f4df085', 900),
};

export const courses = [
  { id: 1, Icon: FaFileWord, title: 'MS Office', tag: 'Office', dur: '8 Weeks', level: 'Beginner', price: '₹3,500', img: u('photo-1454165804606-c3d57bc86b40'), pts: ['Word documents, letters & resumes', 'Mail merge and templates', 'Typing speed and keyboard shortcuts', 'Basics of Excel and PowerPoint'] },
  { id: 2, Icon: FaFileExcel, title: 'MS Excel', tag: 'Office', dur: '8 Weeks', level: 'Beginner to Advanced', price: '₹4,000', img: u('photo-1551288049-bebda4e38f71'), pts: ['Formulas and 100+ functions', 'Charts, pivot tables, dashboards', 'VLOOKUP, XLOOKUP & IF logic', 'Data cleaning and reports'] },
  { id: 3, Icon: FaFilePowerpoint, title: 'MS PowerPoint', tag: 'Office', dur: '4 Weeks', level: 'Beginner', price: '₹2,500', img: u('photo-1552664730-d307ca884978'), pts: ['Slide design and layouts', 'Animations and transitions', 'Charts, SmartArt and media', 'Presenting with confidence'] },
  { id: 4, Icon: SiC, title: 'C Programming', tag: 'Coding', dur: '10 Weeks', level: 'Beginner', price: '₹4,500', img: u('photo-1515879218367-8466d910aaa4'), pts: ['Logic building and flowcharts', 'Loops, arrays and strings', 'Functions, pointers, structures', 'Mini projects and practice sets'] },
  { id: 5, Icon: FaJava, title: 'Java', tag: 'Coding', dur: '12 Weeks', level: 'Intermediate', price: '₹6,000', img: u('photo-1461749280684-dccba630e2f6'), pts: ['Core Java and OOP concepts', 'Collections and exceptions', 'File handling and JDBC basics', 'Final project and interview prep'] },
  { id: 6, Icon: FaPython, title: 'Python', tag: 'Coding', dur: '10 Weeks', level: 'Beginner', price: '₹5,500', img: u('photo-1526379095098-d400fd0bf935'), pts: ['Syntax, data types, functions', 'Lists, dictionaries, files', 'Libraries and automation scripts', 'Small real-world projects'] },
];

export const gallery = [
  u('photo-1524178232363-1fb2b075b655'), u('photo-1522202176988-66273c2fd55f'),
  u('photo-1571260899304-425eee4c7efc'), u('photo-1498050108023-c5249f4df085'),
  u('photo-1517694712202-14dd9538aa97'), u('photo-1503676260728-1c00da094a0b'),
  u('photo-1543286386-713bdd548da4'), u('photo-1552664730-d307ca884978'),
  u('photo-1523240795612-9a054b0db644'),
];

export const stats = [['2,500+', 'Students trained'], ['6', 'Job-ready courses'], ['15+', 'Years of teaching'], ['92%', 'Placed or upskilled']];

export const staff = [
  { name: 'Mr. B. Murugan', role: 'Founder & Director', sub: 'Java, C Programming', exp: '15 years', img: u('photo-1507003211169-0a1dd7228f2d', 600) },
  { name: 'Ms. R. Priyadharshini', role: 'Senior Trainer', sub: 'MS Excel, MS Office', exp: '9 years', img: u('photo-1494790108377-be9c29b29330', 600) },
  { name: 'Mr. S. Karthikeyan', role: 'Programming Mentor', sub: 'Python, C', exp: '7 years', img: u('photo-1500648767791-00dcc994a43e', 600) },
  { name: 'Ms. M. Anitha', role: 'Office Skills Trainer', sub: 'PowerPoint, Typing', exp: '6 years', img: u('photo-1438761681033-6461ffad8d80', 600) },
];

export const reviews = [
  ['Divya R.', 'MS Excel course', 'I now build the monthly reports at my office myself. The trainers explain every formula slowly and patiently.'],
  ['Karthik S.', 'Java course', 'Small batch, daily practice and real projects. I cleared my first interview within a month of finishing.'],
  ['Meena P.', 'MS Office course', 'I started with zero computer knowledge. After eight weeks I type and prepare documents confidently.'],
];

export const faqs = [
  ['Do I need any computer knowledge before joining?', 'No. Our MS Office, PowerPoint and C courses start from the very basics. Excel, Java and Python also begin with a quick revision.'],
  ['What are the batch timings?', 'We run morning (8–10 AM), evening (5–8 PM) and weekend batches. Tell us what suits you and we will fit you into the closest batch.'],
  ['Will I get a certificate?', 'Yes. You receive a BM Institute certificate after completing the course and the final project.'],
  ['Can I attend a demo class before paying?', 'Yes. Send us a message on WhatsApp and we will book you a free demo class.'],
  ['Do I need my own laptop?', 'No. Every student practices on a computer in our lab. You can bring your own laptop if you prefer.'],
  ['Are fees payable in installments?', 'Yes. You can pay in two installments. Message us for the details.'],
  ['Do you help with jobs or interviews?', 'We help with resume building, mock interviews and sharing openings from companies we know.'],
];

export const batches = [
  ['Morning batch', '8:00 AM – 10:00 AM', 'Mon – Sat', 'Best for college students and job seekers'],
  ['Evening batch', '5:00 PM – 8:00 PM', 'Mon – Sat', 'Best for school students and working people'],
  ['Weekend batch', '10:00 AM – 4:00 PM', 'Sat & Sun', 'Best for people with a full week schedule'],
];

export const path = [
  ['Enquire', 'Message us on WhatsApp or visit the center.'],
  ['Free demo', 'Attend a demo class and meet your trainer.'],
  ['Learn & practice', 'Daily lessons followed by lab practice.'],
  ['Final project', 'Build a project you can show to employers.'],
  ['Certificate', 'Get certified and start applying.'],
];
