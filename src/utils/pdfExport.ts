import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { TripItinerary } from '@/types/travel';

export const exportItineraryToPDF = async (itinerary: TripItinerary, elementId?: string) => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  let yPosition = 20;

  // Title
  pdf.setFontSize(24);
  pdf.setTextColor(33, 37, 41);
  pdf.text(`${itinerary.destination} Travel Itinerary`, pageWidth / 2, yPosition, { align: 'center' });
  
  yPosition += 15;
  
  // Trip Details
  pdf.setFontSize(12);
  pdf.setTextColor(108, 117, 125);
  pdf.text(`Duration: ${itinerary.duration} days`, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 7;
  pdf.text(
    `Dates: ${new Date(itinerary.startDate).toLocaleDateString()} - ${new Date(itinerary.endDate).toLocaleDateString()}`,
    pageWidth / 2,
    yPosition,
    { align: 'center' }
  );
  yPosition += 7;
  pdf.text(`Total Budget: $${itinerary.totalCost}`, pageWidth / 2, yPosition, { align: 'center' });
  
  yPosition += 15;

  // Itinerary Days
  itinerary.days.forEach((day, index) => {
    // Check if we need a new page
    if (yPosition > pageHeight - 60) {
      pdf.addPage();
      yPosition = 20;
    }

    // Day Header
    pdf.setFontSize(16);
    pdf.setTextColor(33, 37, 41);
    pdf.text(`Day ${day.day}: ${day.title}`, 15, yPosition);
    yPosition += 10;

    // Date
    pdf.setFontSize(10);
    pdf.setTextColor(108, 117, 125);
    pdf.text(`Date: ${new Date(day.date).toLocaleDateString()}`, 15, yPosition);
    yPosition += 8;

    // Activities
    day.activities.forEach((activity) => {
      if (yPosition > pageHeight - 30) {
        pdf.addPage();
        yPosition = 20;
      }

      pdf.setFontSize(11);
      pdf.setTextColor(33, 37, 41);
      pdf.text(`${activity.time} - ${activity.attraction.name}`, 20, yPosition);
      yPosition += 5;
      
      pdf.setFontSize(9);
      pdf.setTextColor(108, 117, 125);
      const descLines = pdf.splitTextToSize(activity.attraction.description, pageWidth - 40);
      descLines.forEach((line: string) => {
        if (yPosition > pageHeight - 20) {
          pdf.addPage();
          yPosition = 20;
        }
        pdf.text(line, 25, yPosition);
        yPosition += 4;
      });
      
      pdf.text(`Duration: ${activity.attraction.duration} | Price: ${activity.attraction.price}`, 25, yPosition);
      yPosition += 5;
      
      if (activity.transport) {
        pdf.text(`Transport: ${activity.transport} - $${activity.transportCost}`, 25, yPosition);
        yPosition += 5;
      }
      
      yPosition += 5;
    });

    // Hotel
    if (day.hotel) {
      pdf.setFontSize(11);
      pdf.setTextColor(33, 37, 41);
      pdf.text(`Accommodation: ${day.hotel.name}`, 20, yPosition);
      yPosition += 5;
      pdf.setFontSize(9);
      pdf.setTextColor(108, 117, 125);
      pdf.text(`Rating: ${day.hotel.rating} ⭐ | Price: $${day.hotel.price}/night`, 25, yPosition);
      yPosition += 10;
    }

    yPosition += 5;
  });

  // Cost Breakdown
  if (yPosition > pageHeight - 50) {
    pdf.addPage();
    yPosition = 20;
  }
  
  pdf.setFontSize(16);
  pdf.setTextColor(33, 37, 41);
  pdf.text('Cost Breakdown', 15, yPosition);
  yPosition += 10;
  
  pdf.setFontSize(11);
  pdf.setTextColor(108, 117, 125);
  pdf.text(`Accommodation: $${itinerary.costBreakdown.accommodation}`, 20, yPosition);
  yPosition += 6;
  pdf.text(`Transportation: $${itinerary.costBreakdown.transport}`, 20, yPosition);
  yPosition += 6;
  pdf.text(`Activities: $${itinerary.costBreakdown.activities}`, 20, yPosition);
  yPosition += 6;
  pdf.text(`Food: $${itinerary.costBreakdown.food}`, 20, yPosition);
  yPosition += 8;
  pdf.setFontSize(12);
  pdf.setTextColor(33, 37, 41);
  pdf.text(`Total: $${itinerary.totalCost}`, 20, yPosition);

  // Save the PDF
  pdf.save(`${itinerary.destination.replace(/\s+/g, '_')}_itinerary.pdf`);
};

export const exportItineraryWithScreenshot = async (elementId: string, itinerary: TripItinerary) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
  });

  const pdf = new jsPDF('p', 'mm', 'a4');
  const imgData = canvas.toDataURL('image/png');
  const imgWidth = 210;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  pdf.save(`${itinerary.destination.replace(/\s+/g, '_')}_itinerary.pdf`);
};