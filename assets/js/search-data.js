// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order. asterisk (*) indicates the equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Please find my full CV by clicking the top pdf button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-the-sequel-of-the-paper-quot-causal-program-dependence-analysis-quot",
        
          title: "The sequel of the paper &quot;Causal Program Dependence Analysis&quot;",
        
        description: "Lessons learned from phd journey",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/sequal-of-cpda/";
          
        },
      },{id: "post-until-scabs-form-and-calluses-build-up-딱지가-앉고-굳은살이-배길-때-까지-quot",
        
          title: "Until scabs form and calluses build up | 딱지가 앉고 굳은살이 배길 때...",
        
        description: "Why am I starting a blog?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/blog-start/";
          
        },
      },{id: "news-mortar-board-i-successfully-defended-my-ph-d-thesis",
          title: ':mortar_board: I successfully defended my Ph.D. thesis.',
          description: "",
          section: "News",},{id: "news-microphone-i-presented-an-invited-talk-at-handong-global-university-on-statistical-program-dependence-analysis",
          title: ':microphone: I presented an invited talk at Handong Global University on “Statistical Program...',
          description: "",
          section: "News",},{id: "news-mortar-board-i-graduated-from-kaist-with-a-ph-d-degree-and-joined-max-planck-institute-for-security-and-privacy-mpi-sp-in-bochum-germany-as-a-postdoctoral-researcher",
          title: ':mortar_board: I graduated from KAIST with a Ph.D. degree, and joined Max Planck...',
          description: "",
          section: "News",},{id: "news-tada-our-paper-statistical-reachability-analysis-has-been-accepted-to-esec-fse-2023",
          title: ':tada: Our paper “Statistical Reachability Analysis” has been accepted to ESEC/FSE 2023!',
          description: "",
          section: "News",},{id: "news-mortar-board-i-have-been-invited-to-serve-as-a-program-committee-member-for-ase-2023",
          title: ':mortar_board: I have been invited to serve as a program committee member for...',
          description: "",
          section: "News",},{id: "news-microphone-i-presented-an-invited-talk-at-sheffield-causality-and-testing-workshop-on-causal-program-dependence-analysis",
          title: ':microphone: I presented an invited talk at Sheffield Causality and Testing Workshop on...',
          description: "",
          section: "News",},{id: "news-tada-our-paper-extrapolating-coverage-rate-in-greybox-fuzzing-has-been-accepted-to-icse-2024",
          title: ':tada: Our paper “Extrapolating coverage rate in greybox fuzzing” has been accepted to...',
          description: "",
          section: "News",},{id: "news-mortar-board-i-have-been-invited-to-serve-as-a-program-committee-member-for-issta-2024-and-ecoop-2024-both-the-main-track-and-artifact-evaluation-track",
          title: ':mortar_board: I have been invited to serve as a program committee member for...',
          description: "",
          section: "News",},{id: "news-microphone-i-presented-an-invited-talk-at-kaist-and-unist-on-statistical-program-analysis-the-slides-are-available-here",
          title: ':microphone: I presented an invited talk at KAIST and UNIST on “Statistical Program...',
          description: "",
          section: "News",},{id: "news-trophy-i-received-the-casa-jump-start-post-doctoral-fellowship-from-casa-cyber-security-in-the-age-of-large-scale-adversaries-with-a-research-proposal-on-statistical-security-analysis-for-large-evolving-software",
          title: ':trophy: I received the CASA Jump.Start Post-Doctoral Fellowship from CASA - Cyber Security...',
          description: "",
          section: "News",},{id: "news-mortar-board-i-have-been-invited-to-serve-as-a-program-committee-member-for-the-3rd-international-fuzzing-workshop-fuzzing-24-and-the-24th-ieee-international-conference-on-source-code-analysis-and-manipulation-scam-2024",
          title: ':mortar_board: I have been invited to serve as a program committee member for...',
          description: "",
          section: "News",},{id: "news-microphone-i-participated-in-fuzzing-and-software-security-summer-school-national-university-of-singapore-nus-and-presented-a-talk-as-a-part-of-dr-marcel-böhme-s-lecture-on-the-predictability-of-fuzzing-the-slides-are-available-here",
          title: ':microphone: I participated in Fuzzing and Software Security Summer School @ National University...',
          description: "",
          section: "News",},{id: "news-tada-our-paper-accounting-for-missing-events-in-statistical-information-leakage-analysis-has-been-directly-accepted-in-the-first-round-at-icse-2025-this-year-icse-1st-round-has-marked-roughly-9-of-papers-as-accept-and-13-as-major-revisions",
          title: ':tada: Our paper “Accounting for Missing Events in Statistical Information Leakage Analysis,” has...',
          description: "",
          section: "News",},{id: "news-trophy-i-have-been-honored-with-the-distinguished-artifact-reviewer-award-at-usenix-security-2024",
          title: ':trophy: I have been honored with the Distinguished Artifact Reviewer Award at USENIX...',
          description: "",
          section: "News",},{id: "news-tada-my-final-work-during-my-ph-d-at-kaist-causal-program-dependence-analysis-has-been-accepted-to-science-of-computer-programming-scp-journal",
          title: ':tada: My final work during my Ph.D. at KAIST, “Causal Program Dependence Analysis,”...',
          description: "",
          section: "News",},{id: "news-mortar-board-i-have-been-invited-to-serve-as-a-program-committee-member-for-the-international-conference-on-software-engineering-2026-icse-26-and-the-1st-international-workshop-on-large-language-model-oriented-empirical-research-2025-llanmer-25",
          title: ':mortar_board: I have been invited to serve as a program committee member for...',
          description: "",
          section: "News",},{id: "news-trophy-tada-our-paper-how-much-is-unseen-depends-chiefly-on-information-about-the-seen-has-been-accepted-to-the-thirteenth-international-conference-on-learning-representations-iclr-2025-as-a-spotlight-paper-this-is-my-first-paper-at-the-top-tier-ml-conference",
          title: ':trophy: :tada: Our paper “How Much is Unseen Depends Chiefly on Information About...',
          description: "",
          section: "News",},{id: "news-microphone-i-have-been-invited-for-a-tutorial-talk-at-the-18th-intl-workshop-on-search-based-and-fuzz-testing-sbft-2025-see-you-everyone-in-the-beautiful-city-of-ottawa",
          title: ':microphone: I have been invited for a tutorial talk at the 18th Intl....',
          description: "",
          section: "News",},{id: "news-mortar-board-i-joined-software-evolution-and-analysis-laboratory-seal-at-the-university-of-california-los-angeles-ucla-as-a-postdoctoral-researcher-working-with-prof-miryung-kim",
          title: ':mortar_board: I joined Software Evolution and Analysis Laboratory (SEAL) at the University of...',
          description: "",
          section: "News",},{id: "news-mortar-board-i-have-been-invited-to-serve-as-a-program-committee-member-for-fse-2026",
          title: ':mortar_board: I have been invited to serve as a program committee member for...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%65%6F%6E%67%6D%69%6E%6C%65%65@%73%69%67%73%6F%66%74.%6F%72%67", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=YSnc6kAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-0805-8947", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/niMgoneSeeL", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/seongmin-lee-b76049190", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/nim_gnoes_eel", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
