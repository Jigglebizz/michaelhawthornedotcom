<template>
  <v-container fluid pa-3>
    <v-timeline align-top>
      <v-timeline-item
        v-for="(item, i) in experiences"
        :key="i"
        :color="item.color"
      >
        <template v-slot:opposite>
          <span
            :class="`font-weight-bold`"
            :style=getTextStyle(item)
          >
            {{item.name}}<br />{{item.period}}
          </span>
        </template>
        <v-card py-3
          :color="item.color"
          dark>
          <v-card-title title>
            {{item.title}}
          </v-card-title>
          <span v-if="item.content.length > 1">
            <v-card-text class="white text--primary">
              <v-window v-model="item.contentSelection">
                <v-window-item
                  v-for="(content, j) in item.content"
                  :key="j"
                  :value="j"
                >
                  <WorkCard v-bind:content="content" />
                </v-window-item>
              </v-window>
          </v-card-text>
          <v-card-actions class="justify-space-between white text--primary">
            <v-btn
              :color="item.color"
              flat
              icon
              @click="prev(item)"
            >
              <v-icon light>chevron_left</v-icon>
            </v-btn>
            <v-item-group
              v-model="item.contentSelection"
              class="text-xs-center"
              mandatory
            >
              <v-item
                v-for="n in item.content.length"
                :key="`btn-${n}`"
              >
                <v-btn
                  slot-scope="{ active, toggle }"
                  :input-value="active"
                  :color="item.color"
                  flat
                  icon
                  @click="toggle(item)"
                >
                  <v-icon>fiber_manual_record</v-icon>
                </v-btn>
              </v-item>
            </v-item-group>
            <v-btn
              :color="item.color"
              flat
              icon
              @click="next(item)"
            >
              <v-icon>chevron_right</v-icon>
            </v-btn>
          </v-card-actions>
          </span>
          <span v-else>
            <v-card-text class="white text--primary">
              <WorkCard v-bind:content="item.content[0]" />
            </v-card-text>
          </span>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import WorkCard from '@/components/WorkCard'

export default {
  components: {WorkCard},
  methods: {
    getTextStyle: function (item) {
      return 'color:' + item.color
    },
    prev: function (item) {
      console.log('prev')
      item.contentSelection = item.contentSelection - 1 < 0
        ? item.content.length - 1
        : item.contentSelection - 1
    },
    next: function (item) {
      console.log(item.name)
      item.contentSelection = item.contentSelection + 1 === length
        ? 0
        : item.contentSelection + 1
      console.log(item.contentSelection)
    }
  },
  data: function () {
    return {
      experiences: [
        {
          name: 'WISER Systems',
          color: '#f31212',
          period: '2017-Present',
          title: 'Director of Software Development',
          contentSelection: 0,
          content: [
            {
              text: `After the merger of Dell and EMC, several of my work friends were let go. \
                I was tired of working for a 70,000 employee company, and it was about to become 170,000 strong. \
                In an effort to try something new, I joined up as the first engineering hire at WISER Systems. 170,000 to 4. It was quite a change.
                I was now in charge of all of all engineering initiatives at a company. I set up version control, issue reporting, a testing strategy, and implemented \
                a version of agile that worked for our small team.`,
              image: require('@/assets/wiseranchors.jpg')
            },
            {
              text: `WISER had just made its first big sale, and I began work on a new radio system that had just barely proven that it worked. \
                When I started, the software system was about 10,000 lines of C++ code, split between two files. The software was very fragile - any small \
                change could break the whole system. Additionally, two hardware products were completed, \
                but two more were needed to roll out an installation. With a very tight deadline, I began refactoring. Within three months we had \
                succesfully delivered our product, but not before hiring a second engineer halfway to this deadline.`,
              image: require('@/assets/wisertracking.jpg')
            },
            {
              text: `From this point, we started the process of maturing and scaling the product. Quality became very important, so I built a software model \
                of our hardware products and their radio interactions to aid in test.<br /><br />Onsite visits became common for me. \
                I was the primary contact with our biggest customer. \
                Our little proof of concept went from a maximum of 12 antennas to a full-scale, automatically synchronizing, auto-recovering \
                120-antenna installation. When we started, we supported a handful of tags at once. We could now track hundreds per second. 
                <br /><br /> 
                The codebase had grown to nearly 200,000 lines. I demoed the product at CES. Our customer base grew and the company was beginning to thrive.`,
              image: require('@/assets/wiserces.jpg')
            },
            {
              text: `It became apparent that our customers had trouble logging into a Windows machine for managing the system. Our next goal would be \
                delivering a web application for system administration. I decided to hire a contractor to get us started, and I soon took over web development full time. \
                I had never done any kind of web development before, but the "WISER Way" says that no engineering challenge is a roadbloack. \
                I managed to create a web interface that offers a high-speed visual display of the system's location data with a user-friendly management console.`,
              image: null
            }
          ]
        },
        {
          name: 'Dell-EMC',
          color: '#2b91d7',
          period: '2012-2017',
          title: 'Software Engineer II',
          contentSelection: 0,
          content: [
            {
              text: `My post-college career started at EMC, before the merger with Dell. \
                I was hired in the midrange storage system department, into a  program referred to as LEAP. LEAP was focused on giving new hires \
                experience on several different teams within the organization. The end-goal of which was to expose \
                the candidates to different management styles, as well as pieces of the large machine that churned out market-leader data storage systems. \
                The LEAP Program consisted of three 9-month long rotations, and one large project that spanned the duration of the program.`,
              image: require('@/assets/80-drive-DAE.jpg')
            },
            {
              text: `I spent my first rotation on the internal automation and test tools team. Our test tools were written in Perl. \
                I wrote many pieces of connector code to allow our tools to communicate with the various interfaces on our storage arrays.
                It was on this team that I began to formulate what my long-term project would be.`,
              image: null
            },
            {
              text: `My second rotation was on a team known as TCE - Total Customer Experience. \
                We were responsible for triaging hot issues and delivering hotfixes to customers. I was given a good amount of freedom to work on my LEAP project, \
                and work as corporate liason to EMC's sponsorship of an NC State Senior Design project. The LEAP Project was ambitious, but I leveraged the \
                seniors at NC State to build a front-end, while the LEAP team at EMC worked on hardware and backend software. \
                At this point in time, quick-turnaround customer interactions would stress me out. \
                I had no idea what would be in store when I eventually left for Wiser Systems.`,
              image: null
            },
            {
              text: `Speaking of the LEAP Project, what was this Big Idea? \
                The organization had ambitions of 24-7 testing. While America slept, the Chinese teams would continue efforts during their day. \
                This required a high level of remote automation. All software tasks could be completed via the automated testing tools, but physical tasks would still need to be handled manually. \
                My goal was ambitious, but focused: a test automation robot that could manage these tasks remotely. I managed this project, from hardware design and fabrication, to software implementation. \
                I had heard, after leaving, that EMC's lean manufacturing department had ordered 900 units to aid in hardware verification across the globe. \
                <br /><br />I count this project as a major success.
              `,
              image: require('@/assets/circuitboard.jpg')
            },
            {
              text: `My third and final rotation was on the layered-drivers team. I had been fixing bugs that these guys had introduced for nine months now. \
                It was finally time to introduce some bugs of my own 😈<br /><br /> \
                I spent most of my time on this team orchestrating our automated tests. I managed our Jenkins server cluster, and moved us toward a fully-realized \
                CI goal. I also managed the Accurev streams for our team, and occassionally got to implement some C++ code!`,
              image: null
            }
          ]
        },
        {
          name: 'UXB International',
          color: '#6e7b84',
          period: '2010-2012',
          title: 'Business Process Analyst and Software Engineer',
          contentSelection: 0,
          content: [
            {
              text: `UXB required an improved process for their expense reports. \
                I was hired to create a solution that would be simple for all the stakeholders in the process. \
                I wrote and delivered a solution in C# and .NET that would connect to the American Express portal \
                and convert all expense reports into Excel sheets for all employees with Amex cards. \
                These sheets were automatically emailed to employee cardholders. \
                After completing, users would click a button in their expense sheet that would e-mail a copy to a repository on the UXB Server. \
                Finally, a GUI application was delivered to the accounting department to access and manage these reports.`,
              image: require('@/assets/grenade.jpg')
            },
            {
              text: `Aside from my primary task, I also helped with managing general IT services at the company. LDAP management, \
                repairing employee laptops, and general management of the email server were ordinary responsibilities.`,
              image: null
            },
            {
              text: `There was a grenade on my desk recovered from the field. Nobody could tell me if it had been disarmed or not.`
            }
          ]
        },
        {
          name: 'DISIS at Virginia Tech',
          color: '#e97e1b',
          period: '2009-2010',
          title: 'Undergraduate Research Assistant',
          contentSelection: 0,
          content: [
            {
              text: `At DISIS, my project was Virginia Tech's Linux Laptop Orchestra (L2Ork). \
                This is where I had my first professional experience with multithreaded applications, writing Linux drivers for the Wii-Remote in C. \
                I also soldered and built the hemispherical speakers used by the orchestra. \
                Traditional speakers only send sound in a single direction, but a hemispherical speaker \
                can project sound like an acoustic instrument, allowing an electronic performer to take \
                full advantage of the acoustics in a performance hall. There are a lot of cool videos on \
                the <a target="_blank" href="https://www.youtube.com/user/VTDISIS">DISIS Youtube page</a> \
                of people using the systems I built!`,
              image: require('@/assets/l2orkspeaker.jpg')
            },
            {
              text: `One of the coolest things about this project is that I've run into several musicians and devs at hack-a-thons who have used my \
                drivers to enable their music and personal projects. `
            }
          ]
        }
      ]
    }
  }
}
</script>
