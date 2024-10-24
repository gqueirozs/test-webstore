import { Variants } from "framer-motion";

export const lateralPageTransition = {
  hidden: {
    right: "-100%",
  },
  visible: {
    right: 0,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
      restSpeed: 2,
      overshootClamping: false,
    }
  },
  exit: {
    right: "-100%",
    x: '-8%',
    transition: {
      duration: 1,
      ease: "easeInOut",
      right: {
        delay: .1,
        duration: .3
      },
      x: {
        delay: 0,
        duration: .1
      } 
    },
  }
};

export const lateralNotifyTransition = {
  hidden: {
    right: "-100%",
  },
  visible: {
    transform: 'translateX(-50px)',
    right: 0,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
      restSpeed: 2,
      overshootClamping: false,
    },
  },
};

export const centralPageTransition = {
  hidden: {
    opacity: 0,
    transform: 'translate(-50%, 100%)'
  },
  visible: {
    opacity: 1,
    transform: 'translate(-50%, 0)'
  },
  exit: {
    opacity: 0
  }
}

export const menuTransition = {
  hidden: {
    left: "-100%"
  },
  visible: {
    left: "80px",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      restSpeed: 2,
      overshootClamping: false,
    },
    onanimationend: {
      zIndex: 4
    }
  },
  exit: {
    left: "-100%",
    x: '8%',
    transition: {
      duration: 1,
      ease: "easeInOut",
      left: {
        delay: .1,
        duration: .3
      },
      x: {
        delay: 0,
        duration: .1
      }
    },
  }
};

export const mobileMenuTransition = {
  hidden: {
    top: "100%"
  },
  visible: {
    top: '0',
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      restSpeed: 2,
      overshootClamping: false,
    }
  },
  exit: {
    top: "100%",
    y: '-8%',
    transition: {
      duration: 1,
      ease: "easeInOut",
      top: {
        delay: .1,
        duration: .3
      },
      y: {
        delay: 0,
        duration: .1
      }
    },
  }
};

export const menuIconAnimation = (MenuIndex: number): Variants => {
  return {
    initial: {
      opacity: 0,
      transform: `translateY(calc(${MenuIndex * 100 - 100}% + ${
        MenuIndex * 0
      }px))`,
    },
    animate: {
      opacity: 1,
      transform: `translateY(calc(${MenuIndex * 100}% + ${
        MenuIndex * 0
      }px))`,
    },
    exit: {
      opacity: 0,
      transform: `translateY(calc(${MenuIndex * 100}% + ${
        MenuIndex * 0
      }px))`,
    }
  }
  
};

export const mobileMenuIconAnimation = (MenuIndex: number): Variants => {
  return {
    initial: {
      opacity: 0,
      transform: `translateX(calc(${MenuIndex * 100 - 100}% + ${
        MenuIndex * 0
      }px))`,
    },
    animate: {
      opacity: 1,
      transform: `translateX(calc(${MenuIndex * 100}% + ${
        MenuIndex * 0
      }px))`,
    },
    exit: {
      opacity: 0,
      transform: `translateX(calc(${MenuIndex * 100}% + ${
        MenuIndex * 0
      }px))`,
    }
  };
};