const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkData() {
  try {
    const patientCount = await prisma.patientSubmission.count();
    const careHomeCount = await prisma.careHomeSubmission.count();
    const privateGPCount = await prisma.privateGPSubmission.count();
    const nhsGPCount = await prisma.nHSGPSubmission.count();
    const contactCount = await prisma.contactSubmission.count();

    console.log('📊 Database Contents:');
    console.log('-------------------');
    console.log(`Patient Submissions: ${patientCount}`);
    console.log(`Care Home Submissions: ${careHomeCount}`);
    console.log(`Private GP Submissions: ${privateGPCount}`);
    console.log(`NHS GP Submissions: ${nhsGPCount}`);
    console.log(`Contact Submissions: ${contactCount}`);
    console.log('-------------------');
    console.log(`Total Submissions: ${patientCount + careHomeCount + privateGPCount + nhsGPCount + contactCount}`);

    if (patientCount > 0) {
      const latestPatient = await prisma.patientSubmission.findFirst({
        orderBy: { createdAt: 'desc' }
      });
      console.log('\n📝 Latest Patient Submission:');
      console.log(`Name: ${latestPatient.contactName || 'Anonymous'}`);
      console.log(`Created: ${latestPatient.createdAt}`);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkData();