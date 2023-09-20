import prisma from "./database";

(async () => {
  const studentsByClass = await prisma.student.groupBy({
    by: "class",
    _count: { id: true },
    orderBy: {
      _count: { id: "desc" },
    },
  });
  const studentsByJobs = await prisma.student.groupBy({
    by: "class",
    where: {
      jobId: null,
    },
    _count: { class: true },
    orderBy: {
      _count: { id: "desc" },
    },
  });
  console.log(studentsByClass, studentsByJobs);
})();
