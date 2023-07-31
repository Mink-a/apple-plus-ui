import { QuestionAndAnswerData } from "@/data/data";
import Accordion from "./accordion";
import styles from "../../styles/accordion.module.scss";

export default function FaqSection() {
  return (
    <section>
      <div className={styles.accordionCard}>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 62,
            color: "black",
            margin: "1em 0",
          }}
        >
          Questions? Answers.
        </h2>
        <div className={styles.accordion}>
          {QuestionAndAnswerData.map(({ id, question, answer }) => (
            <Accordion key={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import React from "react";
// import * as Accordion from "@radix-ui/react-accordion";
// import classNames from "classnames";
// import { ChevronDownIcon } from "@radix-ui/react-icons";
// import "./styles.css";

// export default function FaqSection() {
//   return (
//     <Accordion.Root
//       className='AccordionRoot'
//       type='single'
//       defaultValue='item-1'
//       collapsible
//     >
//       <Accordion.Item className='AccordionItem' value='item-1'>
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </Accordion.Item>
//     </Accordion.Root>
//   );
// }

// const AccordionTrigger = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => (
//     <Accordion.Header className='AccordionHeader'>
//       <Accordion.Trigger
//         // className={classNames("AccordionTrigger", className)}
//         {...props}
//         ref={forwardedRef}
//       >
//         {children}
//         {/* <ChevronDownIcon className='AccordionChevron' aria-hidden /> */}
//       </Accordion.Trigger>
//     </Accordion.Header>
//   )
// );

// const AccordionContent = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => (
//     <Accordion.Content
//       //   className={classNames("AccordionContent", className)}
//       {...props}
//       ref={forwardedRef}
//     >
//       <div className='AccordionContentText'>{children}</div>
//     </Accordion.Content>
//   )
// );

// export default AccordionDemo;
