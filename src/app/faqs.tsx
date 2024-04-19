import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
  return (
    <>
      <div className=" w-3/4 flex flex-col gap-8 mt-10">
        <h1 className="text-5xl font-semibold">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Why should I use CourseLynx?</AccordionTrigger>
            <AccordionContent>
              CourseLynx is more than just a communication platform; it&apos;s a
              community where students can collaborate, share resources, and
              support each other&apos;s learning journey. Unlike other
              platforms, CourseLynx is tailored specifically to the needs of
              students, offering organized group chats, verified student
              communities, and essential tools for academic collaboration.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is CourseLynx free to use?</AccordionTrigger>
            <AccordionContent>Yes.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              What makes CourseLynx different from other communication
              platforms?
            </AccordionTrigger>
            <AccordionContent>
              Built just for students. We made CourseLynx to fix all the
              problems we had with course group chats. We wanted to make it
              easier to{" "}
              <span className="font-medium text-blue-600">
                find and join course group chats
              </span>
              , have{" "}
              <span className="font-medium text-blue-600">
                easy discussions with classmates
              </span>
              , find and{" "}
              <span className="font-medium text-blue-600">share resources</span>
              .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              Is CourseLynx associated with UF or any other university?
            </AccordionTrigger>
            <AccordionContent>
              No we just use your .edu email to verify that you are a student.
              You can switch after you sign up.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              What makes CourseLynx group chats &quot;organize&quot;?
            </AccordionTrigger>
            <AccordionContent>
              Each course has a &quot;standard&quot; group chat like GroupMe and
              discussion board (kinda like a subreddit for each course).
              Questions can be asked on the discussion board and then answered
              under each post instead of scattered through the group chat. The
              group chat is for more casual conversation.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* <!-- Calendly inline widget begin --> */}
      <div
        className="inline min-w-sm "
        data-url="https://calendly.com/courselynx/focus-group"
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
      {/* <!-- Calendly inline widget end -- */}
    </>
  );
}
