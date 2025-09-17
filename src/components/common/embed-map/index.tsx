export default function GoogleReview() {
  return (
    <div className="w-full flex justify-center">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d33390755.092910763!2d18.734128718512878!3d59.28268828094335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1758047386258!5m2!1sen!2s" 
        width="800" 
        height="600" 
        style={{border:0}} 
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
}
