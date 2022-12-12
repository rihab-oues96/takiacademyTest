import video from "../images/video.png";
import live from "../images/live.png";
import students from "../images/students.png";
import courses from "../images/courses.png";
import profs from "../images/profs.png";
import agent from "../images/agent.png";
import questions from "../images/questions.png";
import resums from "../images/resums.png";
import forum from "../images/forum.png";

import student from "../images/student-img.png";
import parents from "../images/parents.png";
import schools from "../images/schools.png";
import societies from "../images/societies.png";

export const numbersInfo = [
  {
    id: 1,
    stats: 50000,
    description: "فيديو في جميع المواد",
    image: video,
  },
  { id: 2, stats: 450, description: "حصّة مباشرة شهريا", image: live },
  {
    id: 3,
    stats: 270,
    description: "تلميذ مسجّل في الموقع",
    image: students,
  },
  {
    id: 4,
    stats: 50000,
    description: "دروس مطابقة للبرامج الرسميّة",
    image: courses,
  },
  {
    id: 5,
    stats: 280,
    description: "أستاذا و معلّما ذوي خبرة و كفاءة",
    image: profs,
  },
  {
    id: 6,
    stats: 120,
    description: "موظفا لمتابعة التلاميذ",
    image: agent,
  },
];

export const descriptionInfo = [
  {
    id: 1,
    description: "فيديوهات تفسير الدروس مع تمارين",
    image: video,
  },
  {
    id: 2,
    description: `مجلات رقمية
  (كتب موازية + تلاخيص الدروس)`,
    image: courses,
  },
  {
    id: 3,
    description: `أسئلة تفاعلية
    (QUIZ/QCM)`,
    image: questions,
  },
  {
    id: 4,
    description: "حصص مباشرة تفاعليّة",
    image: live,
  },
  {
    id: 5,
    description: "تلاخيص الدروس",
    image: resums,
  },
  {
    id: 6,
    description: `منتدى للتفاعل و طرح
    الأسئل (Forum)
    `,
    image: forum,
  },
];

export const customersInfo = [
  {
    id: 1,
    title: "التلاميذ",
    description:
      "ابدأ مراجعتك عن بعد و ابق على تواصل مع أساتذتك و معلّميك في المنصّة بدون ميزانية عالية",
    image: student,
    link: "فضاء التلميذ",
  },
  {
    id: 2,
    title: "الأولياء",
    description:
      "تابع تقدّم مراجعة ابنائك ونشاطهم في المنصّة من خلال فضاء الولي",
    image: parents,
    link: "فضاء الولي",
  },
  {
    id: 3,
    title: "المدارس والمعاهد",
    description:
      "ابق على تواصل مع تلامذتك دائمًا وانقل نشاطك التعليميّ إلى المنصّة لتقديم أفضل بيئة تعليميّة رقميّة للتلاميذ.",
    image: schools,
    link: "فضاء المؤسسات",
  },
  {
    id: 4,
    title: "المؤسسات",
    description:
      " منفتحين من خلال اتفاقيات الشراكة مع المؤسسات العمومية و الخاصّة لمساعدة الأولياء من تمكّن أبنائهم بالانتفاع و الاستمتاع بتجربة الدّراسة عبر الانترنت ",
    image: societies,
    link: "فضاء المؤسسات",
  },
];
