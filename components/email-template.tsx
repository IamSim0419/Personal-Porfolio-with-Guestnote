import * as React from "react";

interface EmailTemplateProps {
  fullname: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullname,
}) => (
  <div>
    <h1>
      Dear, {fullname},
    </h1>
    <p>
      I hope this message finds you well! Thank you so much for taking the time to review my profile and consider me for the Front-End Developer position. I&apos;m truly excited about the opportunity to contribute my skills and passion for creating engaging, user-friendly web applications. As someone
      who thrives on continuous learning and problem-solving, I&apos;m eager to bring my expertise in Next.js and front-end development to your team.
      <br />
      If you have any questions or would like to discuss the position further, please feel free to reach out to me either through LinkedIn or via email at simreich1989@gmail.com. I&apos;d be happy to connect and explore how I
      can contribute to your team&apos;s success. 
      <br />
      Looking forward to hearing from you soon! 
      <br />
      Warm regards,{" "}
      <br />
      Simrech Somogod
    </p>
  </div>
);
