import icon from "../../assets/icons8-pdf-48.png";
export const PDFGeneratorButton = () => {
  const generatePDF = () => {
    console.log("Generating PDF");

    const menuContent = document.getElementById('menu-content');
    
    if (!menuContent) {
      console.error('Menu content element not found');
      return;
    }

    const printContent = menuContent.cloneNode(true) as HTMLElement;
    
    const buttonsToRemove = Array.from(printContent.getElementsByTagName('button'));
    buttonsToRemove.forEach(button => button.remove());

    const printContents = printContent.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <button 
      onClick={generatePDF}
      className=""
    >
      <img src={icon} alt="" className="w-16 h-16"/>
    </button>
  );
};

export default PDFGeneratorButton;