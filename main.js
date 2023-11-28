"use strict";
(self["webpackChunkCSCDePauwWebsite"] = self["webpackChunkCSCDePauwWebsite"] || []).push([["main"],{

/***/ 3184:
/*!*********************************************!*\
  !*** ./src/app/Services/courses.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesService": () => (/* binding */ CoursesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;

class CoursesService {
  constructor() {
    this.courses = [{
      id: 101,
      name: 'Computer Science I',
      author: 'John Heikela',
      credit: 1,
      code: 'CSC 121',
      image: './assets/courses/121.jpeg',
      description: 'This is an introductory course in which problem solving and algorithm development are studied by considering computer science topics, such as computer graphics, graphical user interfaces, modeling and simulation, artificial intelligence and information management systems.\
      Interesting and relevant programming assignments related to these topics are written in a high-level programming language that supports objects. Additional assignments utilize writing and data analysis to reinforce central course concepts and to address related areas of computing, such as ethics, history and the meaning of intelligence. \
      The course meets three hours in class and two hours in laboratory (3-2). Offered each semester.'
    }, {
      id: 102,
      name: 'Data Structure',
      author: 'Mark Vought',
      credit: 1,
      code: 'CSC 122',
      image: './assets/courses/122.jpg',
      description: 'This course builds on CSC 121 and includes programming topics such as sorting and searching, sets, recursion and dynamic data types. \
      Additional concepts involve data type abstraction and implementation developed through studying structures such as lists, stacks, queues, hash tables and binary search trees. \
      The course emphasizes object oriented implementation of these structures. Students learn tools for algorithm analysis and explore the use of standard libraries. \
      The concept of tradeoffs (i.e., time vs. space, iteration vs. recursion, static vs. dynamic) recurs as a theme throughout the course.'
    }, {
      id: 107,
      name: 'Web Programming And Cybersecurity',
      author: 'Merry Smith',
      credit: 1,
      code: 'CSC 340',
      image: './assets/courses/340.jpeg',
      description: 'This course covers some fundamental networking concepts, web application development and web application security. Topics covered include: introduction to the Internet, World Wide Web and internet protocols, markup languages, client side scripting, server side scripting, database concepts, encryption/decryption, web application vulnerabilities and how to build secure web applications.'
    }, {
      id: 108,
      name: 'Graphics',
      author: 'Steve Smith',
      credit: 1,
      code: 'CSC 350',
      image: './assets/courses/350.jpg',
      description: 'his course is an introduction to the concepts, techniques, algorithms and implementation of computer graphics. Topics include moving and drawing lines in absolute and relative coordinates, transformations, windowing, clipping, projections, perspective, polygon filling, hidden surface techniques and a variety of applications, including graphical user interfaces and menuing systems. '
    }, {
      id: 103,
      name: 'Computer Systems',
      author: 'Steve Smith',
      credit: 1,
      code: 'CSC 231',
      image: './assets/courses/231.jpeg',
      description: 'This is an introduction to the study of computer hardware and its relationship to software. \
      Topics include information representation, architecture of the central processing unit, memory organization and hierarchy, \
      assembly language and machine level representation of programs, interactions and relationships among system components (hardware, operating systems, compilers, network environments), and the impact of architectural decisions on performance.'
    }, {
      id: 104,
      name: 'Object Oriented Software Development',
      author: 'Steve Smith',
      credit: 1,
      code: 'CSC 232',
      image: './assets/courses/232.jpeg',
      description: 'A study of fundamental techniques and tools for managing software development projects, together with relevant professional and ethical issues. Topics include methodologies such as UML diagrams for software specification and design, documentation standards, and tools for testing, code management, analysis, and debugging. \
      Object oriented programming techniques such as inheritance and polymorphism are emphasized. Students will develop skills in individual and team software development through extensive practice designing and implementing object oriented software systems. \
      In addition, students gain experience reading, documenting, presenting and critiquing such systems.'
    }, {
      id: 105,
      name: 'Foundation Of Computation',
      author: 'John Heikela',
      credit: 1,
      code: 'CSC 233',
      image: './assets/courses/233.jpg',
      description: 'This course explores the theoretical foundations of computation at various levels of abstraction. Specific topics include graph theory and related algorithms; \
      functional programming with an emphasis on recursion and recurrences; \
      the description of languages using formalisms such as regular expressions, finite state machines, and context free grammars; and digital logic and its application to sequential and combinational circuits. '
    }, {
      id: 106,
      name: 'Writing In Computer Science',
      author: 'Mark Vought',
      credit: 0.5,
      code: 'CSC 240',
      image: './assets/courses/240.jpeg',
      description: 'In this course students learn to communicate technical and non-technical information about computer science to technical and non-technical audiences. \
      This writing includes communication with users (e.g., user manuals), the general public (e.g., op-ed pieces related to technical issues), and other non-technical audiences (e.g., legislators, potential investors, customers). \
      Students also develop a project proposal document. Some of the writing in this course deals with ethical and social issues. '
    }
    // { id:109, name:'Data Mining', author: 'Steve Smith', credit: 1.0, code: 'CSC 370',  image:'./assets/courses/370.jpeg',
    //   description: 'Data mining is the effort to reach useful conclusions from data by building interpretive and predictive computational models. This course prepares students to do this through hands-on exploration of data preparation, and model development, tuning, and validation. This is done in the context of various algorithms such as gradient-descent, ensemble methods, and linear regression. Coursework includes multiple significant programming projects and a large final project.'
    // }
    ];
  }

  getAllCourses() {
    const courseList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.courses);
      }, 5000);
    });
    return courseList;
  }
}
_class = CoursesService;
_class.ɵfac = function CoursesService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses/courses.component */ 7425);
/* harmony import */ var _courses_csc121_csc121_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses/csc121/csc121.component */ 9779);
/* harmony import */ var _courses_csc122_csc122_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses/csc122/csc122.component */ 8636);
/* harmony import */ var _courses_csc231_csc231_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./courses/csc231/csc231.component */ 8764);
/* harmony import */ var _courses_csc232_csc232_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./courses/csc232/csc232.component */ 7065);
/* harmony import */ var _courses_csc233_csc233_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./courses/csc233/csc233.component */ 1024);
/* harmony import */ var _courses_csc240_csc240_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./courses/csc240/csc240.component */ 1229);
/* harmony import */ var _courses_csc340_csc340_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./courses/csc340/csc340.component */ 4627);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error/error.component */ 9983);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _career_career_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./career/career.component */ 9699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;















const appRoute = [{
  path: '',
  redirectTo: 'Home',
  pathMatch: 'full'
}, {
  path: 'Home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__.HomeComponent
}, {
  path: 'Contact',
  component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent
}, {
  path: 'Courses',
  component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_1__.CoursesComponent
}, {
  path: 'Career',
  component: _career_career_component__WEBPACK_IMPORTED_MODULE_11__.CareerComponent
}, {
  path: 'Courses',
  children: [{
    path: 'Course/101',
    component: _courses_csc121_csc121_component__WEBPACK_IMPORTED_MODULE_2__.Csc121Component
  }, {
    path: 'Course/102',
    component: _courses_csc122_csc122_component__WEBPACK_IMPORTED_MODULE_3__.Csc122Component
  }, {
    path: 'Course/103',
    component: _courses_csc231_csc231_component__WEBPACK_IMPORTED_MODULE_4__.Csc231Component
  }, {
    path: 'Course/104',
    component: _courses_csc232_csc232_component__WEBPACK_IMPORTED_MODULE_5__.Csc232Component
  }, {
    path: 'Course/105',
    component: _courses_csc233_csc233_component__WEBPACK_IMPORTED_MODULE_6__.Csc233Component
  }, {
    path: 'Course/106',
    component: _courses_csc240_csc240_component__WEBPACK_IMPORTED_MODULE_7__.Csc240Component
  }, {
    path: 'Course/107',
    component: _courses_csc340_csc340_component__WEBPACK_IMPORTED_MODULE_8__.Csc340Component
  }]
}, {
  path: '**',
  component: _error_error_component__WEBPACK_IMPORTED_MODULE_9__.ErrorComponent
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(appRoute, {
    enableTracing: true
  }), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
var _class;


const _c0 = function () {
  return ["Contact"];
};
// import { Object } from 'core-js';
class AppComponent {
  constructor() {
    this.title = 'CSCStudyITAP';
  }
  login() {}
  logout() {}
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 31,
  vars: 6,
  consts: [["rel", "preconnect", "href", "https://fonts.googleapis.com"], ["rel", "preconnect", "href", "https://fonts.gstatic.com", "crossorigin", ""], ["href", "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap", "rel", "stylesheet"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"], ["href", "https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins:ital,wght@0,500;1,200&family=Press+Start+2P&display=swap", "rel", "stylesheet"], [1, "main-container"], [1, "nav-container"], [3, "routerLinkActive"], ["routerLink", "Home"], [3, "routerLink"], ["routerLink", "Courses"], ["routerLink", "Career"], [2, "float", "right"], [3, "click"], [1, "image-container"], ["src", "assets/images/logo.png", "alt", "", "width", "45px", "height", "45px"], [1, "component-container"], ["id", "Course"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0)(1, "link", 1)(2, "link", 2)(3, "link", 3)(4, "link", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "ul")(8, "li", 7)(9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7)(12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7)(15, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7)(18, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Career Resources");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12)(21, "li", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_21_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_24_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "router-outlet", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
  styles: [".main-container[_ngcontent-%COMP%]{\n    width: 100%;\n    background-color:  #000000;\n    margin: 0;\n    padding: 0;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n  }\n  \n  li[_ngcontent-%COMP%] {\n    float: left;\n  }\n  \n  li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n  }\n  \n  \n  li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #111;\n  }\n  \n  .image-container[_ngcontent-%COMP%]{\n    margin-left: auto;\n    margin-right: auto;\n    left:30%;\n    position: relative;\n  }\n  \n  .col1[_ngcontent-%COMP%]{\n    display: inline;\n    width: 50%;\n  }\n  .intro-text[_ngcontent-%COMP%]{\n      \n      margin-left: 2cm;\n      text-align: left;\n      display: flex;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCxVQUFVO0lBQ1YscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0VBRUEsbURBQW1EO0VBQ25EO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1Isa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7RUFDWjtFQUNBO01BQ0ksZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsYUFBYTtFQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzAwMDAwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIGxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIFxuICAvKiBDaGFuZ2UgdGhlIGxpbmsgY29sb3IgdG8gIzExMSAoYmxhY2spIG9uIGhvdmVyICovXG4gIGxpIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gIH1cbiAgXG4gIC5pbWFnZS1jb250YWluZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6MzAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLmNvbDF7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmludHJvLXRleHR7XG4gICAgICAvKiBsZWZ0OiAyMGNtOyAqL1xuICAgICAgbWFyZ2luLWxlZnQ6IDJjbTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./courses/courses.component */ 7425);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ 9983);
/* harmony import */ var _Services_courses_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Services/courses.service */ 3184);
/* harmony import */ var _courses_csc121_csc121_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./courses/csc121/csc121.component */ 9779);
/* harmony import */ var _courses_csc122_csc122_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./courses/csc122/csc122.component */ 8636);
/* harmony import */ var _courses_csc231_csc231_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./courses/csc231/csc231.component */ 8764);
/* harmony import */ var _courses_csc232_csc232_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./courses/csc232/csc232.component */ 7065);
/* harmony import */ var _courses_csc233_csc233_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./courses/csc233/csc233.component */ 1024);
/* harmony import */ var _courses_csc240_csc240_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./courses/csc240/csc240.component */ 1229);
/* harmony import */ var _courses_csc340_csc340_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./courses/csc340/csc340.component */ 4627);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _courses_csc122_linked_list_linked_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./courses/csc122/linked-list/linked-list.component */ 2747);
/* harmony import */ var _courses_csc121_bubble_sort_bubble_sort_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./courses/csc121/bubble-sort/bubble-sort.component */ 8123);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _courses_csc121_insertion_sort_insertion_sort_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./courses/csc121/insertion-sort/insertion-sort.component */ 3453);
/* harmony import */ var _courses_csc121_selection_sort_selection_sort_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./courses/csc121/selection-sort/selection-sort.component */ 3505);
/* harmony import */ var _courses_csc122_hashmap_hashmap_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./courses/csc122/hashmap/hashmap.component */ 4375);
/* harmony import */ var _courses_csc340_rsa_rsa_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./courses/csc340/rsa/rsa.component */ 6067);
/* harmony import */ var _courses_csc340_ecc_ecc_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./courses/csc340/ecc/ecc.component */ 2948);
/* harmony import */ var _courses_csc340_caesar_cipher_caesar_cipher_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./courses/csc340/caesar-cipher/caesar-cipher.component */ 5738);
/* harmony import */ var _courses_csc121_forloop_forloop_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./courses/csc121/forloop/forloop.component */ 7890);
/* harmony import */ var _courses_csc121_duplicate_duplicate_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./courses/csc121/duplicate/duplicate.component */ 7431);
/* harmony import */ var _courses_csc121_missing_missing_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./courses/csc121/missing/missing.component */ 347);
/* harmony import */ var _career_career_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./career/career.component */ 9699);
/* harmony import */ var _courses_csc340_WindowRefService__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./courses/csc340/WindowRefService */ 6975);
/* harmony import */ var _courses_csc340_illustrated_illustrated_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./courses/csc340/illustrated/illustrated.component */ 1161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;






















// import { CaesarCipherComponent } from './courses/csc340/caesar-cipher/caesar-cipher.component';
// import { ContentComponent } from './courses/csc340/content/content.component';











class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({
  providers: [_Services_courses_service__WEBPACK_IMPORTED_MODULE_7__.CoursesService, _courses_csc340_WindowRefService__WEBPACK_IMPORTED_MODULE_27__.WindowRefService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent, _courses_courses_component__WEBPACK_IMPORTED_MODULE_5__.CoursesComponent, _error_error_component__WEBPACK_IMPORTED_MODULE_6__.ErrorComponent, _courses_csc121_csc121_component__WEBPACK_IMPORTED_MODULE_8__.Csc121Component, _courses_csc122_csc122_component__WEBPACK_IMPORTED_MODULE_9__.Csc122Component, _courses_csc231_csc231_component__WEBPACK_IMPORTED_MODULE_10__.Csc231Component, _courses_csc232_csc232_component__WEBPACK_IMPORTED_MODULE_11__.Csc232Component, _courses_csc233_csc233_component__WEBPACK_IMPORTED_MODULE_12__.Csc233Component, _courses_csc240_csc240_component__WEBPACK_IMPORTED_MODULE_13__.Csc240Component, _courses_csc340_csc340_component__WEBPACK_IMPORTED_MODULE_14__.Csc340Component, _courses_csc122_linked_list_linked_list_component__WEBPACK_IMPORTED_MODULE_15__.LinkedListComponent, _courses_csc121_bubble_sort_bubble_sort_component__WEBPACK_IMPORTED_MODULE_16__.BubbleSortComponent, _courses_csc121_insertion_sort_insertion_sort_component__WEBPACK_IMPORTED_MODULE_17__.InsertionSortComponent, _courses_csc121_selection_sort_selection_sort_component__WEBPACK_IMPORTED_MODULE_18__.SelectionSortComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent,
    // CaesarCipherComponent,
    // ContentComponent,
    _courses_csc122_hashmap_hashmap_component__WEBPACK_IMPORTED_MODULE_19__.HashmapComponent, _courses_csc340_rsa_rsa_component__WEBPACK_IMPORTED_MODULE_20__.RsaComponent, _courses_csc340_rsa_rsa_component__WEBPACK_IMPORTED_MODULE_20__.RsaComponent, _courses_csc340_ecc_ecc_component__WEBPACK_IMPORTED_MODULE_21__.EccComponent, _courses_csc340_caesar_cipher_caesar_cipher_component__WEBPACK_IMPORTED_MODULE_22__.CaesarCipherComponent, _courses_csc121_forloop_forloop_component__WEBPACK_IMPORTED_MODULE_23__.ForloopComponent, _courses_csc121_duplicate_duplicate_component__WEBPACK_IMPORTED_MODULE_24__.DuplicateComponent, _courses_csc121_missing_missing_component__WEBPACK_IMPORTED_MODULE_25__.MissingComponent, _career_career_component__WEBPACK_IMPORTED_MODULE_26__.CareerComponent, _courses_csc340_illustrated_illustrated_component__WEBPACK_IMPORTED_MODULE_28__.IllustratedComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 9699:
/*!********************************************!*\
  !*** ./src/app/career/career.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CareerComponent": () => (/* binding */ CareerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
var _class;


function CareerComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const careerPage_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", careerPage_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", careerPage_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", careerPage_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", careerPage_r1.title, " ");
  }
}
class CareerComponent {
  constructor() {
    this.careerPages = [{
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/LinkedIn_Logo_2011.svg/2048px-LinkedIn_Logo_2011.svg.png'
    }, {
      title: 'Handshake',
      link: 'https://handshake.co/',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Handshake_logo.svg/2048px-Handshake_logo.svg.png'
    }, {
      title: 'Glassdoor',
      link: 'https://www.glassdoor.com/',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Glassdoor_logo.svg/2048px-Glassdoor_logo.svg.png'
    }];
  }
}
_class = CareerComponent;
_class.ɵfac = function CareerComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-career"]],
  decls: 5,
  vars: 1,
  consts: [[1, "career-websites"], [4, "ngFor", "ngForOf"], [3, "href"], [3, "src", "alt"]],
  template: function CareerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Career Websites");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CareerComponent_li_4_Template, 4, 4, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.careerPages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: [".career-websites[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  .career-website[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    margin: 10px;\n    border: 1px solid black;\n    padding: 10px;\n    text-align: center;\n  }\n  \n  .career-website[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  \n  .career-website[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: black;\n    text-decoration: none;\n  }\n  \n  .career-website[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FyZWVyL2NhcmVlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJlZXItd2Vic2l0ZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuY2FyZWVyLXdlYnNpdGUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmNhcmVlci13ZWJzaXRlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG4gIFxuICAuY2FyZWVyLXdlYnNpdGUgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgLmNhcmVlci13ZWJzaXRlIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1563:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;

class ContactComponent {}
_class = ContactComponent;
_class.ɵfac = function ContactComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-contact"]],
  decls: 63,
  vars: 0,
  consts: [[1, "container"], [1, "row"], ["id", "Khadija", 1, "column"], [1, "profile-link"], ["src", "./assets/images/kha2.jpg", 1, "profile-pic"], [1, "description"], [1, "personal-information"], [1, "info"], ["rel", "stylesheet", "href", "http://academic.depauw.edu/~khadijastewart/main.htm"], [1, "column"], ["src", "./assets/images/thie.jpg", 1, "profile-pic"], ["id", "Alan", 1, "column"], ["src", "./assets/images/tuan.jpg", 1, "profile-pic"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Prof. Khadija Steward");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " HERRICK E.H. GREENLEAF PROFESSOR OF COMPUTER SCIENCE AND PROFESSOR OF COMPUTER SCIENCE ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Ph.D in Electrical and Computer Engineering from Southern Illinois University, Carbondale IL. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " M.S in Electrical Engineering from Southern Illinois University, Carbondale IL. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " B.S in Computer Engineering form Clemson University, Clemson SC. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7)(18, "ul")(19, "li")(20, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "khadijastewart@depauw.edu ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Profile: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "link", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Personal Website");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9)(28, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Minh Thy Nguyen");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5)(33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Investment Analyst Intern @ CornerStone Partners ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Former Finance & Strategy Intern @ Salesforce ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Economics & Computer Science @ DePauw University ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7)(40, "ul")(41, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Email: minhthynguyen_2024@depauw.edu");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Profile: Minh Thy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11)(46, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Tuan (Alan) Le");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5)(51, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Data Science Intern @ Zotec Partners ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Former Software Engineer Intern @ FPT Software ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Research Assistant @ DePauw University");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7)(58, "ul")(59, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Email: tuanle_2024@depauw.edu");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Profile: Tuan Le");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
  },
  styles: [".container[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.dark-mode[_ngcontent-%COMP%] {\n    background-color: black;\n    color: #FF8C00;\n}\nbody[_ngcontent-%COMP%] {\n    background-color: #FEF4B9;\n}\n.container[_ngcontent-%COMP%]{\n    margin: auto;\n    width: 100%;\n    padding: 10px;\n    display: flex;\n}\n\n.column[_ngcontent-%COMP%] {\n    float: left;\n    width: 33%;\n    \n}\n  \n  \n.row[_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: flex;\n    clear: both;\n}\n\n.info[_ngcontent-%COMP%]{\n    text-align: left;\n}\n\n\n.profile-link[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n.profile-pic[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 400px; \n    filter: grayscale(100%);\n\n    border:2px solid #fff;\n    box-shadow: 10px 10px 5px #ccc;\n    -moz-box-shadow: 10px 10px 5px #ccc;\n    -webkit-box-shadow: 10px 10px 5px #ccc;\n    -khtml-box-shadow: 10px 10px 5px #ccc;\n    filter: grayscale(100%);\n\n    transition: filter 0.3s, box-shadow 0.3s;\n    -webkit-transition: filter 0.3s, -webkit-filter 0.3s, box-shadow 0.3s;\n}\n.profile-link[_ngcontent-%COMP%]:hover   .profile-pic[_ngcontent-%COMP%], .profile-link[_ngcontent-%COMP%]:focus   .profile-pic[_ngcontent-%COMP%] {\n    filter: none;\n    box-shadow: #224 0.2em 0.2em 0.6em 0.1em;\n}\n\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{\n    height: auto;\n    margin: 0 auto;\n    padding: 10px;\n    position: relative;\n    width: 90%;\n    margin-top: 20px;\n    border:2px solid #fff;\n    border-radius: 2em;\n}\n\n\n.personal-information[_ngcontent-%COMP%]{\n    text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTs7QUFFZDs7RUFFRSxtQ0FBbUM7QUFDckM7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBRWIsdUJBQXVCOztJQUV2QixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMscUNBQXFDO0lBR3JDLHVCQUF1Qjs7SUFFdkIsd0NBQXdDO0lBQ3hDLHFFQUFxRTtBQUN6RTtBQUNBOztJQUdJLFlBQVk7SUFDWix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLG1CQUFtQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRhcmstbW9kZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6ICNGRjhDMDA7XG59XG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVGNEI5O1xufVxuLmNvbnRhaW5lcntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29sdW1uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMzMlO1xuICAgIFxufVxuICBcbiAgLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5pbmZve1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cblxuLnByb2ZpbGUtbGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnByb2ZpbGUtcGljIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyBcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcblxuICAgIGJvcmRlcjoycHggc29saWQgI2ZmZjtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4ICNjY2M7XG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4ICNjY2M7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4ICNjY2M7XG4gICAgLWtodG1sLWJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggI2NjYztcblxuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG5cbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4zcywgYm94LXNoYWRvdyAwLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MsIC13ZWJraXQtZmlsdGVyIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcbn1cbi5wcm9maWxlLWxpbms6aG92ZXIgLnByb2ZpbGUtcGljLCBcbi5wcm9maWxlLWxpbms6Zm9jdXMgLnByb2ZpbGUtcGljIHtcbiAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICBmaWx0ZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogIzIyNCAwLjJlbSAwLjJlbSAwLjZlbSAwLjFlbTtcbn1cblxuLmNvbnRhaW5lciAucm93IC5jb2x1bW4gLmRlc2NyaXB0aW9ue1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYm9yZGVyOjJweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcbn1cblxuXG4ucGVyc29uYWwtaW5mb3JtYXRpb257XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7425:
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesComponent": () => (/* binding */ CoursesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Services_courses_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/courses.service */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
var _class;




function CoursesComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8)(14, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Show Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const course_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", course_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](course_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Code: ", course_r1.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](course_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/Courses/Course/", course_r1.id, "");
  }
}
class CoursesComponent {
  constructor(coursesService, route) {
    this.coursesService = coursesService;
    this.route = route;
    this.courses = [];
  }
  ngOnInit() {
    this.courses = this.coursesService.courses;
    this.coursesService.getAllCourses().then(data => {
      this.courses = data;
    });
    // this.courses = this.route.snapshot.data['courses'];
  }
}
_class = CoursesComponent;
_class.ɵfac = function CoursesComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_courses_service__WEBPACK_IMPORTED_MODULE_0__.CoursesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-courses"]],
  decls: 5,
  vars: 1,
  consts: [[1, "container"], [4, "ngFor", "ngForOf"], [1, "course-container"], [1, "course-card"], ["clas", "img-container"], ["width", "355px", "height", "200px", 3, "src"], [1, "course-name"], [1, "course-description"], [1, "course-buttons"], [1, "btn", "btn-show", 3, "routerLink"]],
  template: function CoursesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "All Courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CoursesComponent_ng_container_3_Template, 16, 5, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.courses);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: [".container[_ngcontent-%COMP%]{\n    margin: 10px 0px;\n    padding: 10px 10px;\n    border-radius: 5px;\n\n}\n\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    position: relative;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    margin: auto;\n}\n.course-container[_ngcontent-%COMP%]{\n    display: flex;\n}\n\n.course-card[_ngcontent-%COMP%]{\n    width:100%;\n    height: 95%;\n    background-color: #333;\n    display: inline-flex;\n    margin-bottom: 20px;\n    text-align: center;\n}\n.course-name[_ngcontent-%COMP%]{\n    text-align: left;\n    width: 10%;\n    \n    margin: auto;\n    \n}\n.course-description[_ngcontent-%COMP%]{\n    \n    font-size: 14px;\n    width: 50%;\n    text-align: justify;\n    padding-right: 5px;\n}\n\n.details[_ngcontent-%COMP%]{\n    display: flex;\n    margin: 10px 0px;\n}\n.course-credit[_ngcontent-%COMP%]{\n    font-weight: bold;\n    display: flex;\n    width: 35%;\n}\n.course-code[_ngcontent-%COMP%]{\n    font-weight: bold;\n    display: relative;\n    width: 35%;\n    right: 30%;\n    margin: auto;\n}\n.course-buttons[_ngcontent-%COMP%]{\n    display: flex;\n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n    background-color: #4CAF50; \n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n    border-radius: 10px;\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\n  }\n  \n  .btn[_ngcontent-%COMP%]:hover {\n    background-color: #3e8e41;\n  }\n  \n  .btn[_ngcontent-%COMP%]:active {\n    background-color: #4CAF50;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jb3Vyc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixPQUFPO0lBQ1AsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0k7d0JBQ29CO0lBQ3BCLGVBQWU7SUFDZixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBOzs7Ozs7Ozs7OztHQVdHOzs7QUFHSDtJQUNJLHlCQUF5QixFQUFFLFVBQVU7SUFDckMsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVFQUF1RTtFQUN6RTs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsMEJBQTBCO0VBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVye1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxufVxuXG4uaW1nLWNvbnRhaW5lciBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNvdXJzZS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvdXJzZS1jYXJke1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiA5NSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb3Vyc2UtbmFtZXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxMCU7XG4gICAgLyogcGFkZGluZy1sZWZ0OiA1JTsgKi9cbiAgICBtYXJnaW46IGF1dG87XG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgd2hpdGU7ICovXG59XG4uY291cnNlLWRlc2NyaXB0aW9ue1xuICAgIC8qIG1hcmdpbjogMTBweCAwcHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7ICovXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5kZXRhaWxze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbi5jb3Vyc2UtY3JlZGl0e1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDM1JTtcbn1cbi5jb3Vyc2UtY29kZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMzUlO1xuICAgIHJpZ2h0OiAzMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNvdXJzZS1idXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4vKiAuYnRue1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogNXB4IDNweDtcbn1cbi5idG4tYnV5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQzcwNjM7XG59XG4uYnRuLXNob3d7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FCRUJDNjtcbn0gKi9cblxuXG4uYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyAvKiBHcmVlbiAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDRweCAycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XG4gIH1cbiAgXG4gIC5idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XG4gIH1cbiAgXG4gIC5idG46YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIH1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8123:
/*!*********************************************************************!*\
  !*** ./src/app/courses/csc121/bubble-sort/bubble-sort.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BubbleSortComponent": () => (/* binding */ BubbleSortComponent)
/* harmony export */ });
/* harmony import */ var _Users_tuanle_Documents_Python_CSCDePauwWebsite_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);

var _class;




const _c0 = function (a0) {
  return {
    "margin-left.px": a0
  };
};
function BubbleSortComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", item_r2.value * 2, "px")("background-color", item_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@swap", item_r2.state)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, item_r2.x));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.value, " ");
  }
}
function BubbleSortComponent_div_14_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "You Make A Mistake!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BubbleSortComponent_div_14_div_23_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "You Are Correct!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BubbleSortComponent_div_14_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BubbleSortComponent_div_14_div_23_div_2_Template, 5, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BubbleSortComponent_div_14_div_23_div_4_Template, 5, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.checkres);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.checkres);
  }
}
function BubbleSortComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\nFilling in the missing places to complete the Bubble Sort Algorithm\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BubbleSortComponent_div_14_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.input1 = $event);
    })("ngModelChange", function BubbleSortComponent_div_14_Template_input_ngModelChange_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.checkInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BubbleSortComponent_div_14_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.input2 = $event);
    })("ngModelChange", function BubbleSortComponent_div_14_Template_input_ngModelChange_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.checkInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "];\n            array[");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BubbleSortComponent_div_14_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.input2 = $event);
    })("ngModelChange", function BubbleSortComponent_div_14_Template_input_ngModelChange_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.checkInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "] = array[");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BubbleSortComponent_div_14_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.input3 = $event);
    })("ngModelChange", function BubbleSortComponent_div_14_Template_input_ngModelChange_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.checkInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "];\n            array[");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BubbleSortComponent_div_14_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.input3 = $event);
    })("ngModelChange", function BubbleSortComponent_div_14_Template_input_ngModelChange_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.checkInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, BubbleSortComponent_div_14_div_23_Template, 6, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\nfor (int i = 0; i < array.length; i++) ", "{", "\n    for (int j = ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.input1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("; j < array.length; j++) ", "{", "\n        if (array[i] >=  array[j]) ", "{", "\n            int temp = array[");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.input2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.input2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.input3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.input3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("] = temp;\n        ", "}", "\n    ", "}", "\n", "}", "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.input1 && ctx_r1.input2 && ctx_r1.input3);
  }
}
class BubbleSortComponent {
  constructor() {
    this.items = [];
    this.width = 0.5;
    this.input1 = "";
    this.input2 = "";
    this.input3 = "";
    this.checkres = false;
    this.clickpractice = false;
    this.stopSor = false;
  }
  ngOnInit() {
    this.generateArray();
    console.log(this.items);
  }
  generateArray() {
    this.items = [];
    for (let i = 0; i < 15; i++) {
      this.items.push({
        value: Math.floor(Math.random() * 100) + 1,
        color: 'lightblue',
        state: 'inactive',
        x: i * this.width
      });
    }
  }
  bubbleSort() {
    var _this = this;
    return (0,_Users_tuanle_Documents_Python_CSCDePauwWebsite_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.stopSor = false;
      for (let i = 0; i < _this.items.length; i++) {
        for (let j = i + 1; j < _this.items.length; j++) {
          if (_this.stopSor == false) {
            yield new Promise(resolve => setTimeout(resolve, 500));
            _this.items[j].state = 'active';
            _this.items[i].state = 'active';
            yield new Promise(resolve => setTimeout(resolve, 500));
            if (_this.items[i].value > _this.items[j].value) {
              const temp = _this.items[j];
              _this.items[j] = _this.items[i];
              _this.items[i] = temp;
            }
            setTimeout(() => {
              _this.items[j].state = 'inactive';
              _this.items[i].state = 'inactive';
            }, 200);
          } else {
            return;
          }
        }
      }
    })();
  }
  stopSort() {
    this.stopSor = true;
  }
  checkInput() {
    if (this.input1 == "i+1" || this.input1 == " i + 1 " || this.input1 == "i + 1" || this.input1 == "i+ 1") {
      if (this.input2 == "i" && this.input3 == "j") {
        this.checkres = true;
      } else if (this.input2 == "j" && this.input3 == "i") {
        this.checkres = true;
      }
    } else {
      this.checkres = false;
    }
  }
  practiceCode() {
    this.clickpractice = !this.clickpractice;
  }
}
_class = BubbleSortComponent;
_class.ɵfac = function BubbleSortComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-bubble-sort"]],
  decls: 15,
  vars: 2,
  consts: [[1, "main-container"], [1, "bubble-sort-btn"], [1, "chapter-header"], [1, "sort-btn", 3, "click"], [1, "new-array-btn", 3, "click"], [1, "stop-array-btn", 3, "click"], [1, "container"], ["class", "element", 3, "height", "background-color", "ngStyle", 4, "ngFor", "ngForOf"], ["class", "practice-code", 4, "ngIf"], [1, "element", 3, "ngStyle"], [1, "practice-code"], [1, "practice"], [1, "code"], ["type", "text", "id", "startvalue", 3, "ngModel", "ngModelChange"], ["class", "solution", 4, "ngIf"], [1, "solution"], ["class", "checkRes incorrect", 4, "ngIf"], ["class", "checkRes correct", 4, "ngIf"], [1, "checkRes", "incorrect"], [1, "checkRes", "correct"]],
  template: function BubbleSortComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Bubble Sort Algorithm ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BubbleSortComponent_Template_button_click_4_listener() {
        return ctx.bubbleSort();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Bubble Sort");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BubbleSortComponent_Template_button_click_6_listener() {
        return ctx.generateArray();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Generate New Array");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BubbleSortComponent_Template_button_click_8_listener() {
        return ctx.stopSort();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Stop");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BubbleSortComponent_Template_button_click_10_listener() {
        return ctx.practiceCode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Practice Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, BubbleSortComponent_div_13_Template, 2, 9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BubbleSortComponent_div_14_Template, 26, 12, "div", 8);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clickpractice);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
  styles: [".main-container[_ngcontent-%COMP%]{\n    display:flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    background-color: #0066cc;\n  }\n  \n  .chapter-header[_ngcontent-%COMP%]{\n    font-family: \"Open Sans\";\n    color: rgb(255, 255, 255);\n    font-weight: bold;\n    font-size: 60px ;\n    align-items: center;\n    margin: auto;\n  }\n  \n  .container[_ngcontent-%COMP%] {\n    display: inline-flex;\n    flex-direction: row;\n    align-items: flex-end;\n    height: 300px;\n    width: 50%;\n    justify-items: center;\n    \n  }\n  \n  .element[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 50px;\n    margin-right: 2px;\n    font-family: 'Press Start 2P', cursive;\n  }\n  \n  \n  .bubble-sort-btn[_ngcontent-%COMP%]{\n    display: inline-block; \n    justify-content: center; \n    width: 50%;\n    margin-left: auto;\n  }\n  \n  .bubble-sort-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #d0b640;\n    color: white;\n    width: 12rem;\n    height: 2rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px gray;\n    border: none;\n    margin: 10px;\n    font-family: \"Open Sans\";\n  }\n  \n  .bubble-sort-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: orange;\n    color: white;\n    font-weight: bolder;\n    border: none;\n    font-family: \"Open Sans\";\n  }\n  \n  .bubble-sort-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n    color: #0066cc;\n    background-color: white;\n    font-weight: bolder;\n    border-radius: 10px;\n    \n    outline: none;\n    border: 2px solid #0066cc;\n    font-family: \"Open Sans\";\n  }\n\n \n .practice-code[_ngcontent-%COMP%]{\n    display: inline-block;\n    width: 100%;\n    background-color: #0066cc;\n }\n\n input[type=\"text\"][_ngcontent-%COMP%]{\n  width: 50px; \n  height: 20px; \n\n}\n  pre[_ngcontent-%COMP%] {\n    background-color: #0066cc;\n    \n    border-radius: 5px;\n    font-size: 14px;\n    overflow-x: auto;\n  }\n  \n.practice[_ngcontent-%COMP%] {\n  display: flex; \n  align-items:center; \n}\n\n\n.code[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    font-family: \"Open Sans\";\n    color: white;\n}\n#startvalue[_ngcontent-%COMP%] {\n  border: 3px solid rgb(255, 191, 0);\n}\n\n\n.solution[_ngcontent-%COMP%] {\n    padding: 10px; \n    width: -moz-fit-content; \n    width: fit-content;\n    margin: auto;\n    height: -moz-fit-content;\n    height: fit-content;\n}\n\n\n.checkRes.correct[_ngcontent-%COMP%] {\n    border: 2px solid green; \n    background-color: green;\n    color: white;\n    text-align: center;\n    font-weight: bold;\n    font-size: 25px;\n    font-family: \"Open Sans\";\n    padding: 10px; \n}\n\n\n.checkRes.incorrect[_ngcontent-%COMP%] {\n    border: 2px solid red; \n    background-color: red;\n    color: white;\n    font-weight: bold;\n    text-align: center;\n    font-size: 25px;\n    font-family: \"Open Sans\";\n    padding: 10px; \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jc2MxMjEvYnViYmxlLXNvcnQvYnViYmxlLXNvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixVQUFVO0lBQ1YscUJBQXFCOztFQUV2Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHNDQUFzQztFQUN4Qzs7O0VBR0E7SUFDRSxxQkFBcUIsRUFBRSx1QkFBdUI7SUFDOUMsdUJBQXVCLEVBQUUsb0NBQW9DO0lBQzdELFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsd0JBQXdCO0VBQzFCOztDQUVELGtCQUFrQjtDQUNsQjtJQUNHLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gseUJBQXlCO0NBQzVCOztDQUVBO0VBQ0MsV0FBVyxFQUFFLCtCQUErQjtFQUM1QyxZQUFZLEVBQUUsZ0NBQWdDOztBQUVoRDtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7QUFFRjtFQUNFLGFBQWEsRUFBRSw0Q0FBNEM7RUFDM0Qsa0JBQWtCLEVBQUUsMkJBQTJCO0FBQ2pEOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7QUFDQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQSwrQkFBK0I7QUFDL0I7SUFDSSxhQUFhO0lBQ2IsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0JBQW1CO0lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQSw4QkFBOEI7QUFDOUI7SUFDSSx1QkFBdUIsRUFBRSx1QkFBdUI7SUFDaEQsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsYUFBYSxFQUFFLDRCQUE0QjtBQUMvQzs7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDSSxxQkFBcUIsRUFBRSxxQkFBcUI7SUFDNUMscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsYUFBYSxFQUFFLDRCQUE0QjtBQUMvQyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2Y2M7XG4gIH1cbiAgXG4gIC5jaGFwdGVyLWhlYWRlcntcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNjBweCA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gIH1cbiAgXG4gIC5lbGVtZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XG4gIH1cbiAgXG4gIFxuICAuYnViYmxlLXNvcnQtYnRue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogVXNlIGZsZXhib3ggbGF5b3V0ICovXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciB0aGUgYnV0dG9ucyBob3Jpem9udGFsbHkgKi9cbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG4gIFxuICAuYnViYmxlLXNvcnQtYnRuIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwYjY0MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGdyYXk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgfVxuICBcbiAgLmJ1YmJsZS1zb3J0LWJ0biBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIH1cbiAgXG4gIC5idWJibGUtc29ydC1idG4gYnV0dG9uOmFjdGl2ZSB7XG4gICAgY29sb3I6ICMwMDY2Y2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8qIGJvcmRlcjogbm9uZTsgKi9cbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDY2Y2M7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIH1cblxuIC8qIHByYWN0aWNlIGNvZGUgKi9cbiAucHJhY3RpY2UtY29kZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZjYztcbiB9XG5cbiBpbnB1dFt0eXBlPVwidGV4dFwiXXtcbiAgd2lkdGg6IDUwcHg7IC8qIEFkanVzdCB0aGUgd2lkdGggYXMgbmVlZGVkICovXG4gIGhlaWdodDogMjBweDsgLyogQWRqdXN0IHRoZSBoZWlnaHQgYXMgbmVlZGVkICovXG5cbn1cbiAgcHJlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NmNjO1xuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICB9XG4gIFxuLnByYWN0aWNlIHtcbiAgZGlzcGxheTogZmxleDsgLyogVXNlIGZsZXhib3ggdG8gYWxpZ24gaXRlbXMgc2lkZSBieSBzaWRlICovXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjsgLyogQWxpZ24gaXRlbXMgYXQgdGhlIHRvcCAqL1xufVxuXG4vKiBTdHlsZSBmb3IgdGhlIGNvZGUgZGl2ICovXG4uY29kZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNzdGFydHZhbHVlIHtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDI1NSwgMTkxLCAwKTtcbn1cblxuLyogU3R5bGUgZm9yIHRoZSBzb2x1dGlvbiBkaXYgKi9cbi5zb2x1dGlvbiB7XG4gICAgcGFkZGluZzogMTBweDsgXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4vKiBTdHlsZSBmb3IgY29ycmVjdCBtZXNzYWdlICovXG4uY2hlY2tSZXMuY29ycmVjdCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47IC8qIEFkZCBhIGdyZWVuIGJvcmRlciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIHBhZGRpbmc6IDEwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBzcGFjaW5nICovXG59XG5cbi8qIFN0eWxlIGZvciBpbmNvcnJlY3QgbWVzc2FnZSAqL1xuLmNoZWNrUmVzLmluY29ycmVjdCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkOyAvKiBBZGQgYSByZWQgYm9yZGVyICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIHBhZGRpbmc6IDEwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBzcGFjaW5nICovXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('swap', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('inactive', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      backgroundColor: 'lightblue'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      backgroundColor: 'red'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('inactive => active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('2s')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active => inactive', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('1s'))])]
  }
});

/***/ }),

/***/ 9779:
/*!****************************************************!*\
  !*** ./src/app/courses/csc121/csc121.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Csc121Component": () => (/* binding */ Csc121Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _bubble_sort_bubble_sort_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble-sort/bubble-sort.component */ 8123);
/* harmony import */ var _insertion_sort_insertion_sort_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insertion-sort/insertion-sort.component */ 3453);
/* harmony import */ var _selection_sort_selection_sort_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selection-sort/selection-sort.component */ 3505);
/* harmony import */ var _forloop_forloop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forloop/forloop.component */ 7890);
/* harmony import */ var _duplicate_duplicate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duplicate/duplicate.component */ 7431);
/* harmony import */ var _missing_missing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./missing/missing.component */ 347);
var _class;









const _c0 = function (a0) {
  return {
    "background-color": a0
  };
};
function Csc121Component_div_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ele_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx_r0.currentNum === ele_r21 && ctx_r0.currentIndex === i_r22 ? "#F5F5DC" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ele_r21, " ");
  }
}
function Csc121Component_div_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_div_132_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Enter new values for the array separated by spaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function Csc121Component_div_132_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r25.readInput = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br")(8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_div_132_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r26.submitNewArray());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Submit Array");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.readInput);
  }
}
function Csc121Component_div_133_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_div_133_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r27.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "array.push() adds a value to the end of an array. For example, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "array.push(5)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " will add a 5 to the end of this array.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Try it below!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Enter New Value (Exp. 3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function Csc121Component_div_133_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.readInput = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "br")(17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_div_133_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r30.submitPush());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Add Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.readInput);
  }
}
function Csc121Component_div_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_div_134_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Pop removes and returns the last element in the array. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Here pop has removed the value: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function Csc121Component_div_135_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_div_135_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r33.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Enter the index of the element to be modified");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function Csc121Component_div_135_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r35.needmodify = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br")(8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Enter the new value (Exp. 3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function Csc121Component_div_135_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r36.readInput = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "br")(13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_div_135_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r37.onSubmitModify());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Modify Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r4.needmodify);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r4.readInput);
  }
}
function Csc121Component_div_142_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 51)(1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_div_142_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r38.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 52)(4, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_div_142_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r40.onStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Step");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 54)(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Current Index Of An Element: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 55)(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Current Element In The Array: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 56)(17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Next Element In The Array: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 57)(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Current Sum: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_div_142_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r41.restartLoop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Start Loop Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "h2", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Indexing Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div")(30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, " In an array, an index starts at 0 and counts up from there. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " Say that you declare an array called arr with values 2, 4, 6, 8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " Declaring that array looks like: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "arr[] = [2, 4, 6, 8] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "br")(39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, " The value 2 is at index 0, the value 4 is at index 1, and so on. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "br")(42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, " Typically, programmers use the letter 'i' to show the index in a loop. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "br")(45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Example: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "for (int i=0, i < arr.length, i++)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "br")(51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "li")(53, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "int i=0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, " initializes the variable i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "li")(58, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "i < arr.length");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, " is the condition. Here the loop will run as long as the index is less than the length of the array. We use < instead of <= because the last index in the array will always be ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "one less than the ength of the array");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " since indexing starts at zero.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "li")(66, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "i++");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, " increments the index after everything inside the loop has executed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "br")(70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, " Finding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, " retrieves the index.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, " Finding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "arr[i]");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, " retrieves the value associate with that index.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](80, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, " For example, using the array from above, if i = 2, arr[i] equals 6.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.currentIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.currentNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.nextNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.currSum);
  }
}
function Csc121Component_span_148_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_span_148_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r42.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function Csc121Component_h1_149_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_h1_149_Template_h1_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r44.practice1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Find Two Numbers with Sum K ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function Csc121Component_app_forloop_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-forloop");
  }
}
function Csc121Component_span_152_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_span_152_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r46.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function Csc121Component_h1_153_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_h1_153_Template_h1_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r48.practice2());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Find Duplicate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function Csc121Component_app_duplicate_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-duplicate");
  }
}
function Csc121Component_span_156_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_span_156_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r50.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function Csc121Component_h1_157_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_h1_157_Template_h1_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r52.practice3());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Find Missing Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function Csc121Component_app_missing_158_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-missing");
  }
}
function Csc121Component_span_160_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_span_160_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r54.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function Csc121Component_h1_161_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_h1_161_Template_h1_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r56.practice3());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Find the Word in A String ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function Csc121Component_app_missing_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-missing");
  }
}
function Csc121Component_span_164_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_span_164_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r58.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function Csc121Component_h1_165_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_h1_165_Template_h1_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r60.practice3());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Palindrome Word ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function Csc121Component_app_missing_166_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-missing");
  }
}
class Csc121Component {
  constructor() {
    this.arrayelement = [1, 2, 3, 4, 5];
    this.arrayTitle = "Your One Dimension Array";
    this.arrayLength = this.arrayelement.length;
    this.currentIndex = 0;
    this.currentNum = 0;
    this.nextNum = 0;
    this.currSum = 0;
    this.onCreateArray = false;
    this.onPush = false;
    this.onPop = false;
    this.onLoop = false;
    this.onModify = false;
    this.onClose = true;
    this.readInput = "";
    this.clickpractice1 = false;
    this.clickpractice2 = false;
    this.clickpractice3 = false;
    this.needmodify = "";
  }
  printArray(params) {
    let results = "";
    for (let ele of this.arrayelement) {
      let stringele = ele.toString();
      results += stringele + "  ";
    }
    let array = document.getElementById("array-display");
    return results;
  }
  createArray() {
    this.onClose = false;
    this.onCreateArray = true;
    console.log(this.readInput);
    let elements = this.readInput.split(",");
    console.log(elements);
    let newarray = [];
    for (let ele of elements) {
      let elefloat = parseFloat(ele);
      newarray.push(elefloat);
    }
    return newarray;
  }
  close() {
    this.onClose = true;
    this.onPop = false;
    this.onCreateArray = false;
    this.onPush = false;
    this.onModify = false;
    this.onLoop = false;
    this.clickpractice1 = false;
    this.clickpractice2 = false;
    this.clickpractice3 = false;
    this.currentIndex = 0;
    this.currentNum = 0;
    this.nextNum = 0;
    this.currSum = 0;
  }
  submitNewArray() {
    let array = this.createArray();
    this.onClose = true;
    this.arrayelement = array;
    this.arrayLength = array.length;
    this.onCreateArray = false;
  }
  addNewValue() {
    this.onClose = false;
    this.onPush = true;
    let newVal = parseFloat(this.readInput);
    return newVal;
  }
  submitPush() {
    let newval = this.addNewValue();
    this.arrayelement.push(newval);
    this.arrayLength += 1;
    this.onClose = true;
    this.onPush = false;
  }
  popLastValue() {
    this.onClose = false;
    this.onPop = true;
    this.arrayelement.pop();
  }
  modifyValue() {
    this.onClose = false;
    this.onModify = true;
    let currVal = parseFloat(this.needmodify);
    let newVal = parseFloat(this.readInput);
    let index = [];
    for (let i = 0; i < this.arrayelement.length; i++) {
      if (this.arrayelement[i] == currVal) {
        index.push(i);
      }
    }
    index.push(newVal);
    console.log(index);
    return index;
  }
  onSubmitModify() {
    let temp = this.modifyValue();
    for (let i = 0; i < temp.length - 1; i++) {
      this.arrayelement[temp[i]] = temp[temp.length - 1];
    }
    this.onClose = true;
    this.onModify = false;
  }
  RunLoopPanel() {
    this.onClose = false;
    this.onLoop = true;
    if (this.arrayelement.length == 0) {
      this.currentNum = -1;
      this.currentIndex = -1;
      this.nextNum = -1;
      this.currSum = 0;
    } else {
      this.currentNum = this.arrayelement[0];
      this.currentIndex = 0;
      if (this.arrayelement.length == 0) {
        this.nextNum = -1;
      } else {
        this.nextNum = this.arrayelement[1];
      }
      this.currSum += this.currentNum;
    }
  }
  onStep() {
    if (this.currentIndex < this.arrayelement.length) {
      this.currentIndex += 1;
      this.currentNum = this.arrayelement[this.currentIndex];
      this.currSum += this.currentNum;
      let temp = this.currentNum;
      if (this.currentIndex + 1 >= this.arrayelement.length) {
        this.nextNum = "End of Array";
      } else {
        this.nextNum = this.arrayelement[this.currentIndex];
      }
    } else {
      this.currSum = this.currSum;
      alert("You have reach the end of the array!");
    }
  }
  practice1() {
    this.clickpractice1 = true;
  }
  practice2() {
    this.clickpractice2 = true;
  }
  practice3() {
    this.clickpractice3 = true;
  }
  restartLoop() {
    this.currSum = 0;
    this.RunLoopPanel();
  }
}
_class = Csc121Component;
_class.ɵfac = function Csc121Component_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-csc121"]],
  decls: 167,
  vars: 36,
  consts: [[1, "chapter-header"], [1, "dataDescription"], [1, "table"], [1, "row"], [1, "header"], [1, "cell"], [1, "cond-operator"], [1, "class-obj-text"], [1, "class-object"], [1, "java"], [1, "array-vis"], [1, "array-table", "center"], [1, "array-length"], [1, "array-display"], ["class", "array-element", 4, "ngFor", "ngForOf"], ["id", "array-table-buttons", 1, "decorTable"], ["id", "array-popup-button", 3, "click"], ["id", "push-popup-button", 3, "click"], ["id", "pop-popup-button", 3, "click"], ["id", "modify-popup-button", 3, "click"], ["id", "array-popup", 4, "ngIf"], ["id", "push-popup", 4, "ngIf"], ["id", "pop-popup", 4, "ngIf"], ["id", "modify-popup", 4, "ngIf"], [1, "runloop"], ["id", "loop-through"], ["id", "loop-through-button", 1, "center", 3, "click"], ["id", "index-info-popup-content", 4, "ngIf"], [1, "practice1"], ["class", "close", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], [4, "ngIf"], [1, "array-element"], [3, "ngStyle"], ["id", "array-popup"], ["id", "array-popup-content"], [1, "close", 3, "click"], ["id", "input-new-array", "placeholder", "1,2,3,4,5", 3, "ngModel", "ngModelChange"], ["type", "submit", "id", "submit-array", 3, "click"], ["id", "push-popup"], ["id", "push-popup-content"], ["id", "add-val", "placeholder", "1", 3, "ngModel", "ngModelChange"], ["type", "submit", "id", "submit-push", 3, "click"], ["id", "pop-popup"], ["id", "pop-popup-content"], ["id", "display-pop"], ["id", "modify-popup"], ["id", "modify-popup-content"], ["id", "modify-index", "placeholder", "0", 3, "ngModel", "ngModelChange"], ["id", "modify-val", "placeholder", "0", 3, "ngModel", "ngModelChange"], ["type", "submit", "id", "submit-modify", 3, "click"], ["id", "index-info-popup-content"], ["id", "loop-content"], ["id", "next-button", 3, "click"], ["id", "index-info"], ["id", "curr-num-info"], ["id", "next-num-info"], ["id", "curr-sum-info"], ["id", "restart-loop", 3, "click"], [2, "text-align", "center"], ["id", "for-loop"], [3, "click"]],
  template: function Csc121Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Data Type in Computer Science\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " In computer science and computer programming, a data type (or simply type) is a collection or grouping of data values, usually specified by a set of possible values, a set of allowed operations on these values, and/or a representation of these values as machine types. A data type specification in a program constrains the possible values that an expression, such as a variable or a function call, might take. On literal data, it tells the compiler or interpreter how the programmer intends to use the data.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Data Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 4)(10, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 4)(13, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Storage Capacity");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 4)(16, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Example");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 3)(19, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Integer (int)");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Stores whole numbers that are Natural numbers. Using 4 bytes or 32 bits to store an Integer");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Ranging from -2,147,483,647 to 2,147,483,647");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "13 21 36");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 3)(28, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Integer (long)");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Represent integers, or whole numbers. It is similar to the int data type, but it is typically larger in size using 64 bits and can store a wider range of values.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Ranging from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "223372036854775808");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 3)(37, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Floating Points (float)");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Represent floating-point numbers, or numbers with decimal places. It is a primitive data type that can store positive or negative real numbers, including numbers with decimal places.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Implemented as a double-precision floating-point number, with a precision of 15-17 decimal places.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "2.3 3.4 1.7");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 3)(46, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Floating Points (double)");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Similar to the float data type, but it is typically larger in size and provides a higher precision for storing floating-point numbers. The size of a double data type varies depending on the programming language and system, but it typically ranges from 64 to 128 bits.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Implemented as a double-precision floating-point number, with a precision of 30-35 decimal places.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "2.132412343247");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 3)(55, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "String (string)");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, " Represent sequences of characters, such as words, sentences, or entire texts. It is a non-primitive data type that is typically implemented as an object in most modern programming languages, including Java, Python, and C#.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Maximum of 2147483647 characters");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "\"Hello World!\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 6)(64, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, " Condition Operator and Mathematical Operator\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Condition operators are symbols used in programming languages to evaluate a condition and determine the flow of execution of a program. Mathematical operators are symbols used in programming languages to perform arithmetic operations. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, " In Java, some commonly used condition operators are:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "\"==\": check if two variables are equal");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "\"!=\": check if two variables are different");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "\">\": check if the left variable is greater than the right variable");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "\"<\": check if the left variable is smaller than the right variable");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "\">=\": check if the left variable is greater than or equal the right variable");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "\"<=\": check if the left variable is smaller than or equal the right variable");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "Some commonly used Mathematical Operators are:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](84, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "\"+\": Addition");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, "\"-\": Subtraction");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "\"*\": Multiplication");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "\"/\": Division");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, "\"%\": Modulo");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 8)(96, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, " Classes And Objects\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "In Java, a class is a blueprint for creating objects. It defines the properties and methods that objects created from the class will have. Classes are the building blocks of Java applications and are used to model real-world entities.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](100, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, "Here is a simple example of a class in Java:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "code", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](106);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, " An object is an instance of a class and has its own state and behavior. The state of an object is represented by its instance variables and the behavior is represented by its methods. To create an object in Java, you need to use the \"new\" operator followed by a call to a constructor of the class. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, "    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, "\n      Car myCar = new Car();\n      myCar.brand = \"Toyota\";\n      myCar.model = \"Camry\";\n      myCar.year = 2020;\n      myCar.startEngine();\n      myCar.stopEngine();\n\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "div", 10)(116, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117, " One Dimensional Array ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "div", 11)(119, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](122, Csc121Component_div_122_Template, 3, 4, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 15)(124, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_Template_button_click_124_listener() {
        return ctx.createArray();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](125, "Create New Array");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_Template_button_click_126_listener() {
        return ctx.addNewValue();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127, "Add New Value (Push)");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_Template_button_click_128_listener() {
        return ctx.popLastValue();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "Remove a Value (Pop)");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_Template_button_click_130_listener() {
        return ctx.modifyValue();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, "Modify a Value");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](132, Csc121Component_div_132_Template, 11, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](133, Csc121Component_div_133_Template, 20, 1, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](134, Csc121Component_div_134_Template, 9, 0, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](135, Csc121Component_div_135_Template, 16, 2, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](136, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "div", 24)(138, "div", 25)(139, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Csc121Component_Template_button_click_139_listener() {
        return ctx.RunLoopPanel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](140, "run Loop");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](141, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](142, Csc121Component_div_142_Template, 83, 4, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](143, "app-bubble-sort")(144, "app-insertion-sort")(145, "app-selection-sort")(146, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](148, Csc121Component_span_148_Template, 2, 0, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](149, Csc121Component_h1_149_Template, 2, 0, "h1", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](150, Csc121Component_app_forloop_150_Template, 1, 0, "app-forloop", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](152, Csc121Component_span_152_Template, 2, 0, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](153, Csc121Component_h1_153_Template, 2, 0, "h1", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](154, Csc121Component_app_duplicate_154_Template, 1, 0, "app-duplicate", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](155, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](156, Csc121Component_span_156_Template, 2, 0, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](157, Csc121Component_h1_157_Template, 2, 0, "h1", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](158, Csc121Component_app_missing_158_Template, 1, 0, "app-missing", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](159, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](160, Csc121Component_span_160_Template, 2, 0, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](161, Csc121Component_h1_161_Template, 2, 0, "h1", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](162, Csc121Component_app_missing_162_Template, 1, 0, "app-missing", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](164, Csc121Component_span_164_Template, 2, 0, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](165, Csc121Component_h1_165_Template, 2, 0, "h1", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](166, Csc121Component_app_missing_166_Template, 1, 0, "app-missing", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](106);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolateV"](["\n  public class Car ", "{", "\n     private String make;\n     private String model;\n     private int year;\n  \n     public void setMake(String make) ", "{", "\n        this.make = make;\n     ", "}", "\n  \n     public String getMake()", "{", "\n        return make;\n     ", "}", "\n  \n     public void setModel(String model) ", "{", "\n        this.model = model;\n     ", "}", "\n  \n     public String getModel() ", "{", "\n        return model;\n     ", "}", "\n  \n     public void setYear(int year) ", "{", "\n        this.year = year;\n     ", "}", "\n  \n     public int getYear() ", "{", "\n        return year;\n     ", "}", "\n  ", "}", "\n  "]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Array Length: ", ctx.arrayLength, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.arrayelement);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.onCreateArray === true && ctx.onClose === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.onPush === true && ctx.onClose === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.onPop === true && ctx.onClose === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.onModify === true && ctx.onClose === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.onLoop === true && ctx.onClose === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.clickpractice1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.clickpractice1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.clickpractice1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.clickpractice2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.clickpractice2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.clickpractice2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.clickpractice3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.clickpractice3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.clickpractice3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.clickpractice3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.clickpractice3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.clickpractice3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.clickpractice3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.clickpractice3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.clickpractice3);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _bubble_sort_bubble_sort_component__WEBPACK_IMPORTED_MODULE_0__.BubbleSortComponent, _insertion_sort_insertion_sort_component__WEBPACK_IMPORTED_MODULE_1__.InsertionSortComponent, _selection_sort_selection_sort_component__WEBPACK_IMPORTED_MODULE_2__.SelectionSortComponent, _forloop_forloop_component__WEBPACK_IMPORTED_MODULE_3__.ForloopComponent, _duplicate_duplicate_component__WEBPACK_IMPORTED_MODULE_4__.DuplicateComponent, _missing_missing_component__WEBPACK_IMPORTED_MODULE_5__.MissingComponent],
  styles: [".table[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction:column;\n    margin: auto;\n    border-collapse: collapse;\n    width: -moz-fit-content;\n    width: fit-content;\n    border: 1px solid black;\n}\n.main-container[_ngcontent-%COMP%]{\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #0066cc;\n}\n\n.chapter-header[_ngcontent-%COMP%]{\n  font-family: \"Open Sans\";\n  color: rgb(255, 255, 255);\n  font-weight: bold;\n  font-size: 60px ;\n  align-items: center;\n  margin: auto;\n}\n.array-length[_ngcontent-%COMP%]{\n  font-family: 'Press Start 2P', cursive;\n  color: #7cb896;\n  font-weight: bold;\n  font-size: 25px ;\n  align-items: center;\n  margin: auto;\n  margin-bottom: 10px;\n}\n  \n.row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    border: 1px solid black;\n}\n  \n.cell[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content:left;\n    \n    \n    width: 200px;\n    padding: 5px;\n    border: 1px solid black;\n}\n  \n\n.header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 200px;\n    padding: 5px;\n    color: orange;\n    border: 1px solid black;\n}\n\n\n\n.array-table[_ngcontent-%COMP%]{\n    text-align: center;\n    display: inline-block;\n    font-size: large;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: auto;\n  }\n\n.center[_ngcontent-%COMP%]{\n  left: 50%;\n  top: 30%;\n  padding: 2px;\n  display: block;\n}\n.array-display[_ngcontent-%COMP%]{\n  font-size: 3em;\n  font-weight: 200;\n  display: inline-flex;\n  margin: auto;\n  border-collapse: collapse;\n  width: -moz-fit-content;\n  width: fit-content;\n  \n}\n\n  \n.decorTable[_ngcontent-%COMP%]{\n  margin-top: 5em;\n  display: block;\n  width: 100%;\n  flex-direction: column;\n}\n\n#array-table-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #e5ca2c;\n  color: white;\n  \n  border-radius: 20px;\n  \n  border: none;\n  margin: 10px 0;\n  padding: 5px;\n  width: 25%;\n  font-family: \"Open Sans\";\n  text-align: center;\n  font-size: large;\n}\n  \n#array-table-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ffbb00;\n  color: white;\n  font-weight: bolder;\n  border: none;\n  font-family: \"Open Sans\";\n}\n  \n#array-table-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  color: #0066cc;\n  background-color: white;\n  font-weight: bolder;\n  position: flex;\n  outline: none;\n  border: 2px solid #0066cc;\n  font-family: \"Open Sans\";\n}\n  \n#array-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  color: black;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n}\n  \n#array-popup-content[_ngcontent-%COMP%] {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 60%;\n}\n  \n#push-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  overflow: auto;\n  color: #000;\n  background-color: rgb(0, 0, 0);\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n}\n  \n#push-popup-content[_ngcontent-%COMP%] {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 60%;\n}\n  \n#pop-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  color: black;\n  z-index: 1;\n  padding-top: 100px;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n}\n  \n#pop-popup-content[_ngcontent-%COMP%] {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 60%;\n}\n  \n#enqueue-popup[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  color: black;\n  padding-top: 100px;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n}\n  \n   \n    \n#modify-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  width: 100%;\n  color: black;\n  left: 0;\n  top: 0;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n}\n  \n#modify-popup-content[_ngcontent-%COMP%] {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 60%;\n}\n    \n  \n.runloop[_ngcontent-%COMP%]{\n  display: inline-block;\n  width: 100%;\n}\n  \n#loop-through[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #00b300;\n  color: white;\n  width: 12rem;\n  height: 2rem;\n  border-radius: 20px;\n  border: none;\n  margin: 10px;\n  font-size: large;\n  margin-left: 45%;\n  font-family: \"Open Sans\";\n}\n\n#loop-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #00b300;\n  color: white;\n  width: 12rem;\n  height: 2rem;\n  border-radius: 20px;\n  border: none;\n  margin: 10px;\n  font-size: large;\n  font-family: \"Open Sans\";\n  width: 100%;\n}\n  \n#loop-through[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #008000;\n  color: white;\n  font-weight: bolder;\n  border: none;\n  margin: 2px;\n  margin-left: 45%;\n  font-family: \"Open Sans\";\n}\n\n#loop-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #008000;\n  color: white;\n  font-weight: bolder;\n  border: none;\n  margin: 2px;\n  font-family: \"Open Sans\";\n}\n  \n#loop-through[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  color: #008000;\n  background-color: white;\n  font-weight: bolder;\n  border-radius: 10px;\n  margin: 2px;\n  outline: none;\n  margin-left: 45%;\n  border: 2px solid #008000;\n  font-family: \"Open Sans\";\n}\n\n#loop-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  color: #008000;\n  background-color: white;\n  font-weight: bolder;\n  border-radius: 10px;\n  margin-left: 45%;\n  margin: 2px;\n  outline: none;\n  border: 2px solid #008000;\n  font-family: \"Open Sans\";\n}\n\n\n\n#index-info[_ngcontent-%COMP%] {\n  width: auto;\n  margin-right: 1em;\n  float: left;\n}\n\n#index-info-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  padding-top: 50px;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n}\n  \n#index-info-popup-content[_ngcontent-%COMP%] {\n\n  background-color: #e5d386;\n  margin-left: 20%;\n  position: flex;\n  padding: 10px 18px 10px 18px;\n  border: 1px solid #888;\n  width: 60%;\n}\n\n  #index-info-popup-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 1rem;\n  }\n\n  #index-info-popup-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 1rem;\n  }\n\n  #for-loop[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .close[_ngcontent-%COMP%] {\n    color: #000000;\n    float: right;\n    font-size: 35px;\n    font-weight: bold;\n  }\n\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n  color: #787070;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n#loop-content[_ngcontent-%COMP%] {\n}\n\n#array-table[_ngcontent-%COMP%]   #index-row[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\np[_ngcontent-%COMP%]{\n  font-size: 0.5cm;\n}\n\nli[_ngcontent-%COMP%]{\n  font-size: 0.5cm;\n}\n\n\n.array-element[_ngcontent-%COMP%]{\n  color: #ffb449;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: 3px;\n  display: inline-block;\n  background-color: rgb(255, 255, 255);\n  border: 5px solid #7cb896;\n  padding: 0.5ch;\n  font-family: 'Press Start 2P', cursive;\n}\n\n.array-vis[_ngcontent-%COMP%]{\n  background-color: #b6d4ae;\n}\n\n.class-object[_ngcontent-%COMP%]{\n  background-color: #7cb896;\n}\n\n.class-obj-text[_ngcontent-%COMP%]{\n  font-family: \"Open Sans\";\n}\n\n.cond-operator[_ngcontent-%COMP%]{\n  background-color: #48a684;\n}\n\n.practice1[_ngcontent-%COMP%]{\n  border: 4px solid white;\n  margin: 5%;\n  text-align: center;\n  border-radius: 20px;\n}\n\n.practice1[_ngcontent-%COMP%]:hover{\n  background-color: #a6a4a4;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jc2MxMjEvY3NjMTIxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7Ozs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztBQUVGO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxPQUFPO0VBQ1AsTUFBTTtFQUNOLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxPQUFPO0VBQ1AsTUFBTTtFQUNOLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWTtFQUNaLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLHFCQUFxQjtBQUN2Qjs7O0lBR0ksbUJBQW1CO0FBQ3ZCO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1AsTUFBTTtFQUNOLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtJQUNJLG1CQUFtQjs7QUFFdkI7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCOzs7O0FBSUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxPQUFPO0VBQ1AsTUFBTTtFQUNOLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztFQUVFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztBQUVGOztFQUVFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFLGNBQWM7RUFDZCx1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4ubWFpbi1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZjYztcbn1cblxuLmNoYXB0ZXItaGVhZGVye1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNjBweCA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5hcnJheS1sZW5ndGh7XG4gIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xuICBjb2xvcjogIzdjYjg5NjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjVweCA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiAgXG4ucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4gIFxuLmNlbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmxlZnQ7XG4gICAgLyogYWxpZ24taXRlbXM6Y2VudGVyOyAqL1xuICAgIC8qIHRleHQtYWxpZ246IGp1c3RpZnk7ICovXG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbiAgXG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cblxuXG4uYXJyYXktdGFibGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuLmNlbnRlcntcbiAgbGVmdDogNTAlO1xuICB0b3A6IDMwJTtcbiAgcGFkZGluZzogMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5hcnJheS1kaXNwbGF5e1xuICBmb250LXNpemU6IDNlbTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbn1cblxuICBcbi5kZWNvclRhYmxle1xuICBtYXJnaW4tdG9wOiA1ZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2FycmF5LXRhYmxlLWJ1dHRvbnMgYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVjYTJjO1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIHdpZHRoOiAxMnJlbTsgKi9cbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLyogYm94LXNoYWRvdzogMnB4IDJweCAycHggZ3JheTsgKi9cbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMjUlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuICBcbiNhcnJheS10YWJsZS1idXR0b25zIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJiMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbn1cbiAgXG4jYXJyYXktdGFibGUtYnV0dG9ucyBidXR0b246YWN0aXZlIHtcbiAgY29sb3I6ICMwMDY2Y2M7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBwb3NpdGlvbjogZmxleDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwNjZjYztcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG59XG4gIFxuI2FycmF5LXBvcHVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn1cbiAgXG4jYXJyYXktcG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgd2lkdGg6IDYwJTtcbn1cbiAgXG4jcHVzaC1wb3B1cCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn1cbiAgXG4jcHVzaC1wb3B1cC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICB3aWR0aDogNjAlO1xufVxuICBcbiNwb3AtcG9wdXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGNvbG9yOiBibGFjaztcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xufVxuICBcbiNwb3AtcG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgd2lkdGg6IDYwJTtcbn1cbiAgXG4jZW5xdWV1ZS1wb3B1cCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG59XG4gIFxuICAgXG4gICAgLyogTWluaCBUaGllIENvZGUgKi9cbiNtb2RpZnktcG9wdXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xufVxuICBcbiNtb2RpZnktcG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgd2lkdGg6IDYwJTtcbn1cbiAgICAvKiBNaW5oIFRoaWUgQ29kZSAqL1xuICBcbi5ydW5sb29we1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuICBcbiNsb29wLXRocm91Z2ggYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjMwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIG1hcmdpbi1sZWZ0OiA0NSU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xufVxuXG4jbG9vcC1jb250ZW50IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIzMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgd2lkdGg6IDEwMCU7XG59XG4gIFxuI2xvb3AtdGhyb3VnaCBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiA0NSU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xufVxuXG4jbG9vcC1jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG59XG4gIFxuI2xvb3AtdGhyb3VnaCBidXR0b246YWN0aXZlIHtcbiAgY29sb3I6ICMwMDgwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwODAwMDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG59XG5cbiNsb29wLWNvbnRlbnQgYnV0dG9uOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDA4MDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgbWFyZ2luOiAycHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDgwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xufVxuXG5cblxuI2luZGV4LWluZm8ge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4jaW5kZXgtaW5mby1wb3B1cCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG59XG4gIFxuI2luZGV4LWluZm8tcG9wdXAtY29udGVudCB7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZDM4NjtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgcG9zaXRpb246IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHggMThweCAxMHB4IDE4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA2MCU7XG59XG5cbiAgI2luZGV4LWluZm8tcG9wdXAtY29udGVudCBoMiB7XG4gICAgbWFyZ2luOiAxcmVtO1xuICB9XG5cbiAgI2luZGV4LWluZm8tcG9wdXAtY29udGVudCBwIHtcbiAgICBtYXJnaW46IDFyZW07XG4gIH1cblxuICAjZm9yLWxvb3Age1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jbG9zZSB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogIzc4NzA3MDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNsb29wLWNvbnRlbnQge1xufVxuXG4jYXJyYXktdGFibGUgI2luZGV4LXJvdyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucHtcbiAgZm9udC1zaXplOiAwLjVjbTtcbn1cblxubGl7XG4gIGZvbnQtc2l6ZTogMC41Y207XG59XG5cblxuLmFycmF5LWVsZW1lbnR7XG4gIGNvbG9yOiAjZmZiNDQ5O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgYm9yZGVyOiA1cHggc29saWQgIzdjYjg5NjtcbiAgcGFkZGluZzogMC41Y2g7XG4gIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xufVxuXG4uYXJyYXktdmlze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkNGFlO1xufVxuXG4uY2xhc3Mtb2JqZWN0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NiODk2O1xufVxuXG4uY2xhc3Mtb2JqLXRleHR7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xufVxuXG4uY29uZC1vcGVyYXRvcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4YTY4NDtcbn1cblxuLnByYWN0aWNlMXtcbiAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gIG1hcmdpbjogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnByYWN0aWNlMTpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2YTRhNDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7431:
/*!*****************************************************************!*\
  !*** ./src/app/courses/csc121/duplicate/duplicate.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DuplicateComponent": () => (/* binding */ DuplicateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
var _class;



function DuplicateComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ele_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ele_r2, " ");
  }
}
function DuplicateComponent_div_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You Make A Mistake!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DuplicateComponent_div_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You Are Correct!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DuplicateComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DuplicateComponent_div_28_div_2_Template, 5, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DuplicateComponent_div_28_div_4_Template, 5, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.checkres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.checkres);
  }
}
class DuplicateComponent {
  constructor() {
    this.k = 10;
    this.result = -1;
    this.arr = [3, 5, 7, 1, 2, 4, 9, 6, 1];
    this.idx = "";
    this.input2 = "";
    this.checkres = false;
    this.ele1 = -1;
    this.ele2 = -1;
  }
  resetResults() {
    for (let i = 0; i < this.arr.length; i++) {
      for (let j = 0; j < this.arr.length; j++) {
        if (this.arr[i] + this.arr[j] == this.k) {
          this.ele1 = this.arr[i];
          this.ele2 = this.arr[j];
          this.result = 2;
          return;
        }
      }
    }
    this.result = -1;
  }
  checkInput() {
    if (this.idx == "i+1" || this.idx == " i + 1 " || this.idx == "i + 1" || this.idx == "i+ 1") {
      if (this.input2 == "i" || this.input2 == " i " || this.input2 == " i") {
        this.checkres = true;
      }
    } else {
      this.checkres = false;
    }
  }
}
_class = DuplicateComponent;
_class.ɵfac = function DuplicateComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-duplicate"]],
  decls: 31,
  vars: 11,
  consts: [[1, "container"], [1, "array-table", "center"], [1, "array-length"], [1, "array-display"], ["class", "array-element", 4, "ngFor", "ngForOf"], [1, "practice"], [1, "code"], ["type", "text", "id", "startvalue", 3, "ngModel", "ngModelChange"], ["class", "solution", 4, "ngIf"], [1, "array-element"], [1, "solution"], ["class", "checkRes incorrect", 4, "ngIf"], ["class", "checkRes correct", 4, "ngIf"], [1, "checkRes", "incorrect"], [1, "checkRes", "correct"]],
  template: function DuplicateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Detect Duplicate Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You are given an array of numbers. Your task is to determine if there are any duplicate numbers in the array. If there are duplicates, return True; otherwise, return False.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DuplicateComponent_div_9_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div")(12, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Code to Complete:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DuplicateComponent_Template_input_ngModelChange_22_listener($event) {
        return ctx.idx = $event;
      })("ngModelChange", function DuplicateComponent_Template_input_ngModelChange_22_listener() {
        return ctx.checkInput();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DuplicateComponent_Template_input_ngModelChange_24_listener($event) {
        return ctx.input2 = $event;
      })("ngModelChange", function DuplicateComponent_Template_input_ngModelChange_24_listener() {
        return ctx.checkInput();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DuplicateComponent_div_28_Template, 6, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Array Length: ", ctx.arr.length, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arr);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\nfor (int i = 0; i < array.length; i++) ", "{", "\n    for (int j = ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.idx);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("; j < array.length; j++) ", "{", "\n        if (array[j] == array[");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.input2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("]) ", "{", "\n            return True;\n        ", "}", "\n    ", "}", "\n", "}", "\nreturn False;\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.idx);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: [".container[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto;\n    padding: 20px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n  }\n  \n  label[_ngcontent-%COMP%] {\n    font-weight: bold;\n\n  }\n  p[_ngcontent-%COMP%]{\n    font-family: \"Open Sans\";\n    font-weight: bold;\n  }\n  h2[_ngcontent-%COMP%]{\n    font-family: \"Open Sans\";\n    font-weight: bold;\n  }\n  \n  input[type=\"number\"][_ngcontent-%COMP%] {\n    width: 100px;\n    padding: 5px;\n    margin: 5px 0;\n  }\n  \n  #result[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #007bff;\n  }\n  \n  pre[_ngcontent-%COMP%] {\n    padding: 10px;\n    border-radius: 5px;\n    font-size: 14px;\n    overflow-x: auto;\n  }\n  \n.practice[_ngcontent-%COMP%] {\n  display: flex; \n  align-items:center; \n}\n\n\n.code[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    font-family: \"Open Sans\";\n}\n#startvalue[_ngcontent-%COMP%] {\n  border: 3px solid rgb(255, 191, 0);\n}\n\n\n.solution[_ngcontent-%COMP%] {\n    padding: 10px; \n    width: -moz-fit-content;\n    width: fit-content;\n    margin: auto;\n    height: -moz-fit-content;\n    height: fit-content;\n}\n\n\n.checkRes.correct[_ngcontent-%COMP%] {\n    border: 2px solid green; \n    background-color: green;\n    color: white;\n    text-align: center;\n    font-weight: bold;\n    font-size: 25px;\n    font-family: \"Open Sans\";\n    padding: 10px; \n}\n\n\n.checkRes.incorrect[_ngcontent-%COMP%] {\n    border: 2px solid red; \n    background-color: red;\n    color: white;\n    font-weight: bold;\n    text-align: center;\n    font-size: 25px;\n    font-family: \"Open Sans\";\n    padding: 10px; \n}\n\n\n.array-table[_ngcontent-%COMP%]{\n  text-align: center;\n  display: inline-block;\n  font-size: large;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\n\n.center[_ngcontent-%COMP%]{\n  left: 50%;\n  top: 30%;\n  padding: 2px;\n  display: block;\n}\n.array-display[_ngcontent-%COMP%]{\n  font-size: 3em;\n  font-weight: 200;\n  display: inline-flex;\n  margin: auto;\n  border-collapse: collapse;\n  width: -moz-fit-content;\n  width: fit-content;\n  \n}\n\n.array-element[_ngcontent-%COMP%]{\n  color: #ffb449;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: 3px;\n  display: inline-block;\n  background-color: rgb(255, 255, 255);\n  border: 5px solid #7cb896;\n  padding: 0.5ch;\n  font-family: 'Press Start 2P', cursive;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jc2MxMjEvZHVwbGljYXRlL2R1cGxpY2F0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFFQUFxRTs7QUFFckU7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCOztFQUVuQjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0FBRUY7RUFDRSxhQUFhLEVBQUUsNENBQTRDO0VBQzNELGtCQUFrQixFQUFFLDJCQUEyQjtBQUNqRDs7QUFFQSwyQkFBMkI7QUFDM0I7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1QjtBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBLCtCQUErQjtBQUMvQjtJQUNJLGFBQWEsRUFBRSw0QkFBNEI7SUFDM0MsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0JBQW1CO0lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQSw4QkFBOEI7QUFDOUI7SUFDSSx1QkFBdUIsRUFBRSx1QkFBdUI7SUFDaEQsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsYUFBYSxFQUFFLDRCQUE0QjtBQUMvQzs7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDSSxxQkFBcUIsRUFBRSxxQkFBcUI7SUFDNUMscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsYUFBYSxFQUFFLDRCQUE0QjtBQUMvQzs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsY0FBYztFQUNkLHNDQUFzQztBQUN4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFkZCB5b3VyIENTUyBzdHlsZXMgaGVyZSB0byBjdXN0b21pemUgdGhlIGNvbXBvbmVudCdzIGFwcGVhcmFuY2UgKi9cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIFxuICBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgfVxuICBwe1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIGgye1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogNXB4IDA7XG4gIH1cbiAgXG4gICNyZXN1bHQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMDA3YmZmO1xuICB9XG4gIFxuICBwcmUge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICB9XG4gIFxuLnByYWN0aWNlIHtcbiAgZGlzcGxheTogZmxleDsgLyogVXNlIGZsZXhib3ggdG8gYWxpZ24gaXRlbXMgc2lkZSBieSBzaWRlICovXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjsgLyogQWxpZ24gaXRlbXMgYXQgdGhlIHRvcCAqL1xufVxuXG4vKiBTdHlsZSBmb3IgdGhlIGNvZGUgZGl2ICovXG4uY29kZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xufVxuI3N0YXJ0dmFsdWUge1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjU1LCAxOTEsIDApO1xufVxuXG4vKiBTdHlsZSBmb3IgdGhlIHNvbHV0aW9uIGRpdiAqL1xuLnNvbHV0aW9uIHtcbiAgICBwYWRkaW5nOiAxMHB4OyAvKiBBZGQgcGFkZGluZyBmb3Igc3BhY2luZyAqL1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLyogU3R5bGUgZm9yIGNvcnJlY3QgbWVzc2FnZSAqL1xuLmNoZWNrUmVzLmNvcnJlY3Qge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuOyAvKiBBZGQgYSBncmVlbiBib3JkZXIgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICBwYWRkaW5nOiAxMHB4OyAvKiBBZGQgcGFkZGluZyBmb3Igc3BhY2luZyAqL1xufVxuXG4vKiBTdHlsZSBmb3IgaW5jb3JyZWN0IG1lc3NhZ2UgKi9cbi5jaGVja1Jlcy5pbmNvcnJlY3Qge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgLyogQWRkIGEgcmVkIGJvcmRlciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICBwYWRkaW5nOiAxMHB4OyAvKiBBZGQgcGFkZGluZyBmb3Igc3BhY2luZyAqL1xufVxuXG5cbi5hcnJheS10YWJsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2VudGVye1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMzAlO1xuICBwYWRkaW5nOiAycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFycmF5LWRpc3BsYXl7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogMjAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xufVxuXG4uYXJyYXktZWxlbWVudHtcbiAgY29sb3I6ICNmZmI0NDk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBib3JkZXI6IDVweCBzb2xpZCAjN2NiODk2O1xuICBwYWRkaW5nOiAwLjVjaDtcbiAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7890:
/*!*************************************************************!*\
  !*** ./src/app/courses/csc121/forloop/forloop.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForloopComponent": () => (/* binding */ ForloopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
var _class;



function ForloopComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ele_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ele_r4, " ");
  }
}
function ForloopComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.result);
  }
}
function ForloopComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", ctx_r2.ele1, ", ", ctx_r2.ele2, ")");
  }
}
function ForloopComponent_div_35_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You Make A Mistake!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ForloopComponent_div_35_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You Are Correct!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ForloopComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForloopComponent_div_35_div_2_Template, 5, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForloopComponent_div_35_div_4_Template, 5, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.checkres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.checkres);
  }
}
class ForloopComponent {
  constructor() {
    this.k = 10;
    this.result = -1;
    this.arr = [3, 5, 7, 1, 2, 4, 9, 6, 1];
    this.idx = "";
    this.checkres = false;
    this.ele1 = -1;
    this.ele2 = -1;
  }
  resetResults() {
    for (let i = 0; i < this.arr.length; i++) {
      for (let j = 0; j < this.arr.length; j++) {
        if (this.arr[i] + this.arr[j] == this.k) {
          this.ele1 = this.arr[i];
          this.ele2 = this.arr[j];
          this.result = 2;
          return;
        }
      }
    }
    this.result = -1;
  }
  checkInput() {
    if (this.idx == "i+1" || this.idx == " i + 1 " || this.idx == "i + 1" || this.idx == "i+ 1") {
      this.checkres = true;
    } else {
      this.checkres = false;
    }
  }
}
_class = ForloopComponent;
_class.ɵfac = function ForloopComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-forloop"]],
  decls: 38,
  vars: 13,
  consts: [[1, "container"], [1, "array-table", "center"], [1, "array-length"], [1, "array-display"], ["class", "array-element", 4, "ngFor", "ngForOf"], ["for", "kValue"], ["type", "number", "id", "kValue", 3, "ngModel", "ngModelChange"], ["for", "result"], ["id", "result", 4, "ngIf"], ["id", "result2", 4, "ngIf"], [1, "practice"], [1, "code"], ["type", "text", "id", "startvalue", 3, "ngModel", "ngModelChange"], ["class", "solution", 4, "ngIf"], [1, "array-element"], ["id", "result"], ["id", "result2"], [1, "solution"], ["class", "checkRes incorrect", 4, "ngIf"], ["class", "checkRes correct", 4, "ngIf"], [1, "checkRes", "incorrect"], [1, "checkRes", "correct"]],
  template: function ForloopComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Find Two Numbers with Sum K");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fill in the missing parts of the code to find two numbers in the array that have a sum equal to K. Return -1, if we can not find. Otherwise, return the two number");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ForloopComponent_div_9_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div")(11, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enter K:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForloopComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.k = $event;
      })("ngModelChange", function ForloopComponent_Template_input_ngModelChange_13_listener() {
        return ctx.resetResults();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div")(15, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Result:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ForloopComponent_span_17_Template, 2, 1, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForloopComponent_span_18_Template, 2, 2, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div")(21, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Code to Complete:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForloopComponent_Template_input_ngModelChange_31_listener($event) {
        return ctx.idx = $event;
      })("ngModelChange", function ForloopComponent_Template_input_ngModelChange_31_listener() {
        return ctx.checkInput();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ForloopComponent_div_35_Template, 6, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Array Length: ", ctx.arr.length, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arr);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.k);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.result === -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.result === -1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\nfor (int i = 0; i < array.length; i++) ", "{", "\n    for (int j = ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.idx);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"]("; j < array.length; j++) ", "{", "\n        if (array[i] + array[j] == k) ", "{", "\n            return (array[i], arr[j]);\n        ", "}", "\n    ", "}", "\n", "}", "\nreturn -1;\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.idx);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: [".container[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto;\n    padding: 20px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n  }\n  \n  label[_ngcontent-%COMP%] {\n    font-weight: bold;\n\n  }\n  p[_ngcontent-%COMP%]{\n    font-family: \"Open Sans\";\n    font-weight: bold;\n  }\n  h2[_ngcontent-%COMP%]{\n    font-family: \"Open Sans\";\n    font-weight: bold;\n  }\n  \n  input[type=\"number\"][_ngcontent-%COMP%] {\n    width: 100px;\n    padding: 5px;\n    margin: 5px 0;\n  }\n  \n  #result[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #007bff;\n  }\n  \n  pre[_ngcontent-%COMP%] {\n    padding: 10px;\n    border-radius: 5px;\n    font-size: 14px;\n    overflow-x: auto;\n  }\n  \n.practice[_ngcontent-%COMP%] {\n  display: flex; \n  align-items:center; \n}\n\n\n.code[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    font-family: \"Open Sans\";\n}\n#startvalue[_ngcontent-%COMP%] {\n  border: 3px solid rgb(255, 191, 0);\n}\n\n\n.solution[_ngcontent-%COMP%] {\n    padding: 10px; \n    width: -moz-fit-content;\n    width: fit-content;\n    margin: auto;\n    height: -moz-fit-content;\n    height: fit-content;\n}\n\n\n.checkRes.correct[_ngcontent-%COMP%] {\n    border: 2px solid green; \n    background-color: green;\n    color: white;\n    text-align: center;\n    font-weight: bold;\n    font-size: 25px;\n    font-family: \"Open Sans\";\n    padding: 10px; \n}\n\n\n.checkRes.incorrect[_ngcontent-%COMP%] {\n    border: 2px solid red; \n    background-color: red;\n    color: white;\n    font-weight: bold;\n    text-align: center;\n    font-size: 25px;\n    font-family: \"Open Sans\";\n    padding: 10px; \n}\n\n\n.array-table[_ngcontent-%COMP%]{\n  text-align: center;\n  display: inline-block;\n  font-size: large;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\n\n.center[_ngcontent-%COMP%]{\n  left: 50%;\n  top: 30%;\n  padding: 2px;\n  display: block;\n}\n.array-display[_ngcontent-%COMP%]{\n  font-size: 3em;\n  font-weight: 200;\n  display: inline-flex;\n  margin: auto;\n  border-collapse: collapse;\n  width: -moz-fit-content;\n  width: fit-content;\n  \n}\n\n.array-element[_ngcontent-%COMP%]{\n  color: #ffb449;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: 3px;\n  display: inline-block;\n  background-color: rgb(255, 255, 255);\n  border: 5px solid #7cb896;\n  padding: 0.5ch;\n  font-family: 'Press Start 2P', cursive;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jc2MxMjEvZm9ybG9vcC9mb3Jsb29wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVBQXFFOztBQUVyRTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7O0VBRW5CO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7QUFFRjtFQUNFLGFBQWEsRUFBRSw0Q0FBNEM7RUFDM0Qsa0JBQWtCLEVBQUUsMkJBQTJCO0FBQ2pEOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUEsK0JBQStCO0FBQy9CO0lBQ0ksYUFBYSxFQUFFLDRCQUE0QjtJQUMzQyx1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix3QkFBbUI7SUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBLDhCQUE4QjtBQUM5QjtJQUNJLHVCQUF1QixFQUFFLHVCQUF1QjtJQUNoRCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixhQUFhLEVBQUUsNEJBQTRCO0FBQy9DOztBQUVBLGdDQUFnQztBQUNoQztJQUNJLHFCQUFxQixFQUFFLHFCQUFxQjtJQUM1QyxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixhQUFhLEVBQUUsNEJBQTRCO0FBQy9DOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsc0NBQXNDO0FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIHlvdXIgQ1NTIHN0eWxlcyBoZXJlIHRvIGN1c3RvbWl6ZSB0aGUgY29tcG9uZW50J3MgYXBwZWFyYW5jZSAqL1xuXG4uY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgXG4gIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICB9XG4gIHB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgaDJ7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgfVxuICBcbiAgI3Jlc3VsdCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gIH1cbiAgXG4gIHByZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cbiAgXG4ucHJhY3RpY2Uge1xuICBkaXNwbGF5OiBmbGV4OyAvKiBVc2UgZmxleGJveCB0byBhbGlnbiBpdGVtcyBzaWRlIGJ5IHNpZGUgKi9cbiAgYWxpZ24taXRlbXM6Y2VudGVyOyAvKiBBbGlnbiBpdGVtcyBhdCB0aGUgdG9wICovXG59XG5cbi8qIFN0eWxlIGZvciB0aGUgY29kZSBkaXYgKi9cbi5jb2RlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG59XG4jc3RhcnR2YWx1ZSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNTUsIDE5MSwgMCk7XG59XG5cbi8qIFN0eWxlIGZvciB0aGUgc29sdXRpb24gZGl2ICovXG4uc29sdXRpb24ge1xuICAgIHBhZGRpbmc6IDEwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBzcGFjaW5nICovXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4vKiBTdHlsZSBmb3IgY29ycmVjdCBtZXNzYWdlICovXG4uY2hlY2tSZXMuY29ycmVjdCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47IC8qIEFkZCBhIGdyZWVuIGJvcmRlciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIHBhZGRpbmc6IDEwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBzcGFjaW5nICovXG59XG5cbi8qIFN0eWxlIGZvciBpbmNvcnJlY3QgbWVzc2FnZSAqL1xuLmNoZWNrUmVzLmluY29ycmVjdCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkOyAvKiBBZGQgYSByZWQgYm9yZGVyICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIHBhZGRpbmc6IDEwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBzcGFjaW5nICovXG59XG5cblxuLmFycmF5LXRhYmxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jZW50ZXJ7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAzMCU7XG4gIHBhZGRpbmc6IDJweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYXJyYXktZGlzcGxheXtcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG59XG5cbi5hcnJheS1lbGVtZW50e1xuICBjb2xvcjogI2ZmYjQ0OTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGJvcmRlcjogNXB4IHNvbGlkICM3Y2I4OTY7XG4gIHBhZGRpbmc6IDAuNWNoO1xuICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3453:
/*!***************************************************************************!*\
  !*** ./src/app/courses/csc121/insertion-sort/insertion-sort.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsertionSortComponent": () => (/* binding */ InsertionSortComponent)
/* harmony export */ });
/* harmony import */ var _Users_tuanle_Documents_Python_CSCDePauwWebsite_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);

var _class;




const _c0 = function (a0) {
  return {
    "margin-left.px": a0
  };
};
function InsertionSortComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", item_r2.value * 2, "px")("background-color", item_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@swap", item_r2.state)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, item_r2.x));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.value, " ");
  }
}
function InsertionSortComponent_div_14_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "You Make A Mistake!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function InsertionSortComponent_div_14_div_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "You Are Correct!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function InsertionSortComponent_div_14_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InsertionSortComponent_div_14_div_21_div_2_Template, 5, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, InsertionSortComponent_div_14_div_21_div_4_Template, 5, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.checkres);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.checkres);
  }
}
function InsertionSortComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\nFilling in the missing places to complete the Selection Sort Algorithm\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InsertionSortComponent_div_14_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.input1 = $event);
    })("ngModelChange", function InsertionSortComponent_div_14_Template_input_ngModelChange_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.checkInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InsertionSortComponent_div_14_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.input2 = $event);
    })("ngModelChange", function InsertionSortComponent_div_14_Template_input_ngModelChange_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.checkInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "] = arr[");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InsertionSortComponent_div_14_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.input3 = $event);
    })("ngModelChange", function InsertionSortComponent_div_14_Template_input_ngModelChange_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.checkInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InsertionSortComponent_div_14_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.input4 = $event);
    })("ngModelChange", function InsertionSortComponent_div_14_Template_input_ngModelChange_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.checkInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, InsertionSortComponent_div_14_div_21_Template, 6, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n\n\nint n = arr.length;\n        \nfor (int i = 1; i < n; i++) ", "{", "\n    int key = arr[i];\n    int j = i - 1;\n    \n    // Move elements of arr[0..i-1] that are greater than key\n    // to one position ahead of their current position\n    while (j >= 0 && arr[");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.input1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("] > key) ", "{", "\n        arr[");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.input2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.input3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("];\n        j--;\n    ", "}", "\n    \n    arr[");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.input4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("] = key;\n", "}", "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.input1 && ctx_r1.input2 && ctx_r1.input3 && ctx_r1.input4);
  }
}
class InsertionSortComponent {
  constructor() {
    this.items = [];
    this.width = 0.5;
    this.input1 = "";
    this.input2 = "";
    this.input3 = "";
    this.input4 = "";
    this.checkres = false;
    this.clickpractice = false;
    this.stopSor = false;
  }
  ngOnInit() {
    this.generateArray();
    console.log(this.items);
  }
  generateArray() {
    this.items = [];
    for (let i = 0; i < 15; i++) {
      this.items.push({
        value: Math.floor(Math.random() * 100) + 1,
        color: 'lightblue',
        state: 'inactive',
        x: i * this.width
      });
    }
  }
  insertionSort() {
    var _this = this;
    return (0,_Users_tuanle_Documents_Python_CSCDePauwWebsite_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.stopSor = false;
      for (let i = 1; i < _this.items.length; i++) {
        if (_this.stopSor == false) {
          yield new Promise(resolve => setTimeout(resolve, 500));
          let key = _this.items[i];
          key.state = 'active';
          yield new Promise(resolve => setTimeout(resolve, 500));
          let j = i - 1;
          while (j >= 0 && _this.items[j].value > key.value) {
            _this.items[j + 1] = _this.items[j];
            j = j - 1;
          }
          _this.items[j + 1] = key;
          yield new Promise(resolve => setTimeout(resolve, 200));
          key.state = 'inactive';
        }
      }
    })();
  }
  stopSort() {
    this.stopSor = true;
  }
  checkInput() {
    if (this.input1 == "j" || this.input1 == " j " || this.input1 == " j") {
      if ((this.input2 == "j+1" || this.input2 == " j + 1 " || this.input2 == " j+1") && this.input3 == this.input1 && this.input4 == this.input2) {
        this.checkres = true;
      }
    } else {
      this.checkres = false;
    }
  }
  practiceCode() {
    this.clickpractice = !this.clickpractice;
  }
}
_class = InsertionSortComponent;
_class.ɵfac = function InsertionSortComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-insertion-sort"]],
  decls: 15,
  vars: 2,
  consts: [[1, "main-container"], [1, "bubble-sort-btn"], [1, "chapter-header"], [1, "sort-btn", 3, "click"], [1, "new-array-btn", 3, "click"], [1, "stop-array-btn", 3, "click"], [1, "container"], ["class", "element", 3, "height", "background-color", "ngStyle", 4, "ngFor", "ngForOf"], ["class", "practice-code", 4, "ngIf"], [1, "element", 3, "ngStyle"], [1, "practice-code"], [1, "practice"], [1, "code"], ["type", "text", "id", "startvalue", 3, "ngModel", "ngModelChange"], ["class", "solution", 4, "ngIf"], [1, "solution"], ["class", "checkRes incorrect", 4, "ngIf"], ["class", "checkRes correct", 4, "ngIf"], [1, "checkRes", "incorrect"], [1, "checkRes", "correct"]],
  template: function InsertionSortComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Insertion Sort Algorithm ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InsertionSortComponent_Template_button_click_4_listener() {
        return ctx.insertionSort();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Insertion Sort");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InsertionSortComponent_Template_button_click_6_listener() {
        return ctx.generateArray();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Generate New Array");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InsertionSortComponent_Template_button_click_8_listener() {
        return ctx.stopSort();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Stop");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InsertionSortComponent_Template_button_click_10_listener() {
        return ctx.practiceCode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Practice Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, InsertionSortComponent_div_13_Template, 2, 9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, InsertionSortComponent_div_14_Template, 24, 9, "div", 8);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clickpractice);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
  styles: [".main-container[_ngcontent-%COMP%]{\n    display: inline-flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    background-color: #6998c8;\n  }\n  \n  .chapter-header[_ngcontent-%COMP%]{\n    font-family: \"Open Sans\";\n    color: rgb(255, 255, 255);\n    font-weight: bold;\n    font-size: 60px ;\n    align-items: center;\n    margin: auto;\n  }\n  \n  .container[_ngcontent-%COMP%] {\n    display: inline-flex;\n    flex-direction: row;\n    align-items: flex-end;\n    height: 300px;\n    width: 50%;\n    justify-items: center;\n    \n  }\n  \n  .element[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 50px;\n    margin-right: 2px;\n    font-family: 'Press Start 2P', cursive;\n  }\n  \n  \n  .bubble-sort-btn[_ngcontent-%COMP%]{\n    display: inline-block; \n    justify-content: center; \n    width: 50%;\n    margin-left: auto;\n  }\n  \n  .bubble-sort-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #d0b640;\n    color: white;\n    width: 12rem;\n    height: 2rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px gray;\n    border: none;\n    margin: 10px;\n    font-family: \"Open Sans\";\n  }\n  \n  .bubble-sort-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: orange;\n    color: white;\n    font-weight: bolder;\n    border: none;\n    font-family: \"Open Sans\";\n  }\n  \n  .bubble-sort-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n    color: #0066cc;\n    background-color: white;\n    font-weight: bolder;\n    border-radius: 10px;\n    \n    outline: none;\n    border: 2px solid #0066cc;\n    font-family: \"Open Sans\";\n  }\n\n\n\n  \n .practice-code[_ngcontent-%COMP%]{\n  display: inline-block;\n  width: 100%;\n  background-color: #6998c8;\n}\n\ninput[type=\"text\"][_ngcontent-%COMP%]{\nwidth: 50px; \nheight: 20px; \n\n}\npre[_ngcontent-%COMP%] {\n  background-color: #6998c8;\n  \n  border-radius: 5px;\n  font-size: 14px;\n  overflow-x: auto;\n}\n\n.practice[_ngcontent-%COMP%] {\ndisplay: flex; \nalign-items:center; \n}\n\n\n.code[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Open Sans\";\n  color: white;\n}\n#startvalue[_ngcontent-%COMP%] {\nborder: 3px solid rgb(255, 191, 0);\n}\n\n\n.solution[_ngcontent-%COMP%] {\n  padding: 10px; \n  width: -moz-fit-content; \n  width: fit-content;\n  margin: auto;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n\n.checkRes.correct[_ngcontent-%COMP%] {\n  border: 2px solid green; \n  background-color: green;\n  color: white;\n  text-align: center;\n  font-weight: bold;\n  font-size: 25px;\n  font-family: \"Open Sans\";\n  padding: 10px; \n}\n\n\n.checkRes.incorrect[_ngcontent-%COMP%] {\n  border: 2px solid red; \n  background-color: red;\n  color: white;\n  font-weight: bold;\n  text-align: center;\n  font-size: 25px;\n  font-family: \"Open Sans\";\n  padding: 10px; \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jc2MxMjEvaW5zZXJ0aW9uLXNvcnQvaW5zZXJ0aW9uLXNvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixVQUFVO0lBQ1YscUJBQXFCOztFQUV2Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHNDQUFzQztFQUN4Qzs7O0VBR0E7SUFDRSxxQkFBcUIsRUFBRSx1QkFBdUI7SUFDOUMsdUJBQXVCLEVBQUUsb0NBQW9DO0lBQzdELFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsd0JBQXdCO0VBQzFCOzs7O0VBSUEsa0JBQWtCO0NBQ25CO0VBQ0MscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7QUFDQSxXQUFXLEVBQUUsK0JBQStCO0FBQzVDLFlBQVksRUFBRSxnQ0FBZ0M7O0FBRTlDO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0FBQ0EsYUFBYSxFQUFFLDRDQUE0QztBQUMzRCxrQkFBa0IsRUFBRSwyQkFBMkI7QUFDL0M7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsYUFBYTtFQUNiLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHdCQUFtQjtFQUFuQixtQkFBbUI7QUFDckI7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsdUJBQXVCLEVBQUUsdUJBQXVCO0VBQ2hELHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGFBQWEsRUFBRSw0QkFBNEI7QUFDN0M7O0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UscUJBQXFCLEVBQUUscUJBQXFCO0VBQzVDLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGFBQWEsRUFBRSw0QkFBNEI7QUFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTk4Yzg7XG4gIH1cbiAgXG4gIC5jaGFwdGVyLWhlYWRlcntcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNjBweCA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gIH1cbiAgXG4gIC5lbGVtZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XG4gIH1cbiAgXG4gIFxuICAuYnViYmxlLXNvcnQtYnRue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogVXNlIGZsZXhib3ggbGF5b3V0ICovXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciB0aGUgYnV0dG9ucyBob3Jpem9udGFsbHkgKi9cbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG4gIFxuICAuYnViYmxlLXNvcnQtYnRuIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwYjY0MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGdyYXk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgfVxuICBcbiAgLmJ1YmJsZS1zb3J0LWJ0biBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIH1cbiAgXG4gIC5idWJibGUtc29ydC1idG4gYnV0dG9uOmFjdGl2ZSB7XG4gICAgY29sb3I6ICMwMDY2Y2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8qIGJvcmRlcjogbm9uZTsgKi9cbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDY2Y2M7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIH1cblxuXG5cbiAgLyogcHJhY3RpY2UgY29kZSAqL1xuIC5wcmFjdGljZS1jb2Rle1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk5OGM4O1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXXtcbndpZHRoOiA1MHB4OyAvKiBBZGp1c3QgdGhlIHdpZHRoIGFzIG5lZWRlZCAqL1xuaGVpZ2h0OiAyMHB4OyAvKiBBZGp1c3QgdGhlIGhlaWdodCBhcyBuZWVkZWQgKi9cblxufVxucHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5OThjODtcbiAgLyogcGFkZGluZzogMTBweDsgKi9cbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5wcmFjdGljZSB7XG5kaXNwbGF5OiBmbGV4OyAvKiBVc2UgZmxleGJveCB0byBhbGlnbiBpdGVtcyBzaWRlIGJ5IHNpZGUgKi9cbmFsaWduLWl0ZW1zOmNlbnRlcjsgLyogQWxpZ24gaXRlbXMgYXQgdGhlIHRvcCAqL1xufVxuXG4vKiBTdHlsZSBmb3IgdGhlIGNvZGUgZGl2ICovXG4uY29kZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBjb2xvcjogd2hpdGU7XG59XG4jc3RhcnR2YWx1ZSB7XG5ib3JkZXI6IDNweCBzb2xpZCByZ2IoMjU1LCAxOTEsIDApO1xufVxuXG4vKiBTdHlsZSBmb3IgdGhlIHNvbHV0aW9uIGRpdiAqL1xuLnNvbHV0aW9uIHtcbiAgcGFkZGluZzogMTBweDsgXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4vKiBTdHlsZSBmb3IgY29ycmVjdCBtZXNzYWdlICovXG4uY2hlY2tSZXMuY29ycmVjdCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuOyAvKiBBZGQgYSBncmVlbiBib3JkZXIgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgcGFkZGluZzogMTBweDsgLyogQWRkIHBhZGRpbmcgZm9yIHNwYWNpbmcgKi9cbn1cblxuLyogU3R5bGUgZm9yIGluY29ycmVjdCBtZXNzYWdlICovXG4uY2hlY2tSZXMuaW5jb3JyZWN0IHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkOyAvKiBBZGQgYSByZWQgYm9yZGVyICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBwYWRkaW5nOiAxMHB4OyAvKiBBZGQgcGFkZGluZyBmb3Igc3BhY2luZyAqL1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('swap', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('inactive', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      backgroundColor: 'lightblue'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      backgroundColor: 'red'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('inactive => active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('2s')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active => inactive', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('1s'))])]
  }
});

/***/ }),

/***/ 347:
/*!*************************************************************!*\
  !*** ./src/app/courses/csc121/missing/missing.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissingComponent": () => (/* binding */ MissingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
var _class;



function MissingComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ele_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ele_r2, " ");
  }
}
function MissingComponent_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You Make A Mistake!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MissingComponent_div_26_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You Are Correct!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MissingComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MissingComponent_div_26_div_2_Template, 5, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MissingComponent_div_26_div_4_Template, 5, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.checkres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.checkres);
  }
}
class MissingComponent {
  constructor() {
    this.k = 10;
    this.result = -1;
    this.arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];
    this.input2 = "";
    this.checkres = false;
    this.ele1 = -1;
    this.ele2 = -1;
  }
  resetResults() {
    for (let i = 0; i < this.arr.length; i++) {
      for (let j = 0; j < this.arr.length; j++) {
        if (this.arr[i] + this.arr[j] == this.k) {
          this.ele1 = this.arr[i];
          this.ele2 = this.arr[j];
          this.result = 2;
          return;
        }
      }
    }
    this.result = -1;
  }
  checkInput() {
    if (this.input2 == "i" || this.input2 == " i " || this.input2 == " i") {
      this.checkres = true;
    } else {
      this.checkres = false;
    }
  }
}
_class = MissingComponent;
_class.ɵfac = function MissingComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-missing"]],
  decls: 29,
  vars: 8,
  consts: [[1, "container"], [1, "array-table", "center"], [1, "array-length"], [1, "array-display"], ["class", "array-element", 4, "ngFor", "ngForOf"], [1, "practice"], [1, "code"], ["type", "text", "id", "startvalue", 3, "ngModel", "ngModelChange"], ["class", "solution", 4, "ngIf"], [1, "array-element"], [1, "solution"], ["class", "checkRes incorrect", 4, "ngIf"], ["class", "checkRes correct", 4, "ngIf"], [1, "checkRes", "incorrect"], [1, "checkRes", "correct"]],
  template: function MissingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Find the Missing Element in an Array");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Given an array containing positive integers from 1 to n (inclusive) with one number missing, your goal is to find and return the missing positive integer from the array. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MissingComponent_div_9_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div")(12, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Code to Complete:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MissingComponent_Template_input_ngModelChange_22_listener($event) {
        return ctx.input2 = $event;
      })("ngModelChange", function MissingComponent_Template_input_ngModelChange_22_listener() {
        return ctx.checkInput();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MissingComponent_div_26_Template, 6, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Array Length: ", ctx.arr.length, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arr);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\nfor (int i = 1; i < max(array); i++) ", "{", "\n    if (array[i] != ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.input2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](") ", "{", "\n        return True;\n    ", "}", "\n", "}", "\nreturn False;\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: [".container[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto;\n    padding: 20px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n  }\n  \n  label[_ngcontent-%COMP%] {\n    font-weight: bold;\n\n  }\n  p[_ngcontent-%COMP%]{\n    font-family: \"Open Sans\";\n    font-weight: bold;\n  }\n  h2[_ngcontent-%COMP%]{\n    font-family: \"Open Sans\";\n    font-weight: bold;\n  }\n  \n  input[type=\"number\"][_ngcontent-%COMP%] {\n    width: 100px;\n    padding: 5px;\n    margin: 5px 0;\n  }\n  \n  #result[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #007bff;\n  }\n  \n  pre[_ngcontent-%COMP%] {\n    padding: 10px;\n    border-radius: 5px;\n    font-size: 14px;\n    overflow-x: auto;\n  }\n  \n.practice[_ngcontent-%COMP%] {\n  display: flex; \n  align-items:center; \n}\n\n\n.code[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    font-family: \"Open Sans\";\n}\n#startvalue[_ngcontent-%COMP%] {\n  border: 3px solid rgb(255, 191, 0);\n}\n\n\n.solution[_ngcontent-%COMP%] {\n    padding: 10px; \n    width: -moz-fit-content;\n    width: fit-content;\n    margin: auto;\n    height: -moz-fit-content;\n    height: fit-content;\n}\n\n\n.checkRes.correct[_ngcontent-%COMP%] {\n    border: 2px solid green; \n    background-color: green;\n    color: white;\n    text-align: center;\n    font-weight: bold;\n    font-size: 25px;\n    font-family: \"Open Sans\";\n    padding: 10px; \n}\n\n\n.checkRes.incorrect[_ngcontent-%COMP%] {\n    border: 2px solid red; \n    background-color: red;\n    color: white;\n    font-weight: bold;\n    text-align: center;\n    font-size: 25px;\n    font-family: \"Open Sans\";\n    padding: 10px; \n}\n\n\n.array-table[_ngcontent-%COMP%]{\n  text-align: center;\n  display: inline-block;\n  font-size: large;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\n\n.center[_ngcontent-%COMP%]{\n  left: 50%;\n  top: 30%;\n  padding: 2px;\n  display: block;\n}\n.array-display[_ngcontent-%COMP%]{\n  font-size: 3em;\n  font-weight: 200;\n  display: inline-flex;\n  margin: auto;\n  border-collapse: collapse;\n  width: -moz-fit-content;\n  width: fit-content;\n  \n}\n\n.array-element[_ngcontent-%COMP%]{\n  color: #ffb449;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: 3px;\n  display: inline-block;\n  background-color: rgb(255, 255, 255);\n  border: 5px solid #7cb896;\n  padding: 0.5ch;\n  font-family: 'Press Start 2P', cursive;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jc2MxMjEvbWlzc2luZy9taXNzaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVBQXFFOztBQUVyRTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7O0VBRW5CO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7QUFFRjtFQUNFLGFBQWEsRUFBRSw0Q0FBNEM7RUFDM0Qsa0JBQWtCLEVBQUUsMkJBQTJCO0FBQ2pEOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUEsK0JBQStCO0FBQy9CO0lBQ0ksYUFBYSxFQUFFLDRCQUE0QjtJQUMzQyx1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix3QkFBbUI7SUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBLDhCQUE4QjtBQUM5QjtJQUNJLHVCQUF1QixFQUFFLHVCQUF1QjtJQUNoRCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixhQUFhLEVBQUUsNEJBQTRCO0FBQy9DOztBQUVBLGdDQUFnQztBQUNoQztJQUNJLHFCQUFxQixFQUFFLHFCQUFxQjtJQUM1QyxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixhQUFhLEVBQUUsNEJBQTRCO0FBQy9DOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsc0NBQXNDO0FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIHlvdXIgQ1NTIHN0eWxlcyBoZXJlIHRvIGN1c3RvbWl6ZSB0aGUgY29tcG9uZW50J3MgYXBwZWFyYW5jZSAqL1xuXG4uY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgXG4gIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICB9XG4gIHB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgaDJ7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgfVxuICBcbiAgI3Jlc3VsdCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gIH1cbiAgXG4gIHByZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cbiAgXG4ucHJhY3RpY2Uge1xuICBkaXNwbGF5OiBmbGV4OyAvKiBVc2UgZmxleGJveCB0byBhbGlnbiBpdGVtcyBzaWRlIGJ5IHNpZGUgKi9cbiAgYWxpZ24taXRlbXM6Y2VudGVyOyAvKiBBbGlnbiBpdGVtcyBhdCB0aGUgdG9wICovXG59XG5cbi8qIFN0eWxlIGZvciB0aGUgY29kZSBkaXYgKi9cbi5jb2RlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG59XG4jc3RhcnR2YWx1ZSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNTUsIDE5MSwgMCk7XG59XG5cbi8qIFN0eWxlIGZvciB0aGUgc29sdXRpb24gZGl2ICovXG4uc29sdXRpb24ge1xuICAgIHBhZGRpbmc6IDEwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBzcGFjaW5nICovXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4vKiBTdHlsZSBmb3IgY29ycmVjdCBtZXNzYWdlICovXG4uY2hlY2tSZXMuY29ycmVjdCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47IC8qIEFkZCBhIGdyZWVuIGJvcmRlciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIHBhZGRpbmc6IDEwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBzcGFjaW5nICovXG59XG5cbi8qIFN0eWxlIGZvciBpbmNvcnJlY3QgbWVzc2FnZSAqL1xuLmNoZWNrUmVzLmluY29ycmVjdCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkOyAvKiBBZGQgYSByZWQgYm9yZGVyICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIHBhZGRpbmc6IDEwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBzcGFjaW5nICovXG59XG5cblxuLmFycmF5LXRhYmxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jZW50ZXJ7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAzMCU7XG4gIHBhZGRpbmc6IDJweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYXJyYXktZGlzcGxheXtcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG59XG5cbi5hcnJheS1lbGVtZW50e1xuICBjb2xvcjogI2ZmYjQ0OTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGJvcmRlcjogNXB4IHNvbGlkICM3Y2I4OTY7XG4gIHBhZGRpbmc6IDAuNWNoO1xuICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3505:
/*!***************************************************************************!*\
  !*** ./src/app/courses/csc121/selection-sort/selection-sort.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectionSortComponent": () => (/* binding */ SelectionSortComponent)
/* harmony export */ });
/* harmony import */ var _Users_tuanle_Documents_Python_CSCDePauwWebsite_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);

var _class;




const _c0 = function (a0, a1) {
  return {
    "margin-left.px": a0,
    "background-color": a1
  };
};
function SelectionSortComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", item_r2.value * 2, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, item_r2.x, item_r2.state === "inactive" ? "lightblue" : "red"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.value, " ");
  }
}
function SelectionSortComponent_div_16_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "You Make A Mistake!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SelectionSortComponent_div_16_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "You Are Correct!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SelectionSortComponent_div_16_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SelectionSortComponent_div_16_div_17_div_2_Template, 5, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SelectionSortComponent_div_16_div_17_div_4_Template, 5, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.checkres);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.checkres);
  }
}
function SelectionSortComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\nFilling in the missing places to complete the Selection Sort Algorithm\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectionSortComponent_div_16_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.input1 = $event);
    })("ngModelChange", function SelectionSortComponent_div_16_Template_input_ngModelChange_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.checkInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectionSortComponent_div_16_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.input2 = $event);
    })("ngModelChange", function SelectionSortComponent_div_16_Template_input_ngModelChange_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.checkInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SelectionSortComponent_div_16_div_17_Template, 6, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\n\nint n = arr.length;\n\nfor (int i = 0; i < n - 1; i++) ", "{", "\n    // Find the minimum element in the remaining unsorted array\n    int minIndex = i;\n    for (int j = i + 1; j < n; j++) ", "}", "\n        if (arr[j] < arr[");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.input1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("]) ", "{", "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.input2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" = j;\n        ", "{", "\n    ", "{", "\n\n    // Swap the found minimum element with the element at index i\n    int temp = arr[i];\n    arr[i] = arr[minIndex];\n    arr[minIndex] = temp;\n", "}", "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.input1 && ctx_r1.input2);
  }
}
class SelectionSortComponent {
  constructor() {
    this.items = [];
    this.width = 0.5;
    this.activeIndex = -1;
    this.input1 = "";
    this.input2 = "";
    this.checkres = false;
    this.clickpractice = false;
    this.stopSor = false;
  }
  ngOnInit() {
    this.generateArray();
  }
  generateArray() {
    this.items = [];
    for (let i = 0; i < 15; i++) {
      this.items.push({
        value: Math.floor(Math.random() * 100) + 1,
        color: 'lightblue',
        state: 'inactive',
        x: i * this.width
      });
    }
  }
  selectionSort() {
    var _this = this;
    return (0,_Users_tuanle_Documents_Python_CSCDePauwWebsite_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.stopSor = false;
      for (let i = 0; i < _this.items.length - 1; i++) {
        if (_this.stopSor === false) {
          let minIndex = i;
          for (let j = i + 1; j < _this.items.length; j++) {
            _this.items[j].state = 'active';
            yield new Promise(resolve => setTimeout(resolve, 500));
            if (_this.items[j].value < _this.items[minIndex].value) {
              minIndex = j;
            }
            _this.items[j].state = 'inactive';
          }
          if (minIndex !== i) {
            _this.items[i].state = 'active';
            _this.items[minIndex].state = 'active';
            yield new Promise(resolve => setTimeout(resolve, 500));
            const temp = _this.items[i];
            _this.items[i] = _this.items[minIndex];
            _this.items[minIndex] = temp;
            _this.items[i].state = 'inactive';
            _this.items[minIndex].state = 'inactive';
            // await new Promise(resolve => setTimeout(resolve, 200));
          }

          for (let k = 0; k < _this.items.length; k++) {
            if (k <= i) {
              _this.items[k].state = 'inactive';
            }
          }
        }
      }
    })();
  }
  stopSort() {
    this.stopSor = true;
  }
  checkInput() {
    if (this.input1 == "minIndex" && this.input2 == this.input1) {
      this.checkres = true;
    } else {
      this.checkres = false;
    }
  }
  practiceCode() {
    this.clickpractice = !this.clickpractice;
  }
}
_class = SelectionSortComponent;
_class.ɵfac = function SelectionSortComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-selection-sort"]],
  decls: 17,
  vars: 2,
  consts: [[1, "main-container"], [1, "bubble-sort-btn"], [1, "chapter-header"], [1, "sort-btn", 3, "click"], [1, "new-array-btn", 3, "click"], [1, "stop-array-btn", 3, "click"], [1, "container"], ["class", "element", 3, "height", "ngStyle", 4, "ngFor", "ngForOf"], ["class", "practice-code", 4, "ngIf"], [1, "element", 3, "ngStyle"], [1, "practice-code"], [1, "practice"], [1, "code"], ["type", "text", "id", "startvalue", 3, "ngModel", "ngModelChange"], ["class", "solution", 4, "ngIf"], [1, "solution"], ["class", "checkRes incorrect", 4, "ngIf"], ["class", "checkRes correct", 4, "ngIf"], [1, "checkRes", "incorrect"], [1, "checkRes", "correct"]],
  template: function SelectionSortComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Selection Sort Algorithm ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectionSortComponent_Template_button_click_4_listener() {
        return ctx.selectionSort();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Selection Sort");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectionSortComponent_Template_button_click_7_listener() {
        return ctx.generateArray();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Generate New Array");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectionSortComponent_Template_button_click_10_listener() {
        return ctx.stopSort();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Stop");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectionSortComponent_Template_button_click_12_listener() {
        return ctx.practiceCode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Practice Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SelectionSortComponent_div_15_Template, 2, 7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SelectionSortComponent_div_16_Template, 20, 9, "div", 8);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clickpractice);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
  styles: [".main-container[_ngcontent-%COMP%]{\n    display: inline-flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    background-color: #389ca5;\n  }\n  \n  .chapter-header[_ngcontent-%COMP%]{\n    font-family: \"Open Sans\";\n    color: rgb(255, 255, 255);\n    font-weight: bold;\n    font-size: 60px ;\n    align-items: center;\n    margin: auto;\n  }\n  \n  .container[_ngcontent-%COMP%] {\n    display: inline-flex;\n    flex-direction: row;\n    align-items: flex-end;\n    height: 300px;\n    width: 50%;\n    justify-items: center;\n    \n  }\n  \n  .element[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 50px;\n    margin-right: 2px;\n    font-family: 'Press Start 2P', cursive;\n  }\n  \n  \n  .bubble-sort-btn[_ngcontent-%COMP%]{\n    display: inline-block; \n    justify-content: center; \n    width: 50%;\n    margin-left: auto;\n  }\n  \n  .bubble-sort-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #d0b640;\n    color: white;\n    width: 12rem;\n    height: 2rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px gray;\n    border: none;\n    margin: 10px;\n    font-family: \"Open Sans\";\n  }\n  \n  .bubble-sort-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: orange;\n    color: white;\n    font-weight: bolder;\n    border: none;\n    font-family: \"Open Sans\";\n  }\n  \n  .bubble-sort-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n    color: #0066cc;\n    background-color: white;\n    font-weight: bolder;\n    border-radius: 10px;\n    \n    outline: none;\n    border: 2px solid #0066cc;\n    font-family: \"Open Sans\";\n  }\n\n\n\n  pre[_ngcontent-%COMP%] {\n    background-color: #389ca5;\n\n    border-radius: 5px;\n    font-size: 14px;\n    overflow-x: auto;\n  }\n\n  .practice[_ngcontent-%COMP%] {\n    display: flex; \n    align-items:center; \n    }\n    \n    \n    .code[_ngcontent-%COMP%] {\n      font-size: 20px;\n      font-weight: bold;\n      font-family: \"Open Sans\";\n      color: white;\n    }\n    #startvalue[_ngcontent-%COMP%] {\n    border: 3px solid rgb(255, 191, 0);\n    }\n    \n    \n    .solution[_ngcontent-%COMP%] {\n      padding: 10px; \n      width: -moz-fit-content; \n      width: fit-content;\n      margin: auto;\n      height: -moz-fit-content;\n      height: fit-content;\n    }\n    \n    \n    .checkRes.correct[_ngcontent-%COMP%] {\n      border: 2px solid green; \n      background-color: green;\n      color: white;\n      text-align: center;\n      font-weight: bold;\n      font-size: 25px;\n      font-family: \"Open Sans\";\n      padding: 10px; \n    }\n    \n    \n    .checkRes.incorrect[_ngcontent-%COMP%] {\n      border: 2px solid red; \n      background-color: red;\n      color: white;\n      font-weight: bold;\n      text-align: center;\n      font-size: 25px;\n      font-family: \"Open Sans\";\n      padding: 10px; \n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jc2MxMjEvc2VsZWN0aW9uLXNvcnQvc2VsZWN0aW9uLXNvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixVQUFVO0lBQ1YscUJBQXFCOztFQUV2Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHNDQUFzQztFQUN4Qzs7O0VBR0E7SUFDRSxxQkFBcUIsRUFBRSx1QkFBdUI7SUFDOUMsdUJBQXVCLEVBQUUsb0NBQW9DO0lBQzdELFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsd0JBQXdCO0VBQzFCOzs7O0VBSUE7SUFDRSx5QkFBeUI7O0lBRXpCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYSxFQUFFLDRDQUE0QztJQUMzRCxrQkFBa0IsRUFBRSwyQkFBMkI7SUFDL0M7O0lBRUEsMkJBQTJCO0lBQzNCO01BQ0UsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQix3QkFBd0I7TUFDeEIsWUFBWTtJQUNkO0lBQ0E7SUFDQSxrQ0FBa0M7SUFDbEM7O0lBRUEsK0JBQStCO0lBQy9CO01BQ0UsYUFBYTtNQUNiLHVCQUFrQjtNQUFsQixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHdCQUFtQjtNQUFuQixtQkFBbUI7SUFDckI7O0lBRUEsOEJBQThCO0lBQzlCO01BQ0UsdUJBQXVCLEVBQUUsdUJBQXVCO01BQ2hELHVCQUF1QjtNQUN2QixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2Ysd0JBQXdCO01BQ3hCLGFBQWEsRUFBRSw0QkFBNEI7SUFDN0M7O0lBRUEsZ0NBQWdDO0lBQ2hDO01BQ0UscUJBQXFCLEVBQUUscUJBQXFCO01BQzVDLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2Ysd0JBQXdCO01BQ3hCLGFBQWEsRUFBRSw0QkFBNEI7SUFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODljYTU7XG4gIH1cbiAgXG4gIC5jaGFwdGVyLWhlYWRlcntcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNjBweCA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gIH1cbiAgXG4gIC5lbGVtZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XG4gIH1cbiAgXG4gIFxuICAuYnViYmxlLXNvcnQtYnRue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogVXNlIGZsZXhib3ggbGF5b3V0ICovXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciB0aGUgYnV0dG9ucyBob3Jpem9udGFsbHkgKi9cbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG4gIFxuICAuYnViYmxlLXNvcnQtYnRuIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwYjY0MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGdyYXk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgfVxuICBcbiAgLmJ1YmJsZS1zb3J0LWJ0biBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIH1cbiAgXG4gIC5idWJibGUtc29ydC1idG4gYnV0dG9uOmFjdGl2ZSB7XG4gICAgY29sb3I6ICMwMDY2Y2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8qIGJvcmRlcjogbm9uZTsgKi9cbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDY2Y2M7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIH1cblxuXG5cbiAgcHJlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5Y2E1O1xuXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICB9XG5cbiAgLnByYWN0aWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBVc2UgZmxleGJveCB0byBhbGlnbiBpdGVtcyBzaWRlIGJ5IHNpZGUgKi9cbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7IC8qIEFsaWduIGl0ZW1zIGF0IHRoZSB0b3AgKi9cbiAgICB9XG4gICAgXG4gICAgLyogU3R5bGUgZm9yIHRoZSBjb2RlIGRpdiAqL1xuICAgIC5jb2RlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgICNzdGFydHZhbHVlIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjU1LCAxOTEsIDApO1xuICAgIH1cbiAgICBcbiAgICAvKiBTdHlsZSBmb3IgdGhlIHNvbHV0aW9uIGRpdiAqL1xuICAgIC5zb2x1dGlvbiB7XG4gICAgICBwYWRkaW5nOiAxMHB4OyBcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgfVxuICAgIFxuICAgIC8qIFN0eWxlIGZvciBjb3JyZWN0IG1lc3NhZ2UgKi9cbiAgICAuY2hlY2tSZXMuY29ycmVjdCB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjsgLyogQWRkIGEgZ3JlZW4gYm9yZGVyICovXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgICBwYWRkaW5nOiAxMHB4OyAvKiBBZGQgcGFkZGluZyBmb3Igc3BhY2luZyAqL1xuICAgIH1cbiAgICBcbiAgICAvKiBTdHlsZSBmb3IgaW5jb3JyZWN0IG1lc3NhZ2UgKi9cbiAgICAuY2hlY2tSZXMuaW5jb3JyZWN0IHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgLyogQWRkIGEgcmVkIGJvcmRlciAqL1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBzcGFjaW5nICovXG4gICAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('swap', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('inactive', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      backgroundColor: 'lightblue'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      backgroundColor: 'red'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('inactive => active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('2s')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active => inactive', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('1s'))])]
  }
});

/***/ }),

/***/ 8636:
/*!****************************************************!*\
  !*** ./src/app/courses/csc122/csc122.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Csc122Component": () => (/* binding */ Csc122Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _linked_list_linked_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list/linked-list.component */ 2747);
/* harmony import */ var _hashmap_hashmap_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hashmap/hashmap.component */ 4375);
var _class;





const _c0 = function (a0) {
  return {
    "background-color": a0
  };
};
function Csc122Component_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r8.currRow === i_r7 && ctx_r8.currCol === j_r10 && ctx_r8.onLoop === true ? "#F5F5DC" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r9, " ");
  }
}
function Csc122Component_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Csc122Component_div_7_div_1_Template, 3, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", row_r6);
  }
}
function Csc122Component_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Csc122Component_div_22_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Enter new values for the array separated by spaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Csc122Component_div_22_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.readInput = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br")(8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Csc122Component_div_22_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.submitNewArray());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Submit Array");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.readInput);
  }
}
function Csc122Component_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Csc122Component_div_23_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Enter the index of the element to be modified");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Csc122Component_div_23_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.needModify = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br")(8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Enter the new value (Exp. 3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Csc122Component_div_23_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.readInt = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br")(13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Csc122Component_div_23_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.submitModify());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Modify Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.needModify);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.readInt);
  }
}
function Csc122Component_div_24_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" The number is on ", ctx_r21.idxRow + 1, "th row and on ", ctx_r21.idxCol + 1, "th column ");
  }
}
function Csc122Component_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Csc122Component_div_24_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Enter a value to get the index of that value in the array");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Csc122Component_div_24_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.searchVal = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br")(8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Csc122Component_div_24_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.submitGetIndex());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Search For Index");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, Csc122Component_div_24_div_11_Template, 2, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.searchVal);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.onSubmitIndex);
  }
}
function Csc122Component_div_25_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" The number on ", ctx_r26.idxRow, " th row and on ", ctx_r26.idxCol, " th column is ", ctx_r26.array[ctx_r26.idxRow - 1][ctx_r26.idxCol - 1], " ");
  }
}
function Csc122Component_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Csc122Component_div_25_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Enter the row that the number is on");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Csc122Component_div_25_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.idxRow = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Enter the column that the number is on");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Csc122Component_div_25_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.idxCol = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br")(11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Csc122Component_div_25_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.submitValue());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Search For Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, Csc122Component_div_25_div_14_Template, 2, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r4.idxRow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r4.idxCol);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.onSubmitValue);
  }
}
function Csc122Component_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38)(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Csc122Component_div_31_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 39)(4, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Csc122Component_div_31_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r34.onStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Step");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 41)(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Current Row Of An Element: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 41)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Current Column Of An Element: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 42)(17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Current Element In The Array: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 43)(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Current Sum: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Csc122Component_div_31_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r35.restartLoop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Start Loop Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h2", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Indexing Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div")(30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " In an array, an index starts at 0 and counts up from there. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Say that you declare an array called arr with values 2, 4, 6, 8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Declaring that array looks like: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "arr[] = [2, 4, 6, 8] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "br")(39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " The value 2 is at index 0, the value 4 is at index 1, and so on. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "br")(42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Typically, programmers use the letter 'i' to show the index in a loop. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "br")(45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Example: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "for (int i=0, i < arr.length, i++)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "br")(51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "li")(53, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "int i=0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " initializes the variable i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "li")(58, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "i < arr.length");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " is the condition. Here the loop will run as long as the index is less than the length of the array. We use < instead of <= because the last index in the array will always be ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "one less than the ength of the array");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " since indexing starts at zero.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "li")(66, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "i++");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " increments the index after everything inside the loop has executed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "br")(70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " Finding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " retrieves the index.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " Finding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "arr[i]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " retrieves the value associate with that index.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " For example, using the array from above, if i = 2, arr[i] equals 6.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.currRow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.currCol);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.currentNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.currSum);
  }
}
class Csc122Component {
  constructor() {
    this.array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    this.arrayRows = this.array.length;
    this.arrayCols = this.array[0].length;
    this.onCreate = false;
    this.onModify = false;
    this.onValueKey = false;
    this.onSubmitIndex = false;
    this.onSubmitValue = false;
    this.onLoop = false;
    this.onKeyValue = false;
    this.onClose = true;
    this.readInput = "";
    this.readInt = 0;
    this.needModify = 0;
    this.searchVal = 0;
    this.idxRow = -1;
    this.idxCol = -1;
    this.currRow = 0;
    this.currCol = 0;
    this.currentNum = this.array[this.currRow][this.currCol];
    this.currSum = 0;
  }
  close() {
    this.onClose = true;
    this.onCreate = false;
    this.onModify = false;
    this.onKeyValue = false;
    this.onValueKey = false;
    this.onLoop = false;
  }
  createArray() {
    this.onClose = false;
    this.onCreate = true;
    const temp = JSON.parse(this.readInput.toString());
    return temp;
  }
  submitNewArray() {
    let temp = this.createArray();
    this.array = temp;
    this.arrayRows = this.array.length;
    this.arrayCols = this.array[0].length;
    this.onCreate = false;
    this.onClose = true;
  }
  modify() {
    this.onModify = true;
    this.onClose = false;
    let temp = parseFloat(this.needModify.toString());
    let value = parseFloat(this.readInt.toString());
    console.log(temp);
    let index = [[value, value]];
    for (let i = 0; i < this.arrayRows; i++) {
      for (let j = 0; j < this.arrayCols; j++) {
        if (this.array[i][j] == temp) {
          index.push([i, j]);
        }
      }
    }
    return index;
  }
  submitModify() {
    let temp = this.modify();
    for (let i = 1; i < temp.length; i++) {
      let index = temp[i];
      this.array[index[0]][index[1]] = temp[0][0];
    }
    this.onClose = true;
    this.onModify = false;
  }
  getIndex() {
    this.onKeyValue = true;
    this.onClose = false;
    for (let i = 0; i < this.arrayRows; i++) {
      for (let j = 0; j < this.arrayCols; j++) {
        if (this.array[i][j] == this.searchVal) {
          return [i, j];
        }
      }
    }
    return [-1, -1];
  }
  submitGetIndex() {
    let temp = this.getIndex();
    if (temp[0] == -1) {
      alert("Can not find the value!");
    }
    this.idxRow = temp[0];
    this.idxCol = temp[1];
    this.onSubmitIndex = true;
  }
  getValue() {
    this.onClose = false;
    this.onValueKey = true;
    this.idxCol = parseFloat(this.idxCol.toString());
    this.idxRow = parseFloat(this.idxRow.toString());
  }
  submitValue() {
    this.onSubmitValue = true;
  }
  RunLoopPanel() {
    this.onLoop = true;
    this.onClose = false;
    this.currRow == 0;
    this.currCol == 0;
    this.currentNum = this.array[this.currRow][this.currCol];
    this.currSum += this.currentNum;
  }
  onStep() {
    if (this.currCol >= this.arrayCols || this.currRow >= this.arrayRows) {
      return;
    }
    if (this.currCol < this.arrayCols - 1) {
      this.currCol += 1;
      this.currentNum = this.array[this.currRow][this.currCol];
      this.currSum += this.currentNum;
    } else {
      this.currRow += 1;
      this.currCol = 0;
      this.currentNum = this.array[this.currRow][this.currCol];
      this.currSum += this.currentNum;
    }
  }
  restartLoop() {
    this.currSum = 0;
    this.RunLoopPanel();
  }
}
_class = Csc122Component;
_class.ɵfac = function Csc122Component_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-csc122"]],
  decls: 36,
  vars: 8,
  consts: [[1, "chapter-header"], [1, "array-container"], [1, "array-size"], ["class", "array-row", 4, "ngFor", "ngForOf"], ["id", "array-table-buttons"], ["id", "array-popup-button", 3, "click"], ["id", "modify", 3, "click"], ["id", "access", 3, "click"], ["id", "array-popup", 4, "ngIf"], ["id", "modify-popup", 4, "ngIf"], ["id", "array-index", 4, "ngIf"], ["id", "array-value", 4, "ngIf"], [1, "runloop"], ["id", "loop-through"], ["id", "loop-through-button", 1, "center", 3, "click"], ["id", "index-info-popup-content", 4, "ngIf"], [1, "array-row"], ["class", "array-item", 4, "ngFor", "ngForOf"], [1, "array-item"], [3, "ngStyle"], ["id", "array-popup"], ["id", "array-popup-content"], [1, "close", 3, "click"], ["id", "input-new-array", "placeholder", "[[1,2],[3,4]]", 3, "ngModel", "ngModelChange"], ["type", "submit", "id", "submit-array", 3, "click"], ["id", "modify-popup"], ["id", "modify-popup-content"], ["id", "modify-index", "placeholder", "1", 3, "ngModel", "ngModelChange"], ["id", "modify-val", "placeholder", "2", 3, "ngModel", "ngModelChange"], ["type", "submit", "id", "submit-modify", 3, "click"], ["id", "array-index"], ["id", "array-index-content"], ["id", "input-new-array", "placeholder", "2", 3, "ngModel", "ngModelChange"], ["type", "submit", "id", "submit-index", 3, "click"], ["class", "display-output", 4, "ngIf"], [1, "display-output"], ["id", "array-value"], ["id", "array-value-content"], ["id", "index-info-popup-content"], ["id", "loop-content"], ["id", "next-button", 3, "click"], ["id", "index-info"], ["id", "curr-num-info"], ["id", "curr-sum-info"], ["id", "restart-loop", 3, "click"], [2, "text-align", "center"], ["id", "for-loop"]],
  template: function Csc122Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Two Dimensional Array\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " The Dimenstion of the 2D array is ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, Csc122Component_div_7_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Csc122Component_Template_button_click_9_listener() {
        return ctx.createArray();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Create New Array");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Csc122Component_Template_button_click_13_listener() {
        return ctx.modify();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Modify a Value");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Csc122Component_Template_button_click_16_listener() {
        return ctx.getIndex();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Get index by value");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Csc122Component_Template_button_click_19_listener() {
        return ctx.getValue();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Get a value by index");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, Csc122Component_div_22_Template, 11, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, Csc122Component_div_23_Template, 16, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, Csc122Component_div_24_Template, 12, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, Csc122Component_div_25_Template, 15, 3, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12)(27, "div", 13)(28, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Csc122Component_Template_button_click_28_listener() {
        return ctx.RunLoopPanel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "run Loop");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, Csc122Component_div_31_Template, 83, 4, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Linked List\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "app-linked-list")(35, "app-hashmap");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.arrayRows, " x ", ctx.arrayCols, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.array);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.onCreate === true && ctx.onClose === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.onModify === true && ctx.onClose === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.onKeyValue === true && ctx.onClose === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.onValueKey === true && ctx.onClose === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.onLoop === true && ctx.onClose === false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _linked_list_linked_list_component__WEBPACK_IMPORTED_MODULE_0__.LinkedListComponent, _hashmap_hashmap_component__WEBPACK_IMPORTED_MODULE_1__.HashmapComponent],
  styles: [".chapter-header[_ngcontent-%COMP%]{\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    color: coral;\n    font-weight: 600;\n  }\n  \n  .array-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 50%; \n    position: inline-block; \n    left: 50%;\n    transform: translate(85%, 0);  \n  }\n  .array-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n  }\n  \n  .array-size[_ngcontent-%COMP%]{\n    width: 35%;\n    text-align: center;\n  }\n  .array-item[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    background-color: rgb(255, 255, 255);\n    border: 2px solid rgb(24, 135, 33);\n    text-align: center;\n    font-family: 'Press Start 2P', cursive;\n    font-size: 0.3in;\n    color: coral;\n    line-height: 80px;\n  }\n  \n  .center[_ngcontent-%COMP%]{\n    position:relative; \n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, 0%);\n    padding: 2px;\n    display: block;\n  }\n  \n  #array-table-buttons[_ngcontent-%COMP%]{\n    display: flex; \n    justify-content: center; \n  }\n  \n  #array-table-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n      background-color: #d0b640;\n      color: white;\n      width: 12rem;\n      height: 2rem;\n      border-radius: 10px;\n      \n      border: none;\n      margin: 10px;\n      font-family: \"Open Sans\";\n    }\n  \n    #array-table-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n      background-color: orange;\n    }\n  \n    #array-table-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n      color: #0066cc;\n      background-color: white;\n      font-weight: bolder;\n      border-radius: 10px;\n      \n      margin: 2px;\n      outline: none;\n      border: 2px solid #0066cc;\n      font-family: \"Open Sans\";\n    }\n  \n    #array-popup[_ngcontent-%COMP%] {\n      position: fixed;\n      z-index: 1;\n      padding-top: 100px;\n      width: 100%;\n      left: 0;\n      top: 0;\n      height: 100%;\n      overflow: auto;\n      color: black;\n      background-color: rgb(0, 0, 0);\n      \n      background-color: rgba(0, 0, 0, 0.4);\n      \n    }\n      \n    #array-popup-content[_ngcontent-%COMP%] {\n      background-color: #fefefe;\n      margin: auto;\n      padding: 20px;\n      border: 1px solid #888;\n      width: 60%;\n    }\n  \n    #modify-popup[_ngcontent-%COMP%] {\n      position: fixed;\n      z-index: 1;\n      padding-top: 100px;\n      width: 100%;\n      left: 0;\n      color: black;\n      top: 0;\n      height: 100%;\n      overflow: auto;\n      background-color: rgb(0, 0, 0);\n      \n      background-color: rgba(0, 0, 0, 0.4);\n      \n    }\n    .array-size[_ngcontent-%COMP%]{\n      color: coral;\n      font-size: 15px;\n      font-weight: 600;\n    }\n    #modify-popup-content[_ngcontent-%COMP%] {\n      background-color: #fefefe;\n      margin: auto;\n      padding: 20px;\n      border: 1px solid #888;\n      width: 60%;\n    }\n  \n  \n    #array-index[_ngcontent-%COMP%] {\n      position: fixed;\n      z-index: 1;\n      padding-top: 100px;\n      width: 100%;\n      left: 0;\n      color: black;\n      top: 0;\n      height: 100%;\n      overflow: auto;\n      background-color: rgb(0, 0, 0);\n      \n      background-color: rgba(0, 0, 0, 0.4);\n      \n    }\n      \n    #array-index-content[_ngcontent-%COMP%] {\n      background-color: #fefefe;\n      margin: auto;\n      padding: 20px;\n      border: 1px solid #888;\n      width: 60%;\n    }\n  \n  \n    #array-value[_ngcontent-%COMP%] {\n      position: fixed;\n      z-index: 1;\n      padding-top: 100px;\n      width: 100%;\n      left: 0;\n      top: 0;\n      height: 100%;\n      color: black;\n      overflow: auto;\n      background-color: rgb(0, 0, 0);\n      \n      background-color: rgba(0, 0, 0, 0.4);\n      \n    }\n      \n    #array-value-content[_ngcontent-%COMP%] {\n      background-color: #fefefe;\n      margin: auto;\n      padding: 20px;\n      border: 1px solid #888;\n      width: 60%;\n    }\n  \n  \n    \n    .runloop[_ngcontent-%COMP%]{\n      display: inline-block;\n      width: 100%;\n    }\n      \n    #loop-through[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n      background-color: #00b300;\n      color: white;\n      width: 12rem;\n      height: 2rem;\n      border-radius: 20px;\n      border: none;\n      margin: 10px;\n      font-size: large;\n      font-family: \"Open Sans\";\n    }\n    \n    #loop-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n      background-color: #00b300;\n      color: white;\n      width: 12rem;\n      height: 2rem;\n      border-radius: 20px;\n      border: none;\n      margin: 10px;\n      font-size: large;\n      font-family: \"Open Sans\";\n      width: 100%;\n    }\n      \n    #loop-through[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n      background-color: #008000;\n      color: white;\n      font-weight: bolder;\n      border: none;\n      margin: 2px;\n      font-family: \"Open Sans\";\n    }\n    \n    #loop-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n      background-color: #008000;\n      color: white;\n      font-weight: bolder;\n      border: none;\n      margin: 2px;\n      font-family: \"Open Sans\";\n    }\n      \n    #loop-through[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n      color: #008000;\n      background-color: white;\n      font-weight: bolder;\n      border-radius: 10px;\n      margin: 2px;\n      outline: none;\n      border: 2px solid #008000;\n      font-family: \"Open Sans\";\n    }\n    \n    #loop-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n      color: #008000;\n      background-color: white;\n      font-weight: bolder;\n      border-radius: 10px;\n      margin-left: 45%;\n      margin: 2px;\n      outline: none;\n      border: 2px solid #008000;\n      font-family: \"Open Sans\";\n    }\n    \n    \n    \n    #index-info[_ngcontent-%COMP%] {\n      width: auto;\n      margin-right: 1em;\n      float: left;\n    }\n    \n    #index-info-popup[_ngcontent-%COMP%] {\n      position: fixed;\n      z-index: 1;\n      padding-top: 50px;\n      width: 100%;\n      left: 0;\n      top: 0;\n      height: 100%;\n      overflow: auto;\n      background-color: rgb(0, 0, 0);\n      \n      background-color: rgba(0, 0, 0, 0.4);\n      \n    }\n      \n    #index-info-popup-content[_ngcontent-%COMP%] {\n    \n      background-color: #e5d386;\n      margin-left: 20%;\n      position: flex;\n      padding: 10px 18px 10px 18px;\n      border: 1px solid #888;\n      width: 60%;\n    }\n    \n        #index-info-popup-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n          margin: 1rem;\n        }\n      \n        #index-info-popup-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n          margin: 1rem;\n        }\n      \n        #for-loop[_ngcontent-%COMP%] {\n          text-align: center;\n        }\n      \n        .close[_ngcontent-%COMP%] {\n          color: #aaaaaa;\n          float: right;\n          font-size: 28px;\n          font-weight: bold;\n        }\n      \n        .close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n          color: #000;\n          text-decoration: none;\n          cursor: pointer;\n        }\n      \n      #loop-content[_ngcontent-%COMP%] {\n        display: block;\n        width: 100%;\n  \n      }\n      \n      #array-table[_ngcontent-%COMP%]   #index-row[_ngcontent-%COMP%] {\n        text-align: center;\n      }\n    \n      p[_ngcontent-%COMP%]{\n        font-size: 0.5cm;\n      }\n    \n      li[_ngcontent-%COMP%]{\n        font-size: 0.5cm;\n      }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jc2MxMjIvY3NjMTIyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxREFBcUQ7SUFDckQsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFVBQVUsRUFBRSxrQ0FBa0M7SUFDOUMsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsUUFBUTtJQUNSLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWEsRUFBRSx1QkFBdUI7SUFDdEMsdUJBQXVCLEVBQUUsb0NBQW9DO0VBQy9EOztFQUVBO01BQ0kseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixZQUFZO01BQ1osWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixrQ0FBa0M7TUFDbEMsWUFBWTtNQUNaLFlBQVk7TUFDWix3QkFBd0I7SUFDMUI7O0lBRUE7TUFDRSx3QkFBd0I7SUFDMUI7O0lBRUE7TUFDRSxjQUFjO01BQ2QsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxhQUFhO01BQ2IseUJBQXlCO01BQ3pCLHdCQUF3QjtJQUMxQjs7SUFFQTtNQUNFLGVBQWU7TUFDZixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxPQUFPO01BQ1AsTUFBTTtNQUNOLFlBQVk7TUFDWixjQUFjO01BQ2QsWUFBWTtNQUNaLDhCQUE4QjtNQUM5QixtQkFBbUI7TUFDbkIsb0NBQW9DO01BQ3BDLHFCQUFxQjtJQUN2Qjs7SUFFQTtNQUNFLHlCQUF5QjtNQUN6QixZQUFZO01BQ1osYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixVQUFVO0lBQ1o7O0lBRUE7TUFDRSxlQUFlO01BQ2YsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsT0FBTztNQUNQLFlBQVk7TUFDWixNQUFNO01BQ04sWUFBWTtNQUNaLGNBQWM7TUFDZCw4QkFBOEI7TUFDOUIsbUJBQW1CO01BQ25CLG9DQUFvQztNQUNwQyxxQkFBcUI7SUFDdkI7SUFDQTtNQUNFLFlBQVk7TUFDWixlQUFlO01BQ2YsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSx5QkFBeUI7TUFDekIsWUFBWTtNQUNaLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsVUFBVTtJQUNaOzs7SUFHQTtNQUNFLGVBQWU7TUFDZixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxPQUFPO01BQ1AsWUFBWTtNQUNaLE1BQU07TUFDTixZQUFZO01BQ1osY0FBYztNQUNkLDhCQUE4QjtNQUM5QixtQkFBbUI7TUFDbkIsb0NBQW9DO01BQ3BDLHFCQUFxQjtJQUN2Qjs7SUFFQTtNQUNFLHlCQUF5QjtNQUN6QixZQUFZO01BQ1osYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixVQUFVO0lBQ1o7OztJQUdBO01BQ0UsZUFBZTtNQUNmLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLE9BQU87TUFDUCxNQUFNO01BQ04sWUFBWTtNQUNaLFlBQVk7TUFDWixjQUFjO01BQ2QsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQixvQ0FBb0M7TUFDcEMscUJBQXFCO0lBQ3ZCOztJQUVBO01BQ0UseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFVBQVU7SUFDWjs7OztJQUlBO01BQ0UscUJBQXFCO01BQ3JCLFdBQVc7SUFDYjs7SUFFQTtNQUNFLHlCQUF5QjtNQUN6QixZQUFZO01BQ1osWUFBWTtNQUNaLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsd0JBQXdCO0lBQzFCOztJQUVBO01BQ0UseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixZQUFZO01BQ1osWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osWUFBWTtNQUNaLGdCQUFnQjtNQUNoQix3QkFBd0I7TUFDeEIsV0FBVztJQUNiOztJQUVBO01BQ0UseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLFdBQVc7TUFDWCx3QkFBd0I7SUFDMUI7O0lBRUE7TUFDRSx5QkFBeUI7TUFDekIsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osV0FBVztNQUNYLHdCQUF3QjtJQUMxQjs7SUFFQTtNQUNFLGNBQWM7TUFDZCx1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsYUFBYTtNQUNiLHlCQUF5QjtNQUN6Qix3QkFBd0I7SUFDMUI7O0lBRUE7TUFDRSxjQUFjO01BQ2QsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxhQUFhO01BQ2IseUJBQXlCO01BQ3pCLHdCQUF3QjtJQUMxQjs7OztJQUlBO01BQ0UsV0FBVztNQUNYLGlCQUFpQjtNQUNqQixXQUFXO0lBQ2I7O0lBRUE7TUFDRSxlQUFlO01BQ2YsVUFBVTtNQUNWLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsT0FBTztNQUNQLE1BQU07TUFDTixZQUFZO01BQ1osY0FBYztNQUNkLDhCQUE4QjtNQUM5QixtQkFBbUI7TUFDbkIsb0NBQW9DO01BQ3BDLHFCQUFxQjtJQUN2Qjs7SUFFQTs7TUFFRSx5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCw0QkFBNEI7TUFDNUIsc0JBQXNCO01BQ3RCLFVBQVU7SUFDWjs7UUFFSTtVQUNFLFlBQVk7UUFDZDs7UUFFQTtVQUNFLFlBQVk7UUFDZDs7UUFFQTtVQUNFLGtCQUFrQjtRQUNwQjs7UUFFQTtVQUNFLGNBQWM7VUFDZCxZQUFZO1VBQ1osZUFBZTtVQUNmLGlCQUFpQjtRQUNuQjs7UUFFQTs7VUFFRSxXQUFXO1VBQ1gscUJBQXFCO1VBQ3JCLGVBQWU7UUFDakI7O01BRUY7UUFDRSxjQUFjO1FBQ2QsV0FBVzs7TUFFYjs7TUFFQTtRQUNFLGtCQUFrQjtNQUNwQjs7TUFFQTtRQUNFLGdCQUFnQjtNQUNsQjs7TUFFQTtRQUNFLGdCQUFnQjtNQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFwdGVyLWhlYWRlcntcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBjb2xvcjogY29yYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICBcbiAgLmFycmF5LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA1MCU7IC8qIFNldCBhIGZpeGVkIHdpZHRoIGZvciB0aGUgZGl2ICovXG4gICAgcG9zaXRpb246IGlubGluZS1ibG9jazsgXG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDg1JSwgMCk7ICBcbiAgfVxuICAuYXJyYXktcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgXG4gIC5hcnJheS1zaXple1xuICAgIHdpZHRoOiAzNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5hcnJheS1pdGVtIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNCwgMTM1LCAzMyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMC4zaW47XG4gICAgY29sb3I6IGNvcmFsO1xuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICB9XG4gIFxuICAuY2VudGVye1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlOyBcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAzMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgI2FycmF5LXRhYmxlLWJ1dHRvbnN7XG4gICAgZGlzcGxheTogZmxleDsgLyogVXNlIGZsZXhib3ggbGF5b3V0ICovXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciB0aGUgYnV0dG9ucyBob3Jpem9udGFsbHkgKi9cbiAgfVxuICBcbiAgI2FycmF5LXRhYmxlLWJ1dHRvbnMgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMGI2NDA7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB3aWR0aDogMTJyZW07XG4gICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgLyogYm94LXNoYWRvdzogMnB4IDJweCAycHggZ3JheTsgKi9cbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIH1cbiAgXG4gICAgI2FycmF5LXRhYmxlLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICB9XG4gIFxuICAgICNhcnJheS10YWJsZS1idXR0b25zIGJ1dHRvbjphY3RpdmUge1xuICAgICAgY29sb3I6ICMwMDY2Y2M7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgLyogYm9yZGVyOiBub25lOyAqL1xuICAgICAgbWFyZ2luOiAycHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwNjZjYztcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIH1cbiAgXG4gICAgI2FycmF5LXBvcHVwIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAgIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gICAgfVxuICAgICAgXG4gICAgI2FycmF5LXBvcHVwLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG4gIFxuICAgICNtb2RpZnktcG9wdXAge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIHRvcDogMDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgICAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbiAgICB9XG4gICAgLmFycmF5LXNpemV7XG4gICAgICBjb2xvcjogY29yYWw7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAjbW9kaWZ5LXBvcHVwLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG4gIFxuICBcbiAgICAjYXJyYXktaW5kZXgge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIHRvcDogMDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgICAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbiAgICB9XG4gICAgICBcbiAgICAjYXJyYXktaW5kZXgtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgICB3aWR0aDogNjAlO1xuICAgIH1cbiAgXG4gIFxuICAgICNhcnJheS12YWx1ZSB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xuICAgIH1cbiAgICAgIFxuICAgICNhcnJheS12YWx1ZS1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuICBcbiAgXG4gICAgXG4gICAgLnJ1bmxvb3B7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgICBcbiAgICAjbG9vcC10aHJvdWdoIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMzAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2lkdGg6IDEycmVtO1xuICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICB9XG4gICAgXG4gICAgI2xvb3AtY29udGVudCBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjMwMDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAxMnJlbTtcbiAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgICBcbiAgICAjbG9vcC10aHJvdWdoIGJ1dHRvbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgfVxuICAgIFxuICAgICNsb29wLWNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDA7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgbWFyZ2luOiAycHg7XG4gICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICB9XG4gICAgICBcbiAgICAjbG9vcC10aHJvdWdoIGJ1dHRvbjphY3RpdmUge1xuICAgICAgY29sb3I6ICMwMDgwMDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgbWFyZ2luOiAycHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwODAwMDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIH1cbiAgICBcbiAgICAjbG9vcC1jb250ZW50IGJ1dHRvbjphY3RpdmUge1xuICAgICAgY29sb3I6ICMwMDgwMDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDgwMDA7XG4gICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgXG4gICAgI2luZGV4LWluZm8ge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICBcbiAgICAjaW5kZXgtaW5mby1wb3B1cCB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAgIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gICAgfVxuICAgICAgXG4gICAgI2luZGV4LWluZm8tcG9wdXAtY29udGVudCB7XG4gICAgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkMzg2O1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICAgIHBvc2l0aW9uOiBmbGV4O1xuICAgICAgcGFkZGluZzogMTBweCAxOHB4IDEwcHggMThweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgICB3aWR0aDogNjAlO1xuICAgIH1cbiAgICBcbiAgICAgICAgI2luZGV4LWluZm8tcG9wdXAtY29udGVudCBoMiB7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgI2luZGV4LWluZm8tcG9wdXAtY29udGVudCBwIHtcbiAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAjZm9yLWxvb3Age1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgY29sb3I6ICNhYWFhYWE7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC5jbG9zZTpob3ZlcixcbiAgICAgICAgLmNsb3NlOmZvY3VzIHtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICNsb29wLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gIFxuICAgICAgfVxuICAgICAgXG4gICAgICAjYXJyYXktdGFibGUgI2luZGV4LXJvdyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBcbiAgICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC41Y207XG4gICAgICB9XG4gICAgXG4gICAgICBsaXtcbiAgICAgICAgZm9udC1zaXplOiAwLjVjbTtcbiAgICAgIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4375:
/*!*************************************************************!*\
  !*** ./src/app/courses/csc122/hashmap/hashmap.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HashmapComponent": () => (/* binding */ HashmapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
var _class;



function HashmapComponent_div_5_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const value_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r5, " ");
  }
}
function HashmapComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 12)(5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HashmapComponent_div_5_div_7_Template, 3, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", key_r3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.myHashTable[key_r3]);
  }
}
function HashmapComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HashmapComponent_div_13_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.Onclose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose the key to add:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HashmapComponent_div_13_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.key = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter the value to be added:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HashmapComponent_div_13_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.value = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br")(12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HashmapComponent_div_13_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onSubmitAddvalue());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Submit Array");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.value);
  }
}
function HashmapComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HashmapComponent_div_14_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.Onclose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose the key to add:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HashmapComponent_div_14_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.newkey = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HashmapComponent_div_14_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.onSubmitAddKey());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Submit Array");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.newkey);
  }
}
class HashmapComponent {
  constructor() {
    this.myHashTable = {
      '1': [2, 3],
      '2': [1, 4],
      '4': [4, 5, 6, 7, 8],
      'Apple': ['Iphone', 'Macbook', 'Ipad']
    };
    this.width = 500;
    this.height = 300;
    this.boxWidth = 50;
    this.boxHeight = 50;
    this.margin = {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    };
    this.addValueBtn = false;
    this.addKeyBtn = false;
    this.close = true;
    this.key = 0;
    this.value = 0;
    this.newkey = '';
  }
  logKeys() {
    const keys = Object.keys(this.myHashTable);
    return keys;
  }
  Onclose() {
    this.addValueBtn = false;
    this.addKeyBtn = false;
    this.close = true;
  }
  addValue() {
    this.addValueBtn = true;
    this.close = false;
  }
  onSubmitAddvalue() {
    let hasKey = false;
    const keys = Object.keys(this.myHashTable);
    for (let i of keys) {
      if (this.key == i) {
        hasKey = true;
      }
    }
    if (hasKey == false) {
      alert("There is no key in the hashtable");
    }
    if (hasKey == true) {
      this.myHashTable[this.key].push(this.value);
    }
  }
  addKey() {
    this.addKeyBtn = true;
    this.close = false;
  }
  onSubmitAddKey() {
    let hasKey = false;
    const keys = Object.keys(this.myHashTable);
    for (let i of keys) {
      if (this.key == i) {
        hasKey = true;
      }
    }
    if (hasKey == false) {
      this.myHashTable[this.newkey] = [];
    }
    if (hasKey == true) {
      alert("Already has the key!");
    }
  }
}
_class = HashmapComponent;
_class.ɵfac = function HashmapComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-hashmap"]],
  decls: 15,
  vars: 3,
  consts: [[1, "chapter-header"], [1, "hashmap"], [1, "explain"], ["class", "hash-table-entry", 4, "ngFor", "ngForOf"], [1, "bubble-sort-btn"], [1, "sort-btn", 3, "click"], [1, "new-array-btn", 3, "click"], [1, "stop-array-btn"], ["id", "array-popup", 4, "ngIf"], [1, "hash-table-entry"], [1, "key-box"], [1, "node-content"], [1, "arrow-line"], [1, "arrow-right"], [1, "value-boxes"], ["class", "value-box", 4, "ngFor", "ngForOf"], [1, "value-box"], ["id", "array-popup"], ["id", "array-popup-content"], [1, "close", 3, "click"], ["id", "input-new-array", "placeholder", "1,2,3,4,5", 3, "ngModel", "ngModelChange"], ["type", "submit", "id", "submit-array", 3, "click"]],
  template: function HashmapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hash Table ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Key -> Value");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HashmapComponent_div_5_Template, 8, 2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HashmapComponent_Template_button_click_7_listener() {
        return ctx.addValue();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add Value to Key");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HashmapComponent_Template_button_click_9_listener() {
        return ctx.addKey();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add New Key");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Find a Value");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HashmapComponent_div_13_Template, 15, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HashmapComponent_div_14_Template, 10, 1, "div", 8);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logKeys());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.close === false && ctx.addValueBtn === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.close === false && ctx.addKeyBtn === true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: [".hash-table-entry[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    left: 30%;\n    position: relative;\n    justify-content: left;\n  }\n  \n  \n  \n  .arrow-line[_ngcontent-%COMP%] {\n    position: flex;\n    right: -35px;\n    top: 20px;\n    height: 10px;\n    width: 30px;\n    background-color: gray;\n  }\n  \n  .arrow-right[_ngcontent-%COMP%] {\n    position: flex;\n    right: -55px;\n    top: 0;\n    width: 0;\n    height: 0;\n    border-top: 25px solid transparent;\n    border-bottom: 25px solid transparent;\n    border-left: 20px solid gray;\n  }\n  \n  .key-box[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 60px;\n    background-color: rgb(255, 255, 255);\n    border: solid 5px rgb(33, 142, 33);\n    margin-right: 4 px;\n    margin-top: 5px;\n  }\n  \n  .key-box[_ngcontent-%COMP%], .value-box[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  \n  .value-boxes[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    \n  }\n  \n  .value-box[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 60px;\n    background-color: rgb(255, 255, 255);\n    border: solid 5px rgb(33, 142, 33);\n    margin-right: 3px;\n    margin-top: 10px;\n  }\n  \n  .node-content[_ngcontent-%COMP%]{\n    text-align: center;\n    font-weight: 1000;\n    font-size: 16px;\n    font-family: 'Press Start 2P', cursive;\n    color: orange;\n  }\n  \n  .hashmap[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .explain[_ngcontent-%COMP%]{\n    margin-left: 32%;\n    font-weight: 1000;\n    font-size: 16px;\n    font-family: 'Press Start 2P', cursive;\n    color: orange;\n    word-spacing: 30px;\n  }\n  \n  .chapter-header[_ngcontent-%COMP%]{\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    color: coral;\n    font-weight: 600;\n  }\n  \n  .bubble-sort-btn[_ngcontent-%COMP%]{\n    display: inline-block; \n    justify-content: center; \n    width: 50%;\n    margin-top: 3%;\n    margin-left: 30%;\n  }\n  \n  .bubble-sort-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #d0b640;\n    color: white;\n    width: 12rem;\n    height: 2rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px gray;\n    border: none;\n    margin: 10px;\n    font-family: \"Open Sans\";\n  }\n  \n  .bubble-sort-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: orange;\n    color: white;\n    font-weight: bolder;\n    border: none;\n    font-family: \"Open Sans\";\n  }\n  \n  .bubble-sort-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n    color: #0066cc;\n    background-color: white;\n    font-weight: bolder;\n    border-radius: 10px;\n    \n    outline: none;\n    border: 2px solid #0066cc;\n    font-family: \"Open Sans\";\n  }\n  \n  #array-popup[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 1;\n    padding-top: 100px;\n    color: #000;\n    width: 100%;\n    left: 0;\n    top: 0;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    \n    background-color: rgba(0, 0, 0, 0.4);\n    \n  }\n    \n  #array-popup-content[_ngcontent-%COMP%] {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 60%;\n  }\n  \n  .close[_ngcontent-%COMP%] {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jc2MxMjIvaGFzaG1hcC9oYXNobWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOzs7O0VBSUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7O0VBR0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHFEQUFxRDtJQUNyRCxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UscUJBQXFCLEVBQUUsdUJBQXVCO0lBQzlDLHVCQUF1QixFQUFFLG9DQUFvQztJQUM3RCxVQUFVO0lBQ1YsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixZQUFZO0lBQ1osd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLE9BQU87SUFDUCxNQUFNO0lBQ04sWUFBWTtJQUNaLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBOztFQUVBLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmIiwic291cmNlc0NvbnRlbnQiOlsiLmhhc2gtdGFibGUtZW50cnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsZWZ0OiAzMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgfVxuICBcbiAgXG4gIFxuICAuYXJyb3ctbGluZSB7XG4gICAgcG9zaXRpb246IGZsZXg7XG4gICAgcmlnaHQ6IC0zNXB4O1xuICAgIHRvcDogMjBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgfVxuICBcbiAgLmFycm93LXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogZmxleDtcbiAgICByaWdodDogLTU1cHg7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgZ3JheTtcbiAgfVxuICBcbiAgLmtleS1ib3gge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJvcmRlcjogc29saWQgNXB4IHJnYigzMywgMTQyLCAzMyk7XG4gICAgbWFyZ2luLXJpZ2h0OiA0IHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICBcbiAgLmtleS1ib3gsIC52YWx1ZS1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgXG4gIC52YWx1ZS1ib3hlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyIDtzICovXG4gIH1cbiAgXG4gIC52YWx1ZS1ib3gge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJvcmRlcjogc29saWQgNXB4IHJnYigzMywgMTQyLCAzMyk7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICBcbiAgLm5vZGUtY29udGVudHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gIH1cbiAgXG4gIC5oYXNobWFwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLmV4cGxhaW57XG4gICAgbWFyZ2luLWxlZnQ6IDMyJTtcbiAgICBmb250LXdlaWdodDogMTAwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICB3b3JkLXNwYWNpbmc6IDMwcHg7XG4gIH1cbiAgXG4gIC5jaGFwdGVyLWhlYWRlcntcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBjb2xvcjogY29yYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICBcbiAgLmJ1YmJsZS1zb3J0LWJ0bntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIFVzZSBmbGV4Ym94IGxheW91dCAqL1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGJ1dHRvbnMgaG9yaXpvbnRhbGx5ICovXG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG4gIFxuICAuYnViYmxlLXNvcnQtYnRuIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwYjY0MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGdyYXk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgfVxuICBcbiAgLmJ1YmJsZS1zb3J0LWJ0biBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIH1cbiAgXG4gIC5idWJibGUtc29ydC1idG4gYnV0dG9uOmFjdGl2ZSB7XG4gICAgY29sb3I6ICMwMDY2Y2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8qIGJvcmRlcjogbm9uZTsgKi9cbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDY2Y2M7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIH1cbiAgXG4gICNhcnJheS1wb3B1cCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xuICB9XG4gICAgXG4gICNhcnJheS1wb3B1cC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuICBcbiAgLmNsb3NlIHtcbiAgICBjb2xvcjogI2FhYWFhYTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuY2xvc2U6aG92ZXIsXG4gIC5jbG9zZTpmb2N1cyB7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgXG4gIFxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2747:
/*!*********************************************************************!*\
  !*** ./src/app/courses/csc122/linked-list/linked-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedListComponent": () => (/* binding */ LinkedListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
var _class;



const _c0 = function (a0) {
  return {
    "background-color": a0
  };
};
function LinkedListComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 15)(6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r5 === ctx_r0.currIndex ? "#F5F5DC" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4);
  }
}
function LinkedListComponent_div_46_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You add the node at index 0 which mean at to the top of the Linked List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LinkedListComponent_div_46_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\\\\ The current node is at the node before the position to insert a node ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LinkedListComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinkedListComponent_div_46_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Value of node to insert:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LinkedListComponent_div_46_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.nodeValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br")(8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Index of node to insert:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LinkedListComponent_div_46_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.nodeIndex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br")(13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 21)(15, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinkedListComponent_div_46_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.nextNode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Node *newNode = new Node(); ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\\\\ Create A new node to store the value of the Node we want to insert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0newNode->data = value; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0newNode->next = nullptr; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\\\\ The new node points to Null");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br")(31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \\\\ Check If the Linked List is empty or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\\\\We want to add the node to the beginning of the Linked List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0newNode->next = head;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0head = newNode;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0return;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, LinkedListComponent_div_46_div_49_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br")(51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Node *current = head;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0int count = 0; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\\\\ track the position we need to add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\\\\ The current node point to node ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " which has value of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Head");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\\\\ Count equals to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0current = current->next; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\\\\ The current node point to node ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " which has value of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0count++; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\\\\ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, LinkedListComponent_div_46_div_93_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0newNode->next = current->next;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0current->next = newNode;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.nodeValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.nodeIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" void insert(int value, int position) ", "{", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0if (head == nullptr || position == 0) ", "{", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "}", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.addHead);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0while (count < position - 1 && current->next != nullptr) ", "{", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Count =" + ctx_r1.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "}", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.position === ctx_r1.nodeIndex - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", "");
  }
}
function LinkedListComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinkedListComponent_div_47_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Enter a index of node you want to delete:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LinkedListComponent_div_47_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.nodeIndex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br")(8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21)(10, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinkedListComponent_div_47_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.nextDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0if (head == nullptr) return; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br")(18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Node *temp = head; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0head = temp->next; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0delete temp;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0return;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br")(31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0temp = temp->next;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0if (temp == nullptr || temp->next == nullptr) return; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Node *next = temp->next->next; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0delete temp->next; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0temp->next = next; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.nodeIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0void deleteNode(int position) ", "{", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0if (position == 0) ", "{", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "}", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0for (int i = 0; temp != nullptr && i < position - 1; i++) ", "{", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "}", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "}", " ");
  }
}
function LinkedListComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21)(4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br")(7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Start Loop Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Indexing Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div")(13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " In an array, an index starts at 0 and counts up from there. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Say that you declare an array called arr with values 2, 4, 6, 8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Declaring that array looks like: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "arr[] = [2, 4, 6, 8] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br")(22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " The value 2 is at index 0, the value 4 is at index 1, and so on. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br")(25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Typically, programmers use the letter 'i' to show the index in a loop. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br")(28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Example: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "for (int i=0, i < arr.length, i++)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br")(34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li")(36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "int i=0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " initializes the variable i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li")(41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "i < arr.length");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " is the condition. Here the loop will run as long as the index is less than the length of the array. We use < instead of <= because the last index in the array will always be ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "one less than the ength of the array");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " since indexing starts at zero.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li")(49, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "i++");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " increments the index after everything inside the loop has executed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br")(53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Finding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " retrieves the index.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Finding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "arr[i]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " retrieves the value associate with that index.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " For example, using the array from above, if i = 2, arr[i] equals 6.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class LinkedListComponent {
  constructor() {
    this.items = ["Head", 11, 12, 13, 14];
    this.onClose = true;
    this.onAdd = false;
    this.onInsert = false;
    this.onDelete = false;
    this.onLoop = false;
    this.selectedNodeIndex = 0;
    this.currValue = -1;
    this.currIndex = -1;
    this.nodeValue = -1;
    this.nodeIndex = -1;
    this.position = 0;
    this.color = 'white';
    this.addHead = false;
    this.doneStop = false;
  }
  ngOnInit() {
    this.nodeValue = -1;
    this.nodeIndex = -1;
  }
  close() {
    this.onClose = true;
    this.onAdd = false;
    this.onInsert = false;
    this.onDelete = false;
    this.onLoop = false;
    this.nodeIndex = -1;
    this.currValue = -1;
    this.nodeValue = -1;
    this.doneStop = false;
    this.currIndex = -1;
  }
  insertNode() {
    this.onClose = false;
    this.onInsert = true;
    this.currIndex = 0;
    this.currValue = this.items[this.nodeIndex];
  }
  nextNode() {
    if (this.nodeIndex == 0 && this.doneStop == false) {
      this.addHead = true;
      this.items.splice(this.nodeIndex + 1, 0, this.nodeValue);
      this.doneStop = true;
    }
    if (this.position == this.nodeIndex - 1 && this.doneStop == false) {
      this.items.splice(this.nodeIndex, 0, this.nodeValue);
      this.doneStop = true;
    } else if (this.position < this.nodeIndex - 1 && this.doneStop == false) {
      this.currIndex += 1;
      this.currValue = this.items[this.currIndex];
      this.position += 1;
    }
  }
  deleteNode() {
    this.onClose = false;
    this.onDelete = true;
    this.currIndex = 0;
    this.currValue = this.items[this.nodeIndex];
  }
  nextDelete() {}
}
_class = LinkedListComponent;
_class.ɵfac = function LinkedListComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-linked-list"]],
  decls: 54,
  vars: 4,
  consts: [[1, "linkedList-content"], [1, "container"], ["class", "node", 4, "ngFor", "ngForOf"], ["id", "array-table-buttons"], ["id", "array-popup-button", 3, "click"], ["id", "access", 3, "click"], ["id", "array-popup", 4, "ngIf"], ["id", "array-index", 4, "ngIf"], [1, "runloop"], ["id", "loop-through"], ["id", "loop-through-button", 1, "center"], ["id", "index-info-popup-content", 4, "ngIf"], [1, "node"], [1, "node-content"], [3, "ngStyle"], [1, "arrow-line"], [1, "arrow-right"], ["id", "array-popup"], ["id", "array-popup-content"], [1, "close", 3, "click"], ["id", "input-new-array", "placeholder", "0", 3, "ngModel", "ngModelChange"], ["id", "loop-content"], ["id", "next-button", 3, "click"], [1, "insert-content"], [2, "color", "red", "font-weight", "600", "display", "inline"], ["style", "color: red; font-weight: 600;display: inline;", 4, "ngIf"], ["id", "array-index"], ["id", "array-index-content"], ["id", "input-new-array", "placeholder", "2", 3, "ngModel", "ngModelChange"], [1, "delete-content"], ["id", "index-info-popup-content"], [1, "close"], ["id", "next-button"], ["id", "restart-loop"], [2, "text-align", "center"], ["id", "for-loop"]],
  template: function LinkedListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br")(2, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Searching for an element: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Start with the head of the list");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Move through each node and compare its data with the target");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "If found, return the node");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "If not found, return None");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br")(14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Inserting a node:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Create a new node with the desired data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "If inserting at the head, set the next of the new node to the current head and update the head to the new node");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "If inserting at a different position, find the node before the desired position and set the next of the new node to the next of the node before the desired position and set the next of the node before the desired position to the new node");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br")(24, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Deleting a node:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "If deleting the head, update the head to the next node");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "If deleting a different node, find the node before the node to be deleted and set the next of the node before the node to be deleted to the next of the node to be deleted");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Free the node to be deleted");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br")(34, "br")(35, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, LinkedListComponent_div_37_Template, 7, 4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3)(39, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinkedListComponent_Template_button_click_39_listener() {
        return ctx.insertNode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Insert a node");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinkedListComponent_Template_button_click_43_listener() {
        return ctx.deleteNode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Delete a node");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, LinkedListComponent_div_46_Template, 101, 13, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, LinkedListComponent_div_47_Template, 48, 7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8)(49, "div", 9)(50, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "run Loop");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, LinkedListComponent_div_53_Template, 66, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onClose === false && ctx.onInsert === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onClose === false && ctx.onDelete === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onClose === false && ctx.onLoop === true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: [".container[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  \n  .node[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80px;\n    height: 60px;\n    background-color: rgb(255, 255, 255);\n    border: solid 5px rgb(33, 142, 33);\n    text-align: center;\n    margin-right: 50px;\n  }\n  \n  .arrow-line[_ngcontent-%COMP%] {\n    position: absolute;\n    right: -35px;\n    top: 20px;\n    height: 10px;\n    width: 30px;\n    background-color: gray;\n  }\n  \n  .arrow-right[_ngcontent-%COMP%] {\n    position: absolute;\n    right: -55px;\n    top: 0;\n    width: 0;\n    height: 0;\n    border-top: 25px solid transparent;\n    border-bottom: 25px solid transparent;\n    border-left: 20px solid gray;\n  }\n\n\n  .node-content[_ngcontent-%COMP%]{\n    text-align: center;\n    justify-content: center;\n    font-weight: 1000;\n    font-size: 16px;\n    font-family: 'Press Start 2P', cursive;\n    color: orange;\n  }\n\n\n  p[_ngcontent-%COMP%]{\n    font-weight: 500;\n  }\n\n\n\n  .center[_ngcontent-%COMP%]{\n    position:relative; \n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, 0%);\n    padding: 2px;\n    display: block;\n  }\n  \n  #array-table-buttons[_ngcontent-%COMP%]{\n    display: flex; \n    justify-content: center; \n  }\n  \n  #array-table-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n      background-color: #d0b640;\n      color: white;\n      width: 20%;\n      height: 2rem;\n      border-radius: 10px;\n      \n      border: none;\n      margin: 10px;\n      font-family: \"Open Sans\";\n    }\n  \n    #array-table-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n      background-color: orange;\n\n    }\n  \n    #array-table-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n      color: #0066cc;\n      background-color: white;\n      font-weight: bolder;\n      border-radius: 10px;\n\n      margin: 2px;\n      outline: none;\n      border: 2px solid #0066cc;\n      font-family: \"Open Sans\";\n    }\n  \n    #array-popup[_ngcontent-%COMP%] {\n      position: inline-block;\n      width: 100%;\n      height: 100%;\n      overflow: auto;\n    }\n      \n    #array-popup-content[_ngcontent-%COMP%] {\n      background-color: #e5d386;\n      margin: auto;\n      padding: 20px;\n      border: 1px solid #888;\n      width: 60%;\n    }\n    .array-size[_ngcontent-%COMP%]{\n      color: coral;\n      font-size: 15px;\n      font-weight: 600;\n    }\n\n  \n    #array-index[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 100%;\n      overflow: auto;\n    }\n      \n    #array-index-content[_ngcontent-%COMP%] {\n      background-color: #e5d386;\n      margin: auto;\n      padding: 20px;\n      border: 1px solid #888;\n      width: 60%;\n    }\n  \n  \n#array-value[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n}\n  \n#array-value-content[_ngcontent-%COMP%] {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 60%;\n}\n\n\n\n.runloop[_ngcontent-%COMP%]{\n  display: inline-block;\n  width: 100%;\n}\n  \n#loop-through[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #00b300;\n  color: white;\n  width: 12rem;\n  height: 2rem;\n  border-radius: 20px;\n  border: none;\n  margin: 10px;\n  font-size: large;\n  font-family: \"Open Sans\";\n}\n\n#loop-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #00b300;\n  color: white;\n  width: 12rem;\n  height: 2rem;\n  border-radius: 20px;\n  border: none;\n  margin: 10px;\n  font-size: large;\n  font-family: \"Open Sans\";\n  width: 100%;\n}\n  \n#loop-through[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #008000;\n  color: white;\n  font-weight: bolder;\n  border: none;\n  margin: 2px;\n  font-family: \"Open Sans\";\n}\n\n#loop-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #008000;\n  color: white;\n  font-weight: bolder;\n  border: none;\n  margin: 2px;\n  font-family: \"Open Sans\";\n}\n  \n#loop-through[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  color: #008000;\n  background-color: white;\n  font-weight: bolder;\n  border-radius: 10px;\n  margin: 2px;\n  outline: none;\n  border: 2px solid #008000;\n  font-family: \"Open Sans\";\n}\n\n#loop-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  color: #008000;\n  background-color: white;\n  font-weight: bolder;\n  border-radius: 10px;\n  margin-left: 45%;\n  margin: 2px;\n  outline: none;\n  border: 2px solid #008000;\n  font-family: \"Open Sans\";\n}\n\n\n\n#index-info[_ngcontent-%COMP%] {\n  width: auto;\n  margin-right: 1em;\n  float: left;\n}\n\n#index-info-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  padding-top: 50px;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n}\n  \n#index-info-popup-content[_ngcontent-%COMP%] {\n\n  background-color: #e5d386;\n  margin-left: 20%;\n  position: flex;\n  padding: 10px 18px 10px 18px;\n  border: 1px solid #888;\n  width: 60%;\n}\n\n  #index-info-popup-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 1rem;\n  }\n\n  #index-info-popup-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 1rem;\n  }\n\n  #for-loop[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .close[_ngcontent-%COMP%] {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n\n  .close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n#loop-content[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n\n}\n\n#array-table[_ngcontent-%COMP%]   #index-row[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nli[_ngcontent-%COMP%]{\n  font-size: 0.5cm;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jc2MxMjIvbGlua2VkLWxpc3QvbGlua2VkLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxrQ0FBa0M7SUFDbEMscUNBQXFDO0lBQ3JDLDRCQUE0QjtFQUM5Qjs7O0VBR0E7SUFDRSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLGFBQWE7RUFDZjs7O0VBR0E7SUFDRSxnQkFBZ0I7RUFDbEI7Ozs7RUFJQTtJQUNFLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsUUFBUTtJQUNSLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWEsRUFBRSx1QkFBdUI7SUFDdEMsdUJBQXVCLEVBQUUsb0NBQW9DO0VBQy9EOztFQUVBO01BQ0kseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixVQUFVO01BQ1YsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixrQ0FBa0M7TUFDbEMsWUFBWTtNQUNaLFlBQVk7TUFDWix3QkFBd0I7SUFDMUI7O0lBRUE7TUFDRSx3QkFBd0I7O0lBRTFCOztJQUVBO01BQ0UsY0FBYztNQUNkLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsbUJBQW1COztNQUVuQixXQUFXO01BQ1gsYUFBYTtNQUNiLHlCQUF5QjtNQUN6Qix3QkFBd0I7SUFDMUI7O0lBRUE7TUFDRSxzQkFBc0I7TUFDdEIsV0FBVztNQUNYLFlBQVk7TUFDWixjQUFjO0lBQ2hCOztJQUVBO01BQ0UseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFVBQVU7SUFDWjtJQUNBO01BQ0UsWUFBWTtNQUNaLGVBQWU7TUFDZixnQkFBZ0I7SUFDbEI7OztJQUdBO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixjQUFjO0lBQ2hCOztJQUVBO01BQ0UseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFVBQVU7SUFDWjs7O0FBR0o7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7Ozs7QUFJQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7Ozs7QUFJQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVztFQUNYLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWTtFQUNaLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0VBRUU7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztBQUVGO0VBQ0UsY0FBYztFQUNkLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICAubm9kZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgYm9yZGVyOiBzb2xpZCA1cHggcmdiKDMzLCAxNDIsIDMzKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB9XG4gIFxuICAuYXJyb3ctbGluZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMzVweDtcbiAgICB0b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIH1cbiAgXG4gIC5hcnJvdy1yaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtNTVweDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCBncmF5O1xuICB9XG5cblxuICAubm9kZS1jb250ZW50e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogMTAwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgfVxuXG5cbiAgcHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cblxuXG4gIC5jZW50ZXJ7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7IFxuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDMwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAjYXJyYXktdGFibGUtYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBVc2UgZmxleGJveCBsYXlvdXQgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBidXR0b25zIGhvcml6b250YWxseSAqL1xuICB9XG4gIFxuICAjYXJyYXktdGFibGUtYnV0dG9ucyBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QwYjY0MDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgLyogYm94LXNoYWRvdzogMnB4IDJweCAycHggZ3JheTsgKi9cbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIH1cbiAgXG4gICAgI2FycmF5LXRhYmxlLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcblxuICAgIH1cbiAgXG4gICAgI2FycmF5LXRhYmxlLWJ1dHRvbnMgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICBjb2xvcjogIzAwNjZjYztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDY2Y2M7XG4gICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICB9XG4gIFxuICAgICNhcnJheS1wb3B1cCB7XG4gICAgICBwb3NpdGlvbjogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG4gICAgICBcbiAgICAjYXJyYXktcG9wdXAtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkMzg2O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgICB3aWR0aDogNjAlO1xuICAgIH1cbiAgICAuYXJyYXktc2l6ZXtcbiAgICAgIGNvbG9yOiBjb3JhbDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gIFxuICAgICNhcnJheS1pbmRleCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbiAgICAgIFxuICAgICNhcnJheS1pbmRleC1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWQzODY7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuICBcbiAgXG4jYXJyYXktdmFsdWUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn1cbiAgXG4jYXJyYXktdmFsdWUtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgd2lkdGg6IDYwJTtcbn1cblxuXG5cbi5ydW5sb29we1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuICBcbiNsb29wLXRocm91Z2ggYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjMwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xufVxuXG4jbG9vcC1jb250ZW50IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIzMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgd2lkdGg6IDEwMCU7XG59XG4gIFxuI2xvb3AtdGhyb3VnaCBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xufVxuXG4jbG9vcC1jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG59XG4gIFxuI2xvb3AtdGhyb3VnaCBidXR0b246YWN0aXZlIHtcbiAgY29sb3I6ICMwMDgwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwODAwMDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG59XG5cbiNsb29wLWNvbnRlbnQgYnV0dG9uOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDA4MDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgbWFyZ2luOiAycHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDgwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xufVxuXG5cblxuI2luZGV4LWluZm8ge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4jaW5kZXgtaW5mby1wb3B1cCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG59XG4gIFxuI2luZGV4LWluZm8tcG9wdXAtY29udGVudCB7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZDM4NjtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgcG9zaXRpb246IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHggMThweCAxMHB4IDE4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA2MCU7XG59XG5cbiAgI2luZGV4LWluZm8tcG9wdXAtY29udGVudCBoMiB7XG4gICAgbWFyZ2luOiAxcmVtO1xuICB9XG5cbiAgI2luZGV4LWluZm8tcG9wdXAtY29udGVudCBwIHtcbiAgICBtYXJnaW46IDFyZW07XG4gIH1cblxuICAjZm9yLWxvb3Age1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jbG9zZSB7XG4gICAgY29sb3I6ICNhYWFhYWE7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5jbG9zZTpob3ZlcixcbiAgLmNsb3NlOmZvY3VzIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiNsb29wLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG5cbn1cblxuI2FycmF5LXRhYmxlICNpbmRleC1yb3cge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmxpe1xuICBmb250LXNpemU6IDAuNWNtO1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8764:
/*!****************************************************!*\
  !*** ./src/app/courses/csc231/csc231.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Csc231Component": () => (/* binding */ Csc231Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;

class Csc231Component {}
_class = Csc231Component;
_class.ɵfac = function Csc231Component_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-csc231"]],
  decls: 2,
  vars: 0,
  template: function Csc231Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "csc231 works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7065:
/*!****************************************************!*\
  !*** ./src/app/courses/csc232/csc232.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Csc232Component": () => (/* binding */ Csc232Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;

class Csc232Component {}
_class = Csc232Component;
_class.ɵfac = function Csc232Component_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-csc232"]],
  decls: 2,
  vars: 0,
  template: function Csc232Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "csc232 works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1024:
/*!****************************************************!*\
  !*** ./src/app/courses/csc233/csc233.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Csc233Component": () => (/* binding */ Csc233Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;

class Csc233Component {}
_class = Csc233Component;
_class.ɵfac = function Csc233Component_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-csc233"]],
  decls: 2,
  vars: 0,
  template: function Csc233Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "csc233 works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1229:
/*!****************************************************!*\
  !*** ./src/app/courses/csc240/csc240.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Csc240Component": () => (/* binding */ Csc240Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;

class Csc240Component {}
_class = Csc240Component;
_class.ɵfac = function Csc240Component_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-csc240"]],
  decls: 2,
  vars: 0,
  template: function Csc240Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "csc240 works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6975:
/*!****************************************************!*\
  !*** ./src/app/courses/csc340/WindowRefService.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WindowRefService": () => (/* binding */ WindowRefService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;

function getWindow() {
  return window;
}
class WindowRefService {
  get nativeWindow() {
    return getWindow();
  }
}
_class = WindowRefService;
_class.ɵfac = function WindowRefService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 5738:
/*!*************************************************************************!*\
  !*** ./src/app/courses/csc340/caesar-cipher/caesar-cipher.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaesarCipherComponent": () => (/* binding */ CaesarCipherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
var _class;


class CaesarCipherComponent {
  constructor() {
    this.plainText = '';
    this.shiftValue = 0;
    this.cipherText = '';
  }
  encrypt() {
    this.cipherText = this.shift(this.plainText, this.shiftValue);
  }
  decrypt() {
    this.cipherText = this.shift(this.cipherText, -this.shiftValue);
  }
  shift(text, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpper = alphabet.toUpperCase();
    let result = '';
    for (const char of text) {
      const charLower = char.toLowerCase();
      if (alphabet.indexOf(charLower) === -1) {
        result += char;
        continue;
      }
      const shiftAlphabet = char === charLower ? alphabet : alphabetUpper;
      const shiftedIndex = (alphabet.indexOf(charLower) + shift + alphabet.length) % alphabet.length;
      result += shiftAlphabet[shiftedIndex];
    }
    return result;
  }
}
_class = CaesarCipherComponent;
_class.ɵfac = function CaesarCipherComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-caesar-cipher"]],
  decls: 24,
  vars: 3,
  consts: [[1, "container"], [1, "image"], ["src", "./assets/courses/cipher.png", "alt", "", "width", "700px", "height", "400px"], [1, "app-caesar-cipher"], [1, "input-group"], [3, "ngModel", "ngModelChange"], ["type", "number", 3, "ngModel", "ngModelChange"], [1, "button-group"], [3, "click"], [1, "output-group"]],
  template: function CaesarCipherComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Caesar Cipher");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter plain text:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CaesarCipherComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.plainText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enter shift value:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CaesarCipherComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.shiftValue = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7)(15, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaesarCipherComponent_Template_button_click_15_listener() {
        return ctx.encrypt();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Encrypt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaesarCipherComponent_Template_button_click_17_listener() {
        return ctx.decrypt();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Decrypt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9)(20, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cipher text:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.plainText);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.shiftValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cipherText);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
  styles: [".container[_ngcontent-%COMP%]{\n    display: flex;\n    margin-top: 1%;\n    background-color: rgb(55, 52, 52);\n  }\n  .image[_ngcontent-%COMP%]{\n    margin-left: 10%;\n    margin-right: 15%;\n  }\n  \n  \n  .app-caesar-cipher[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    \n    .input-group[_ngcontent-%COMP%], .button-group[_ngcontent-%COMP%], .output-group[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      margin: 10px;\n    }\n    \n    label[_ngcontent-%COMP%] {\n      width: 120px;\n      text-align: right;\n      margin-right: 10px;\n      color: white;\n    }\n    \n    input[type=\"number\"][_ngcontent-%COMP%] {\n      width: 60px;\n    }\n    \n    .button-group[_ngcontent-%COMP%] {\n      justify-content: center;\n    }\n    \n    button[_ngcontent-%COMP%] {\n      padding: 10px 20px;\n      border-radius: 4px;\n      border: none;\n      background-color: lightblue;\n      color: white;\n      font-weight: bold;\n      transition: all 0.3s ease;\n      margin-right: 0.5cm;\n      \n    }\n    \n    button[_ngcontent-%COMP%]:hover {\n      cursor: pointer;\n      background-color: blue;\n    }\n    \n    button[_ngcontent-%COMP%]:active {\n      transform: translateY(2px);\n      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jc2MzNDAvY2Flc2FyLWNpcGhlci9jYWVzYXItY2lwaGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7O0VBR0E7TUFDSSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLG1CQUFtQjtJQUNyQjs7SUFFQTs7O01BR0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxXQUFXO0lBQ2I7O0lBRUE7TUFDRSx1QkFBdUI7SUFDekI7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWiwyQkFBMkI7TUFDM0IsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQix5QkFBeUI7TUFDekIsbUJBQW1CO01BQ25CLDJCQUEyQjtJQUM3Qjs7SUFFQTtNQUNFLGVBQWU7TUFDZixzQkFBc0I7SUFDeEI7O0lBRUE7TUFDRSwwQkFBMEI7TUFDMUIsMkNBQTJDO0lBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgNTIsIDUyKTtcbiAgfVxuICAuaW1hZ2V7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgfVxuICBcbiAgXG4gIC5hcHAtY2Flc2FyLWNpcGhlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5pbnB1dC1ncm91cCxcbiAgICAuYnV0dG9uLWdyb3VwLFxuICAgIC5vdXRwdXQtZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIGxhYmVsIHtcbiAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cbiAgICBcbiAgICAuYnV0dG9uLWdyb3VwIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICBidXR0b24ge1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVjbTtcbiAgICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cbiAgICB9XG4gICAgXG4gICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgfVxuICAgIFxuICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4627:
/*!****************************************************!*\
  !*** ./src/app/courses/csc340/csc340.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Csc340Component": () => (/* binding */ Csc340Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _rsa_rsa_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rsa/rsa.component */ 6067);
/* harmony import */ var _caesar_cipher_caesar_cipher_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caesar-cipher/caesar-cipher.component */ 5738);
/* harmony import */ var _illustrated_illustrated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./illustrated/illustrated.component */ 1161);
var _class;





function Csc340Component_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-rsa");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class Csc340Component {
  constructor() {
    this.rsa = false;
  }
  openrsa() {
    this.rsa = !this.rsa;
  }
}
_class = Csc340Component;
_class.ɵfac = function Csc340Component_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-csc340"]],
  decls: 18,
  vars: 1,
  consts: [[1, "chapter-header"], [1, "gif-image"], ["src", "./assets/images/publickey.gif", "alt", "Public Key"], [1, "gif-image2"], ["src", "./assets/images/publickey3.gif", "alt", "Public Key", "width", "1000px", "height", "500px"], ["id", "array-table-buttons", 1, "decorTable"], ["id", "array-popup-button", 3, "click"], ["id", "push-popup-button"], ["id", "pop-popup-button"], ["id", "modify-popup-button"], ["class", "rsa", 4, "ngIf"], [1, "rsa"]],
  template: function Csc340Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-illustrated")(1, "app-caesar-cipher");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Public Key Encryption\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Csc340Component_Template_button_click_9_listener() {
        return ctx.openrsa();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Rivest-Shamir-Adleman (RSA)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Elliptic Curve Cryptography (ECC)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Digital Signature Algorithm (DSA)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Diffie-Hellman key exchange (DHE)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, Csc340Component_div_17_Template, 2, 0, "div", 10);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.rsa);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _rsa_rsa_component__WEBPACK_IMPORTED_MODULE_0__.RsaComponent, _caesar_cipher_caesar_cipher_component__WEBPACK_IMPORTED_MODULE_1__.CaesarCipherComponent, _illustrated_illustrated_component__WEBPACK_IMPORTED_MODULE_2__.IllustratedComponent],
  styles: [".linktoContent[_ngcontent-%COMP%]{\n    width:40%;\n    height:-moz-fit-content;\n    height:fit-content;\n    margin:auto;\n    background-color: orange;\n    border: solid 5px orange;\n    border-radius: 10px;\n    text-align: center;\n\n}\n.chapter-header[_ngcontent-%COMP%]{\n    font-family: \"Open Sans\";\n    color: rgb(255, 153, 0);\n    font-weight: bold;\n    font-size: 60px ;\n    align-items: center;\n    margin: auto;\n  }\n.gif-image[_ngcontent-%COMP%]{\n    position: flex;\n    margin-left: 35%;\n}\n\n.gif-image2[_ngcontent-%COMP%]{\n  position: flex;\n  margin-top: 50px;\n  margin-left: 20%;\n  margin-bottom: 50px;\n}\n.linktoContent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    text-decoration: none;\n    font-weight: bold;\n    padding: 10px 20px; \n    font-size: large;\n  }\n\n\n  #array-table-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: inline-block;\n    background-color: #e5ca2c;\n    color: white;\n    \n    border-radius: 20px;\n    \n    border: none;\n    margin: 10px 0;\n    padding: 5px;\n    width: 25%;\n    font-family: \"Open Sans\";\n    text-align: center;\n    font-size: large;\n  }\n    \n  #array-table-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: #ffbb00;\n    color: white;\n    font-weight: bolder;\n    border: none;\n    font-family: \"Open Sans\";\n  }\n    \n  #array-table-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n    color: #0066cc;\n    background-color: white;\n    font-weight: bolder;\n    position: flex;\n    outline: none;\n    border: 2px solid #0066cc;\n    font-family: \"Open Sans\";\n  }\n    \n  #array-popup[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 1;\n    padding-top: 100px;\n    width: 100%;\n    left: 0;\n    top: 0;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    \n    background-color: rgba(0, 0, 0, 0.4);\n    \n  }\n    \n  #array-popup-content[_ngcontent-%COMP%] {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 60%;\n  }\n    \n  #push-popup[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 1;\n    padding-top: 100px;\n    width: 100%;\n    left: 0;\n    top: 0;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    \n    background-color: rgba(0, 0, 0, 0.4);\n    \n  }\n    \n  #push-popup-content[_ngcontent-%COMP%] {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 60%;\n  }\n    \n  #pop-popup[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 1;\n    padding-top: 100px;\n    width: 100%;\n    left: 0;\n    top: 0;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    \n    background-color: rgba(0, 0, 0, 0.4);\n    \n  }\n    \n  #pop-popup-content[_ngcontent-%COMP%] {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 60%;\n  }\n    \n  #enqueue-popup[_ngcontent-%COMP%] {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    padding-top: 100px;\n    width: 100%;\n    left: 0;\n    top: 0;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    \n    background-color: rgba(0, 0, 0, 0.4);\n    \n  }\n    \n     \n      \n  #modify-popup[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 1;\n    padding-top: 100px;\n    width: 100%;\n    left: 0;\n    top: 0;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    \n    background-color: rgba(0, 0, 0, 0.4);\n    \n  }\n    \n  #modify-popup-content[_ngcontent-%COMP%] {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 60%;\n  }\n\n\n  .rsa[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50%;\n    margin-left: 25%;\n    background-color: #ffbb00;\n    border: 1px solid #888;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jc2MzNDAvY3NjMzQwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7QUFDRjtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFFLDBDQUEwQztJQUM5RCxnQkFBZ0I7RUFDbEI7OztFQUdBO0lBQ0UscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxPQUFPO0lBQ1AsTUFBTTtJQUNOLFlBQVk7SUFDWixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxPQUFPO0lBQ1AsTUFBTTtJQUNOLFlBQVk7SUFDWixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxPQUFPO0lBQ1AsTUFBTTtJQUNOLFlBQVk7SUFDWixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTztJQUNQLE1BQU07SUFDTixZQUFZO0lBQ1osY0FBYztJQUNkLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLHFCQUFxQjtFQUN2Qjs7O01BR0ksbUJBQW1CO0VBQ3ZCO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxNQUFNO0lBQ04sWUFBWTtJQUNaLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtFQUNaOzs7RUFHQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtFQUN4QiIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rdG9Db250ZW50e1xuICAgIHdpZHRoOjQwJTtcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIGJvcmRlcjogc29saWQgNXB4IG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuLmNoYXB0ZXItaGVhZGVye1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAxNTMsIDApO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNjBweCA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbi5naWYtaW1hZ2V7XG4gICAgcG9zaXRpb246IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcbn1cblxuLmdpZi1pbWFnZTJ7XG4gIHBvc2l0aW9uOiBmbGV4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmxpbmt0b0NvbnRlbnQgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7IC8qIGFkanVzdCB0aGUgcGFkZGluZyB0byB5b3VyIHByZWZlcmVuY2UgKi9cbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG5cblxuICAjYXJyYXktdGFibGUtYnV0dG9ucyBidXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVjYTJjO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvKiB3aWR0aDogMTJyZW07ICovXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAvKiBib3gtc2hhZG93OiAycHggMnB4IDJweCBncmF5OyAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuICAgIFxuICAjYXJyYXktdGFibGUtYnV0dG9ucyBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJiMDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICB9XG4gICAgXG4gICNhcnJheS10YWJsZS1idXR0b25zIGJ1dHRvbjphY3RpdmUge1xuICAgIGNvbG9yOiAjMDA2NmNjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcG9zaXRpb246IGZsZXg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA2NmNjO1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICB9XG4gICAgXG4gICNhcnJheS1wb3B1cCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xuICB9XG4gICAgXG4gICNhcnJheS1wb3B1cC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuICAgIFxuICAjcHVzaC1wb3B1cCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xuICB9XG4gICAgXG4gICNwdXNoLXBvcHVwLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogNjAlO1xuICB9XG4gICAgXG4gICNwb3AtcG9wdXAge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbiAgfVxuICAgIFxuICAjcG9wLXBvcHVwLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogNjAlO1xuICB9XG4gICAgXG4gICNlbnF1ZXVlLXBvcHVwIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbiAgfVxuICAgIFxuICAgICBcbiAgICAgIC8qIE1pbmggVGhpZSBDb2RlICovXG4gICNtb2RpZnktcG9wdXAge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbiAgfVxuICAgIFxuICAjbW9kaWZ5LXBvcHVwLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cblxuICAucnNhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJiMDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgfVxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2948:
/*!*****************************************************!*\
  !*** ./src/app/courses/csc340/ecc/ecc.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EccComponent": () => (/* binding */ EccComponent)
/* harmony export */ });
/* harmony import */ var _Users_tuanle_Documents_Python_CSCDePauwWebsite_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);

var _class;


// import { AngularFirestore } from '@angular/fire/firestore';
// import * as eccrypto from 'eccrypto';
class EccComponent {
  constructor() {
    this.plaintext = '';
    this.publicKey = '';
    this.encrypted = '';
  }
  // encryptedMessage: string = '';
  // decryptedMessage: string = '';
  // private privateKey: Uint8Array;
  // private publicKey: Uint8Array;
  // constructor() {
  //   // Generate an ECC key pair
  //   eccrypto.generatePrivate().then((privateKey) => {
  //     this.privateKey = privateKey;
  //     this.publicKey = eccrypto.getPublic(privateKey);
  //   });
  // }
  encrypt() {
    return (0,_Users_tuanle_Documents_Python_CSCDePauwWebsite_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // const publicKey = eccrypto.getPublic(Buffer.from(this.publicKey, 'hex'));
  // const message = Buffer.from(this.plaintext);
  // const encrypted = await eccrypto.encrypt(publicKey, message);
  // this.encrypted = encrypted.toString('hex');
  // // Convert the message to a buffer
  // const messageBuffer = Buffer.from(this.message);
  // // Encrypt the message with the recipient's public key
  // const encrypted = await eccrypto.encrypt(this.publicKey, messageBuffer);
  // // Convert the encrypted data to a string
  // this.encryptedMessage = JSON.stringify(encrypted);

  decrypt() {
    return (0,_Users_tuanle_Documents_Python_CSCDePauwWebsite_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // const privateKey = Buffer.from('private key goes here', 'hex');
  // const encrypted = Buffer.from(this.encrypted, 'hex');
  // const decrypted = await eccrypto.decrypt(privateKey, encrypted);
  // this.plaintext = decrypted.toString();
  // // Parse the encrypted data from a string
  // const encrypted = JSON.parse(this.encryptedMessage);
  // // Decrypt the message with the recipient's private key
  // const decryptedBuffer = await eccrypto.decrypt(this.privateKey, encrypted);
  // // Convert the decrypted buffer to a string
  // this.decryptedMessage = decryptedBuffer.toString();
}
_class = EccComponent;
_class.ɵfac = function EccComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-ecc"]],
  decls: 18,
  vars: 3,
  consts: [["src", "./assets/images/ECC.gif", "alt", ""], ["for", "plaintext"], ["id", "plaintext", 3, "ngModel", "ngModelChange"], ["for", "publicKey"], ["id", "publicKey", 3, "ngModel", "ngModelChange"], ["for", "encrypted"], ["id", "encrypted"], [3, "click"]],
  template: function EccComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div")(2, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Plaintext:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "textarea", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EccComponent_Template_textarea_ngModelChange_4_listener($event) {
        return ctx.plaintext = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div")(6, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Public Key:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "textarea", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EccComponent_Template_textarea_ngModelChange_8_listener($event) {
        return ctx.publicKey = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div")(10, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Encrypted:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "textarea", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EccComponent_Template_button_click_14_listener() {
        return ctx.encrypt();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Encrypt");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EccComponent_Template_button_click_16_listener() {
        return ctx.decrypt();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Decrypt");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.plaintext);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.publicKey);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.encrypted);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: [".container[_ngcontent-%COMP%]{\n    text-align: center;\n    margin: 30px 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jc2MzNDAvZWNjL2VjYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMzBweCAwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1161:
/*!*********************************************************************!*\
  !*** ./src/app/courses/csc340/illustrated/illustrated.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IllustratedComponent": () => (/* binding */ IllustratedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;

class IllustratedComponent {
  ngOnInit() {
    // Initialize ill object properties
    // window.onload = () => {
    Array.from(document.querySelectorAll('.record, .calculation')).forEach(el => {
      el.onclick = event => {
        if (el === event.target && typeof event.offsetY === 'number' && event.offsetY < 60) {
          this.ill.toggleRecord(el, event);
        } else {
          this.ill.selectRecord(el, event);
        }
      };
    });
    Array.from(document.querySelectorAll('.rec-label')).forEach(el => {
      el.onclick = event => {
        this.ill.toggleRecord(el.parentNode, event);
      };
    });
    Array.from(document.querySelectorAll('.record')).forEach(el => {
      this.ill.addToggleAnnotations(el);
    });
    Array.from(document.querySelectorAll('codesample')).forEach(el => {
      this.ill.addShowCode(el);
    });
    this.ill.injectLabels();
    window.onkeyup = e => {
      let els;
      if (e.keyCode === 27) {
        els = Array.from(document.querySelectorAll('.record.annotate'));
        if (els.length) {
          els.forEach(rec => rec.classList.remove('annotate'));
        } else {
          this.ill.unselectAllRecords();
        }
      }
    };
    if (typeof window !== 'undefined') {
      window.ill = this.ill;
    }
  }
  constructor() {
    this.ill = {};
    this.ill.elementIsVisible = el => {
      const rect = el.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    };
    this.ill.ensureElementInView = el => {
      if (!this.ill.elementIsVisible(el)) {
        el.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };
    this.ill.unselectAllRecords = () => {
      const records = Array.from(document.querySelectorAll('.illustrated .record.selected, .illustrated .calculation.selected'));
      for (const record of records) {
        record.classList.remove('selected');
      }
    };
    this.ill.toggleRecord = (element, event) => {
      const selected = element.classList.contains('selected');
      this.ill.unselectAllRecords();
      if (!selected) {
        element.classList.add('selected');
      } else {
        this.ill.closeAllCode();
      }
      event.stopPropagation();
      this.ill.ensureElementInView(element);
    };
    this.ill.selectRecord = (element, event) => {
      this.ill.unselectAllRecords();
      element.classList.add('selected');
      event.stopPropagation();
      this.ill.ensureElementInView(element);
    };
    this.ill.showCode = (element, event) => {
      if (element.parentNode) {
        element.parentNode.classList.add('show');
      }
      event.stopPropagation();
    };
    this.ill.closeAllCode = () => {
      const codeSamples = Array.from(document.querySelectorAll('codesample.show'));
      for (const codeSample of codeSamples) {
        codeSample.classList.remove('show');
      }
    };
    this.ill.toggleAnnotate = el => {
      el.classList.toggle('annotate');
    };
    this.ill.cancel = event => {
      if (event) {
        event.stopPropagation();
      }
    };
    this.ill.addShowCode = el => {
      const showCodeTmplElement = document.getElementById('showCodeTmpl');
      if (showCodeTmplElement) {
        const showCodeTmpl = showCodeTmplElement.innerHTML;
        el.innerHTML = showCodeTmpl + el.innerHTML;
      }
    };
    this.ill.addToggleAnnotations = record => {
      const expl = record.querySelector('.rec-explanation');
      if (expl && expl instanceof Element) {
        const annotateTmpl = document.getElementById('annotateTmpl')?.cloneNode(true);
        if (annotateTmpl) {
          expl.insertAdjacentElement('afterend', annotateTmpl);
        }
      }
    };
    this.ill.injectLabels = () => {
      const elements = Array.from(document.querySelectorAll('.string > .explanation, .decryption > .explanation'));
      for (const element of elements) {
        const expl = element;
        const parentNode = expl.parentNode;
        if (parentNode) {
          const label = parentNode.querySelector('.label');
          if (label) {
            const labelText = label.textContent;
            if (labelText !== null) {
              const h4 = document.createElement('h4');
              const labelTextNode = document.createTextNode(labelText);
              h4.appendChild(labelTextNode);
              expl.insertAdjacentElement('afterbegin', h4);
            }
          }
        }
      }
    };
  }
}
_class = IllustratedComponent;
_class.ɵfac = function IllustratedComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-illustrated"]],
  decls: 1638,
  vars: 6,
  consts: [[1, "illustrated"], [1, "container"], [1, "outerblock"], [1, "rec-outer"], [1, "record", "client"], [1, "rec-label"], ["src", "./assets/images/key1.png", "width", "135", "height", "250", 1, "illustration"], [1, "rec-explanation"], [1, "record-data"], [1, "string"], [1, "label"], [1, "bytes"], [1, "explanation"], ["href", "https://tools.ietf.org/html/draft-mathewson-no-gmtunixtime-00"], ["href", "https://en.wikipedia.org/wiki/CRIME"], ["href", "https://kryptera.se/Renegotiating%20TLS.pdf"], [1, "record", "server"], ["src", "./assets/images/key2.png", "width", "124", "height", "250", 1, "illustration"], ["src", "./assets/images//key3.png", "width", "130", "height", "250", 1, "illustration"], ["href", "certificate.html", "target", "_blank"], ["href", "files/server.crt", "download", "server.crt"], [1, "calculation", "server"], ["src", "./assets/images/key4.png", "width", "106", "height", "250", 1, "illustration"], ["href", "files/server-ephemeral-private.key", "download", "server-ephemeral-private.key"], [1, "ind2"], [1, "longboi"], ["href", "files/server-ephemeral-public.key", "download", "server-ephemeral-public.key"], [1, "codesample"], ["src", "./assets/images/key5.png", "width", "138", "height", "250", 1, "illustration"], ["href", "files/server.key", "download", "server.key"], [1, "calculation", "client"], ["src", "./assets/images/key6.png", "width", "105", "height", "250", 1, "illustration"], ["href", "files/client-ephemeral-private.key", "download", "client-ephemeral-private.key"], ["href", "files/client-ephemeral-public.key", "download", "client-ephemeral-public.key"], ["src", "./assets/images/key7.png", "width", "116", "height", "250", 1, "illustration"], ["src", "./assets/images/key8.png", "width", "97", "height", "250", 1, "illustration"], ["href", "files/curve25519-mult.c"], [1, "ind1"], [1, "string", "encrypted"], [1, "decryption"], [1, "string", "decrypted"], ["src", "./assets/images/key9.png", "width", "97", "height", "250", 1, "illustration"], ["id", "templates", 2, "display", "none"], ["id", "closeBtnTmpl"], ["onclick", "ill.unselectAllStrings()", 1, "close"], ["id", "showCodeTmpl"], ["onclick", "ill.showCode(this, event)", 1, "show-code"], ["id", "annotateTmpl", "onclick", "ill.toggleAnnotate(this.parentElement, event)", 1, "annotate-toggle"], ["href", "#print", "onclick", "this.ill.printMode()", 1, "print-mode"]],
  template: function IllustratedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The Illustrated TLS Connection");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Every byte of a TLS connection explained and reproduced.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "In this demonstration a client connects to a server, negotiates a TLS 1.2 session, sends \"ping\", receives \"pong\", and then terminates the session. Click below to begin exploring.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Client Hello");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " The session begins with the client saying \"Hello\". The client provides the following: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul")(17, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "protocol version ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "client random data (used later in the handshake) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "an optional session id to resume ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "a list of cipher suites ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "a list of compression methods ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "a list of extensions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 8)(30, "span", 9)(31, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Record Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " 16 03 01 00 a5 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " TLS sessions are broken into the sending and receiving of \"records\", which are blocks of data with a type, a protocol version, and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul")(38, "li")(39, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "16");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " - type is 0x16 (handshake record) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li")(43, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "03 01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " - protocol version is 3.1 (also known as TLS 1.0) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li")(47, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "00 a5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " - 0xA5 (165) bytes of handshake message follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Interestingly the version is 3.1 (TLS 1.0) instead of the expected \"3,3\" (TLS 1.2). Looking through the golang crypto/tls library we find the following comment: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "pre")(52, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 9)(55, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Handshake Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " 01 00 00 a1 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Each handshake message starts with a type and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul")(62, "li")(63, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " - handshake message type 0x01 (client hello) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li")(67, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "00 00 a1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " - 0xA1 (161) bytes of client hello follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 9)(71, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Client Version");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " 03 03 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " The protocol version of \"3,3\" (meaning TLS 1.2) is given. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br")(78, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " The unusual version number (\"3,3\" representing TLS 1.2) is due to TLS 1.0 being a minor revision of the SSL 3.0 protocol. Therefore TLS 1.0 is represented by \"3,1\", TLS 1.1 is \"3,2\", and so on. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 9)(81, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Client Random");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " 00 01 02 03 04 05 06 07 08 09 0a 0b 0c 0d 0e 0f 10 11 12 13 14 15 16 17 18 19 1a 1b 1c 1d 1e 1f ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " The client provides 32 bytes of random data. In this example we've made the random data a predictable string. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br")(88, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " The TLS 1.2 spec says that the first 4 bytes should be the current time in seconds-since-1970 but this is ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "now recommended against");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " as it enables fingerprinting of hosts and servers. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 9)(94, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Session ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " 00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " The client can provide the ID of a previous TLS session against this server which it is able to resume. For this to work both the server and client will have remembered key information from the previous connection in memory. Resuming a connection saves a lot of computation and network round-trip time so it is performed whenever possible. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ul")(101, "li")(102, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " - length of zero (no session id is provided) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 9)(106, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Cipher Suites");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " 00 20 cc a8 cc a9 c0 2f c0 30 c0 2b c0 2c c0 13 c0 09 c0 14 c0 0a 00 9c 00 9d 00 2f 00 35 c0 12 00 0a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " The client provides an ordered list of which cryptographic methods it will support for key exchange, encryption with that exchanged key, and message authentication. The list is in the order preferred by the client, with highest preference first. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ul")(113, "li")(114, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "00 20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " - 0x20 (32) bytes of cipher suite data ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li")(118, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "cc a8");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " - assigned value for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li")(124, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "cc a9");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " - assigned value for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li")(130, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "c0 2f");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " - assigned value for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li")(136, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "c0 30");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " - assigned value for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li")(142, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "c0 2b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " - assigned value for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li")(148, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "c0 2c");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " - assigned value for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li")(154, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "c0 13");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " - assigned value for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li")(160, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "c0 09");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " - assigned value for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li")(166, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "c0 14");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " - assigned value for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li")(172, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "c0 0a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " - assigned value for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li")(178, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "00 9c");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " - assigned value for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "TLS_RSA_WITH_AES_128_GCM_SHA256");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li")(184, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "00 9d");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " - assigned value for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "TLS_RSA_WITH_AES_256_GCM_SHA384");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li")(190, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "00 2f");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " - assigned value for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "TLS_RSA_WITH_AES_128_CBC_SHA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li")(196, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "00 35");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " - assigned value for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "TLS_RSA_WITH_AES_256_CBC_SHA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "li")(202, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "c0 12");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " - assigned value for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "li")(208, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "00 0a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " - assigned value for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "TLS_RSA_WITH_3DES_EDE_CBC_SHA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 9)(214, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Compression Methods");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " 01 00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " The client provides an ordered list of which compression methods it will support. This compression would be applied before encryption (as encrypted data is usually incompressible). ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "ul")(221, "li")(222, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " - 0x1 (1) bytes of compression methods follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li")(226, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " - assigned value for no compression ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " Compression has characteristics that can weaken the security of the encrypted data (see ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "CRIME");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "). so this feature has been removed from future TLS protocols. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span", 9)(234, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Extensions Length");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " 00 58 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " The client has provided a list of optional extensions which the server can use to take action or enable new features. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "ul")(241, "li")(242, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "00 58");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " - the extensions will take 0x58 (88) bytes of data ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " Each extension will start with two bytes that indicate which extension it is, followed by a two-byte content length field, followed by the contents of the extension. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span", 9)(247, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Extension - Server Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " 00 00 00 18 00 16 00 00 13 65 78 61 6d 70 6c 65 2e 75 6c 66 68 65 69 6d 2e 6e 65 74 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " The client has provided the name of the server it is contacting, also known as SNI (Server Name Indication). ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "br")(254, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " Without this extension a HTTPS server would not be able to provide service for multiple hostnames on a single IP address (virtual hosts) because it couldn't know which hostname's certificate to send until after the TLS session was negotiated and the HTTP request was made. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "ul")(257, "li")(258, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "00 00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " - assigned value for extension \"server name\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li")(262, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "00 18");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " - 0x18 (24) bytes of \"server name\" extension data follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li")(266, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "00 16");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " - 0x16 (22) bytes of first (and only) list entry follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "li")(270, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " - list entry is type 0x00 \"DNS hostname\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "li")(274, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "00 13");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " - 0x13 (19) bytes of hostname follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "li")(278, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "65 78 61 ... 6e 65 74");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " - \"example.ulfheim.net\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span", 9)(282, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Extension - Status Request");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " 00 05 00 05 01 00 00 00 00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " The client provides permission for the server to provide OCSP information in its response. OCSP can be used to check whether a certificate has been revoked. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "br")(289, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, " This form of the client sending an empty extension is necessary because it is a fatal error for the server to reply with an extension that the client did not provide first. Therefore the client sends an empty form of the extension, and the server replies with the extension populated with data. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "ul")(292, "li")(293, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "00 05");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " - assigned value for extension \"status request\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "li")(297, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "00 05");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, " - 0x5 (5) bytes of \"status request\" extension data follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "li")(301, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, " - assigned value for \"certificate status type: OCSP\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "li")(305, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "00 00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, " - 0x0 (0) bytes of responderID information ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "li")(309, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "00 00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " - 0x0 (0) bytes of request extension information ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "span", 9)(313, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Extension - Supported Groups");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, " 00 0a 00 0a 00 08 00 1d 00 17 00 18 00 19 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, " The client has indicated that it supports elliptic curve (EC) cryptography for 4 curves. This extension was originally named \"elliptic curves\" but has been renamed \"supported groups\" to be generic to other cryptography types. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "ul")(320, "li")(321, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "00 0a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, " - assigned value for extension \"supported groups\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "li")(325, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "00 0a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, " - 0xA (10) bytes of \"supported groups\" extension data follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "li")(329, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "00 08");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, " - 0x8 (8) bytes of data are in the curves list ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "li")(333, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "00 1d");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, " - assigned value for the curve \"x25519\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "li")(337, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "00 17");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, " - assigned value for the curve \"secp256r1\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "li")(341, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "00 18");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " - assigned value for the curve \"secp384r1\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "li")(345, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "00 19");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, " - assigned value for the curve \"secp521r1\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "span", 9)(349, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Extension - EC Point Formats");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, " 00 0b 00 02 01 00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, " During elliptic curve (EC) cryptography the client and server will exchange information on the points selected, in either compressed or uncompressed form. This extension indicates that the client can only parse uncompressed information from the server. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "br")(356, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, " In the next version of TLS the ability to negotiate points does not exist (instead a single point is pre-selected for each curve), so this extension would not be sent. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "ul")(359, "li")(360, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "00 0b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, " - assigned value for extension \"EC points format\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "li")(364, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "00 02");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, " - 0x2 (2) bytes of \"EC points format\" extension data follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "li")(368, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, " - 0x1 (1) bytes of data are in the supported formats list ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "li")(372, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, " - assigned value for uncompressed form ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "span", 9)(376, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Extension - Signature Algorithms");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, " 00 0d 00 12 00 10 04 01 04 03 05 01 05 03 06 01 06 03 02 01 02 03 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, " As TLS has developed it has become necessary to support stronger signature algorithms such as SHA-256 while still supporting earlier implementations that used MD5 and SHA1. This extension indicates which signature algorithms the client is capable of understanding and may influence the choice of certificate that the server sends to the client. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "ul")(383, "li")(384, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "00 0d");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, " - assigned value for extension \"Signature Algorithms\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "li")(388, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "00 12");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, " - 0x12 (18) bytes of \"Signature Algorithms\" extension data follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "li")(392, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "00 10");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, " - 0x10 (16) bytes of data are in the following list of algorithms ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "li")(396, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "04 01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, " - assigned value for RSA/PKCS1/SHA256 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "li")(400, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "04 03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, " - assigned value for ECDSA/SECP256r1/SHA256 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "li")(404, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "05 01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, " - assigned value for RSA/PKCS1/SHA386 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "li")(408, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "05 03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, " - assigned value for ECDSA/SECP384r1/SHA384 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "li")(412, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "06 01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, " - assigned value for RSA/PKCS1/SHA512 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "li")(416, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "06 03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, " - assigned value for ECDSA/SECP521r1/SHA512 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "li")(420, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "02 01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, " - assigned value for RSA/PKCS1/SHA1 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "li")(424, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "02 03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, " - assigned value for ECDSA/SHA1 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "span", 9)(428, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "Extension - Renegotiation Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, " ff 01 00 01 00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, " The presence of this extension prevents ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "a type of attack");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, " performed with TLS renegotiation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "br")(438, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, " The ability to renegotiate a connection has been removed from the next version of this protocol (TLS 1.3) so this extension will no longer be necessary in the future. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "ul")(441, "li")(442, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "ff 01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, " - assigned value for extension \"Renegotiation Info\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "li")(446, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "00 01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, " - 0x1 (1) bytes of \"Renegotiation Info\" extension data follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "li")(450, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, " - length of renegotiation data is zero, because this is a new connection ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "span", 9)(454, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "Extension - SCT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, " 00 12 00 00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, " The client provides permission for the server to return a signed certificate timestamp. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](460, "br")(461, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, " This form of the client sending an empty extension is necessary because it is a fatal error for the server to reply with an extension that the client did not provide first. Therefore the client sends an empty form of the extension, and the server replies with the extension populated with data, or changes behavior based on the client having sent the extension. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "ul")(464, "li")(465, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "00 12");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, " - assigned value for extension \"signed certificate timestamp\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "li")(469, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "00 00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, " - 0x0 (0) bytes of \"signed certificate timestamp\" extension data follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "div", 3)(473, "div", 16)(474, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "Server Hello");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](476, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, " The server says \"Hello\" back. The server provides the following: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "ul")(480, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "the selected protocol version ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "server random data (used later in the handshake) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "the session id ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "the selected cipher suite ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "the selected compression method ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "a list of extensions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "span", 8)(493, "span", 9)(494, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "Record Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, " 16 03 03 00 31 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, " TLS sessions are broken into the sending and receiving of \"records\", which are blocks of data with a type, a protocol version, and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "ul")(501, "li")(502, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "16");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, " - type is 0x16 (handshake record) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "li")(506, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "03 03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, " - protocol version is \"3,3\" (TLS 1.2) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "li")(510, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "00 31");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, " - 0x31 (49) bytes of handshake message follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "span", 9)(514, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "Handshake Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, " 02 00 00 2d ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, " Each handshake message starts with a type and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "ul")(521, "li")(522, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "02");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, " - handshake message type 0x02 (server hello) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "li")(526, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "00 00 2d");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, " - 0x2D (45) bytes of server hello data follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "span", 9)(530, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](531, "Server Version");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, " 03 03 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, " The protocol version of \"3,3\" (TLS 1.2) is given. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](536, "br")(537, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, " The unusual version number (\"3,3\" representing TLS 1.2) is due to TLS 1.0 being a minor revision of the SSL 3.0 protocol. Therefore TLS 1.0 is represented by \"3,1\", TLS 1.1 is \"3,2\", and so on. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "span", 9)(540, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "Server Random");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](543, " 70 71 72 73 74 75 76 77 78 79 7a 7b 7c 7d 7e 7f 80 81 82 83 84 85 86 87 88 89 8a 8b 8c 8d 8e 8f ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, " The server provides 32 bytes of random data. In this example we've made the random data a predictable string. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](546, "br")(547, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, " The TLS 1.2 spec says that the first 4 bytes should be the current time in seconds-since-1970 but this is ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "now recommended against");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, " as it enables fingerprinting of hosts and servers. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "span", 9)(553, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554, "Session ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, " 00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, " The server can provide an ID for this session which a client can provide on a later session negotiation in an attempt to re-use the key data and skip most of the TLS negotiation process. For this to work both the server and client will store key information from the previous connection in memory. Resuming a connection saves a lot of computation and network round-trip time so it is performed whenever possible. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "ul")(560, "li")(561, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, "00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, " - length of zero (no session id is used) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "span", 9)(565, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, "Cipher Suite");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, " c0 13 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, " The server has selected cipher suite 0xC013 (TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA) from the list of options given by the client. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "span", 9)(572, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, "Compression Method");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, " 00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, " The server has selected compression method 0x00 (\"Null\", which performs no compression) from the list of options given by the client. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "span", 9)(579, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](580, "Extensions Length");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, " 00 05 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](584, " The server has returned a list of extensions to the client. Because the server is forbidden from replying with an extension that the client did not send in its hello message, the server knows that the client will support all extensions listed. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "ul")(586, "li")(587, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "00 05");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, " - the extensions will take 0x5 (5) bytes of data ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "span", 9)(591, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](592, "Extension - Renegotiation Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](594, " ff 01 00 01 00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, " The presence of this extension prevents ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](598, "a type of attack");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599, " performed with TLS renegotiation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](600, "br")(601, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, " The ability to renegotiate a connection has been removed from the next version of this protocol (TLS 1.3) so this extension will no longer be necessary in the future. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "ul")(604, "li")(605, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, "ff 01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, " - assigned value for extension \"Renegotiation Info\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "li")(609, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](610, "00 01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, " - 0x1 (1) bytes of \"Renegotiation Info\" extension data follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "li")(613, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, "00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, " - length of renegotiation data is zero, because this is a new connection ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "div", 3)(617, "div", 16)(618, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, "Server Certificate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](620, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, " The server provides a certificate containing the following: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "ul")(624, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, "the hostname of the server ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](627, "the public key used by this server ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](629, "proof from a trusted third party that the owner of this hostname holds the private key for this public key ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631, "Explore the server certificate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "span", 8)(634, "span", 9)(635, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, "Record Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, " 16 03 03 03 2f ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, " TLS sessions are broken into the sending and receiving of \"records\", which are blocks of data with a type, a protocol version, and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "ul")(642, "li")(643, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](644, "16");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, " - type is 0x16 (handshake record) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "li")(647, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "03 03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](649, " - protocol version is \"3,3\" (TLS 1.2) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "li")(651, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, "03 2f");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, " - 0x32F (815) bytes of handshake message follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "span", 9)(655, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](656, "Handshake Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](658, " 0b 00 03 2b ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](660, " Each handshake message starts with a type and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "ul")(662, "li")(663, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](664, "0b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, " - handshake message type 0x0B (certificate) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "li")(667, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](668, "00 03 2b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669, " - 0x32B (811) of certificate message follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "span", 9)(671, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, "Certificates Length");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](674, " 00 03 28 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](676, " The certificate message begins with the length of all certificate data that will follow. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "ul")(678, "li")(679, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, "00 03 28");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, " - 0x328 (808) bytes of certificate list follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "span", 9)(683, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](684, "Certificate Length");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](686, " 00 03 25 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](688, " The length of the first (and only) certificate. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "ul")(690, "li")(691, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, "00 03 25");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](693, " - 0x325 (805) bytes of certificate follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "span", 9)(695, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](696, "Certificate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698, " 30 82 03 21 30 82 02 09 a0 03 02 01 02 02 08 15 5a 92 ad c2 04 8f 90 30 0d 06 09 2a 86 48 86 f7 0d 01 01 0b 05 00 30 22 31 0b 30 09 06 03 55 04 06 13 02 55 53 31 13 30 11 06 03 55 04 0a 13 0a 45 78 61 6d 70 6c 65 20 43 41 30 1e 17 0d 31 38 31 30 30 35 30 31 33 38 31 37 5a 17 0d 31 39 31 30 30 35 30 31 33 38 31 37 5a 30 2b 31 0b 30 09 06 03 55 04 06 13 02 55 53 31 1c 30 1a 06 03 55 04 03 13 13 65 78 61 6d 70 6c 65 2e 75 6c 66 68 65 69 6d 2e 6e 65 74 30 82 01 22 30 0d 06 09 2a 86 48 86 f7 0d 01 01 01 05 00 03 82 01 0f 00 30 82 01 0a 02 82 01 01 00 c4 80 36 06 ba e7 47 6b 08 94 04 ec a7 b6 91 04 3f f7 92 bc 19 ee fb 7d 74 d7 a8 0d 00 1e 7b 4b 3a 4a e6 0f e8 c0 71 fc 73 e7 02 4c 0d bc f4 bd d1 1d 39 6b ba 70 46 4a 13 e9 4a f8 3d f3 e1 09 59 54 7b c9 55 fb 41 2d a3 76 52 11 e1 f3 dc 77 6c aa 53 37 6e ca 3a ec be c3 aa b7 3b 31 d5 6c b6 52 9c 80 98 bc c9 e0 28 18 e2 0b f7 f8 a0 3a fd 17 04 50 9e ce 79 bd 9f 39 f1 ea 69 ec 47 97 2e 83 0f b5 ca 95 de 95 a1 e6 04 22 d5 ee be 52 79 54 a1 e7 bf 8a 86 f6 46 6d 0d 9f 16 95 1a 4c f7 a0 46 92 59 5c 13 52 f2 54 9e 5a fb 4e bf d7 7a 37 95 01 44 e4 c0 26 87 4c 65 3e 40 7d 7d 23 07 44 01 f4 84 ff d0 8f 7a 1f a0 52 10 d1 f4 f0 d5 ce 79 70 29 32 e2 ca be 70 1f df ad 6b 4b b7 11 01 f4 4b ad 66 6a 11 13 0f e2 ee 82 9e 4d 02 9d c9 1c dd 67 16 db b9 06 18 86 ed c1 ba 94 21 02 03 01 00 01 a3 52 30 50 30 0e 06 03 55 1d 0f 01 01 ff 04 04 03 02 05 a0 30 1d 06 03 55 1d 25 04 16 30 14 06 08 2b 06 01 05 05 07 03 02 06 08 2b 06 01 05 05 07 03 01 30 1f 06 03 55 1d 23 04 18 30 16 80 14 89 4f de 5b cc 69 e2 52 cf 3e a3 00 df b1 97 b8 1d e1 c1 46 30 0d 06 09 2a 86 48 86 f7 0d 01 01 0b 05 00 03 82 01 01 00 59 16 45 a6 9a 2e 37 79 e4 f6 dd 27 1a ba 1c 0b fd 6c d7 55 99 b5 e7 c3 6e 53 3e ff 36 59 08 43 24 c9 e7 a5 04 07 9d 39 e0 d4 29 87 ff e3 eb dd 09 c1 cf 1d 91 44 55 87 0b 57 1d d1 9b df 1d 24 f8 bb 9a 11 fe 80 fd 59 2b a0 39 8c de 11 e2 65 1e 61 8c e5 98 fa 96 e5 37 2e ef 3d 24 8a fd e1 74 63 eb bf ab b8 e4 d1 ab 50 2a 54 ec 00 64 e9 2f 78 19 66 0d 3f 27 cf 20 9e 66 7f ce 5a e2 e4 ac 99 c7 c9 38 18 f8 b2 51 07 22 df ed 97 f3 2e 3e 93 49 d4 c6 6c 9e a6 39 6d 74 44 62 a0 6b 42 c6 d5 ba 68 8e ac 3a 01 7b dd fc 8e 2c fc ad 27 cb 69 d3 cc dc a2 80 41 44 65 d3 ae 34 8c e0 f3 4a b2 fb 9c 61 83 71 31 2b 19 10 41 64 1c 23 7f 11 a5 d6 5c 84 4f 04 04 84 99 38 71 2b 95 9e d6 85 bc 5c 5d d6 45 ed 19 90 94 73 40 29 26 dc b4 0e 34 69 a1 59 41 e8 e2 cc a8 4b b6 08 46 36 a0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, " The certificate is in ASN.1 DER encoding. The details of this format and the content of this binary payload are documented ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "on another page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](703, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, "The certificate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](706, " can be converted to the binary data in this message at the command line: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "pre")(708, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](709, "$ openssl x509 -outform der < server.crt | hexdump\n    \n        0000000 30 82 03 21 30 82 02 09 a0 03 02 01 02 02 08 15\n        0000010 5a 92 ad c2 04 8f 90 30 0d 06 09 2a 86 48 86 f7\n        ... snip ...\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "div", 3)(711, "div", 21)(712, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, "Server Key Exchange Generation");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](714, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, " The server calculates a private/public keypair for key exchange. Key exchange is a mathematic technique by which two parties can agree on the same number without an eavesdropper being able to tell what that number is. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](717, "br")(718, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](719, " It will do this via an elliptical curve method, using the x25519 curve. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](720, "br")(721, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, " The private key is chosen by selecting an integer between 0 and 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "sup");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "256");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](725, "-1. It does this by generating 32 bytes (256 bits) of random data. The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, "private key");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](728, " selected is: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "pre", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, "909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeaf");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733, " The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](735, "public key");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, " is chosen by multiplying the point x=9 on the x25519 curve by the private key. The public key calculated is: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "pre", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](738, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](740, "9fd7ad6dcff4298dd3f96d5b1b2af910a0535b1488d7f8fabb349a982880b615");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, " The public key calculation can be confirmed with command line tools: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "pre")(743, "code", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](744, "### requires openssl 1.1.0 or higher\n        $ openssl pkey -noout -text < server-ephemeral-private.key\n    \n        X25519 Private-Key:\n        priv:\n            90:91:92:93:94:95:96:97:98:99:9a:9b:9c:9d:9e:\n            9f:a0:a1:a2:a3:a4:a5:a6:a7:a8:a9:aa:ab:ac:ad:\n            ae:af\n        pub:\n            9f:d7:ad:6d:cf:f4:29:8d:d3:f9:6d:5b:1b:2a:f9:\n            10:a0:53:5b:14:88:d7:f8:fa:bb:34:9a:98:28:80:\n            b6:15\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "div", 3)(746, "div", 16)(747, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, "Server Key Exchange");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](749, "img", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](751, " The server provides information for key exchange. As part of the key exchange process both the server and the client will have a keypair of public and private keys, and will send the other party their public key. The shared encryption key will then be generated using a combination of each party's private key and the other party's public key. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](752, "br")(753, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, " The parties have agreed on a cipher suite using ECDHE, meaning the keypairs will be based on a selected ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](756, "E");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, "lliptic ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](759, "C");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](760, "urve, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, "D");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](763, "iffie-");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](765, "H");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, "ellman will be used, and the keypairs are ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](768, "E");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](769, "phemeral (generated for each connection) rather than using the public/private key from the certificate. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "span", 8)(771, "span", 9)(772, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](773, "Record Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, " 16 03 03 01 2c ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](777, " TLS sessions are broken into the sending and receiving of \"records\", which are blocks of data with a type, a protocol version, and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "ul")(779, "li")(780, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](781, "16");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](782, " - type is 0x16 (handshake record) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "li")(784, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](785, "03 03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](786, " - protocol version is \"3,3\" (TLS 1.2) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "li")(788, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](789, "01 2c");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](790, " - 0x12C (300) bytes of handshake message follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "span", 9)(792, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](793, "Handshake Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, " 0c 00 01 28 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](797, " Each handshake message starts with a type and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "ul")(799, "li")(800, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](801, "0c");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](802, " - handshake message type 0x0c (server key exchange) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](803, "li")(804, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](805, "00 01 28");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](806, " - 0x128 (296) bytes of server key exchange follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "span", 9)(808, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](809, "Curve Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](811, " 03 00 1d ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, " The server chooses the elliptic curve that points will be calculated from. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "ul")(815, "li")(816, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, "03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](818, " - assigned value for \"named_curve\": the following bytes will identify a specific curve ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "li")(820, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](821, "00 1d");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](822, " - curve 0x001d (\"curve x25519\") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "span", 9)(824, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](825, "Public Key");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](827, " 20 9f d7 ad 6d cf f4 29 8d d3 f9 6d 5b 1b 2a f9 10 a0 53 5b 14 88 d7 f8 fa bb 34 9a 98 28 80 b6 15 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, " The server provides its public key from the step \"Server Key Exchange Generation\". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "ul")(831, "li")(832, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](833, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](834, " - length of 0x20 (32) bytes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "li")(836, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](837, "9f d7 ... b6 15");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](838, " - public key ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "span", 9)(840, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "Signature");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](843, " 04 01 01 00 04 02 b6 61 f7 c1 91 ee 59 be 45 37 66 39 bd c3 d4 bb 81 e1 15 ca 73 c8 34 8b 52 5b 0d 23 38 aa 14 46 67 ed 94 31 02 14 12 cd 9b 84 4c ba 29 93 4a aa cc e8 73 41 4e c1 1c b0 2e 27 2d 0a d8 1f 76 7d 33 07 67 21 f1 3b f3 60 20 cf 0b 1f d0 ec b0 78 de 11 28 be ba 09 49 eb ec e1 a1 f9 6e 20 9d c3 6e 4f ff d3 6b 67 3a 7d dc 15 97 ad 44 08 e4 85 c4 ad b2 c8 73 84 12 49 37 25 23 80 9e 43 12 d0 c7 b3 52 2e f9 83 ca c1 e0 39 35 ff 13 a8 e9 6b a6 81 a6 2e 40 d3 e7 0a 7f f3 58 66 d3 d9 99 3f 9e 26 a6 34 c8 1b 4e 71 38 0f cd d6 f4 e8 35 f7 5a 64 09 c7 dc 2c 07 41 0e 6f 87 85 8c 7b 94 c0 1c 2e 32 f2 91 76 9e ac ca 71 64 3b 8b 98 a9 63 df 0a 32 9b ea 4e d6 39 7e 8c d0 1a 11 0a b3 61 ac 5b ad 1c cd 84 0a 6c 8a 6e aa 00 1a 9d 7d 87 dc 33 18 64 35 71 22 6c 4d d2 c2 ac 41 fb ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](845, " Because the server is generating ephemeral keys it is not using the public key provided in the server certificate. To prove that the server owns the server certificate (giving the certificate validity in this TLS session), it signs the ephemeral public key with the certificate's private key. This signature can be validated with the certificate's public key. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "ul")(847, "li")(848, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](849, "04 01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](850, " - reserved value for RSA signature with SHA256 hash ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "li")(852, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](853, "01 00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](854, " - length of signature (0x100 or 256 bytes) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "li")(856, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](857, "04 02 b6 ... ac 41 fb");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](858, " - the computed signature for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](860, "SHA256(client_hello_random + server_hello_random + curve_info + public_key)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](861, " We can compute the signature ourselves using the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](862, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](863, "server's private key");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](864, ", at the command line: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "pre")(866, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](867, "### client random from Client Hello\n        $ echo -en '\\x00\\x01\\x02\\x03\\x04\\x05\\x06\\x07'  > /tmp/compute\n        $ echo -en '\\x08\\x09\\x0a\\x0b\\x0c\\x0d\\x0e\\x0f' >> /tmp/compute\n        $ echo -en '\\x10\\x11\\x12\\x13\\x14\\x15\\x16\\x17' >> /tmp/compute\n        $ echo -en '\\x18\\x19\\x1a\\x1b\\x1c\\x1d\\x1e\\x1f' >> /tmp/compute\n        ### server random from Server Hello\n        $ echo -en '\\x70\\x71\\x72\\x73\\x74\\x75\\x76\\x77' >> /tmp/compute\n        $ echo -en '\\x78\\x79\\x7a\\x7b\\x7c\\x7d\\x7e\\x7f' >> /tmp/compute\n        $ echo -en '\\x80\\x81\\x82\\x83\\x84\\x85\\x86\\x87' >> /tmp/compute\n        $ echo -en '\\x88\\x89\\x8a\\x8b\\x8c\\x8d\\x8e\\x8f' >> /tmp/compute\n        ### the curve info section from this message\n        $ echo -en '\\x03\\x00\\x1d' >> /tmp/compute\n        ### the public key sections from this msg\n        $ echo -en '\\x20\\x9f\\xd7\\xad\\x6d\\xcf\\xf4\\x29' >> /tmp/compute\n        $ echo -en '\\x8d\\xd3\\xf9\\x6d\\x5b\\x1b\\x2a\\xf9' >> /tmp/compute\n        $ echo -en '\\x10\\xa0\\x53\\x5b\\x14\\x88\\xd7\\xf8' >> /tmp/compute\n        $ echo -en '\\xfa\\xbb\\x34\\x9a\\x98\\x28\\x80\\xb6\\x15' >> /tmp/compute\n        $ openssl dgst -sign server.key -sha256 /tmp/compute | hexdump\n    \n        0000000 04 02 b6 61 f7 c1 91 ee 59 be 45 37 66 39 bd c3\n        ... snip ...\n        00000f0 7d 87 dc 33 18 64 35 71 22 6c 4d d2 c2 ac 41 fb\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "div", 3)(869, "div", 16)(870, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](871, "Server Hello Done");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](873, " The server indicates it's finished with its half of the handshake. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "span", 8)(875, "span", 9)(876, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](877, "Record Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](879, " 16 03 03 00 04 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](881, " TLS sessions are broken into the sending and receiving of \"records\", which are blocks of data with a type, a protocol version, and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](882, "ul")(883, "li")(884, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](885, "16");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](886, " - type is 0x16 (handshake record) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](887, "li")(888, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](889, "03 03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](890, " - protocol version is \"3,3\" (TLS 1.2) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](891, "li")(892, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](893, "00 04");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](894, " - 0x4 (4) bytes of handshake message follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](895, "span", 9)(896, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](897, "Handshake Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](898, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](899, " 0e 00 00 00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](900, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](901, " Each handshake message starts with a type and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](902, "ul")(903, "li")(904, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](905, "0e");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](906, " - handshake message type 0x0e (server hello done) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](907, "li")(908, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](909, "00 00 00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](910, " - 0x0 (0) bytes of hello done follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](911, "div", 3)(912, "div", 30)(913, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](914, "Client Key Exchange Generation");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](915, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](916, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](917, " The client calculates a private/public keypair for key exchange. Key exchange is a mathematic technique by which two parties can agree on the same number without an eavesdropper being able to tell what that number is. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](918, "br")(919, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](920, " It will do this via an elliptical curve method, using the x25519 curve. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](921, "br")(922, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](923, " The private key is chosen by selecting an integer between 0 and 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](924, "sup");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](925, "256");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](926, "-1. It does this by generating 32 bytes (256 bits) of random data. The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](927, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](928, "private key");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](929, " selected is: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](930, "pre", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](931, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](932, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](933, "202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](934, " The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](935, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](936, "public key");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](937, " is chosen by multiplying the point x=9 on the x25519 curve by the private key. The public key calculated is: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](938, "pre", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](939, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](940, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](941, "358072d6365880d1aeea329adf9121383851ed21a28e3b75e965d0d2cd166254");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](942, " The public key calculation can be confirmed at the command line: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "pre")(944, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](945, "### requires openssl 1.1.0 or higher\n        $ openssl pkey -noout -text < client-ephemeral-private.key\n    \n        X25519 Private-Key:\n        priv:\n            20:21:22:23:24:25:26:27:28:29:2a:2b:2c:2d:2e:\n            2f:30:31:32:33:34:35:36:37:38:39:3a:3b:3c:3d:\n            3e:3f\n        pub:\n            35:80:72:d6:36:58:80:d1:ae:ea:32:9a:df:91:21:\n            38:38:51:ed:21:a2:8e:3b:75:e9:65:d0:d2:cd:16:\n            62:54\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](946, "div", 3)(947, "div", 4)(948, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](949, "Client Key Exchange");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](950, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](951, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](952, " The client provides information for key exchange. As part of the key exchange process both the server and the client will have a keypair of public and private keys, and will send the other party their public key. The shared encryption key will then be generated using a combination of each party's private key and the other party's public key. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](953, "br")(954, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](955, " The parties have agreed on a cipher suite using ECDHE, meaning the keypairs will be based on a selected ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](956, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](957, "E");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](958, "lliptic ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](959, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](960, "C");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](961, "urve, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](962, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](963, "D");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](964, "iffie-");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](965, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](966, "H");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](967, "ellman will be used, and the keypairs are ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](968, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](969, "E");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](970, "phemeral (generated for each connection) rather than using the public/private key from the certificate. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "span", 8)(972, "span", 9)(973, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](974, "Record Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](975, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](976, " 16 03 03 00 25 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](977, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](978, " TLS sessions are broken into the sending and receiving of \"records\", which are blocks of data with a type, a protocol version, and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](979, "ul")(980, "li")(981, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](982, "16");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](983, " - type is 0x16 (handshake record) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](984, "li")(985, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](986, "03 03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](987, " - protocol version is \"3,3\" (TLS 1.2) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](988, "li")(989, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](990, "00 25");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](991, " - 0x25 (37) bytes of handshake message follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](992, "span", 9)(993, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](994, "Handshake Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](995, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](996, " 10 00 00 21 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](997, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](998, " Each handshake message starts with a type and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](999, "ul")(1000, "li")(1001, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1002, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1003, " - handshake message type 0x10 (client key exchange) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1004, "li")(1005, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1006, "00 00 21");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1007, " - 0x21 (33) bytes of client key exchange follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1008, "span", 9)(1009, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1010, "Public Key");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1011, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1012, " 20 35 80 72 d6 36 58 80 d1 ae ea 32 9a df 91 21 38 38 51 ed 21 a2 8e 3b 75 e9 65 d0 d2 cd 16 62 54 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1013, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1014, " The client provides its public key from the step \"Client Key Exchange Generation\". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1015, "ul")(1016, "li")(1017, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1018, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1019, " - length of 0x20 (32) bytes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1020, "li")(1021, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1022, "35 80 ... 62 54");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1023, " - public key ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1024, "div", 3)(1025, "div", 30)(1026, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1027, "Client Encryption Keys Calculation");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1028, "img", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1029, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1030, " The client now has the information to calculate the encryption keys that will be used by each side. It uses the following information in this calculation: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1031, "ul")(1032, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1033, "server random (from Server Hello) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1034, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1035, "client random (from Client Hello) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1036, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1037, "server public key (from Server Key Exchange) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1038, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1039, "client private key (from Client Key Generation) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1040, " The client multiplies the server's public key with the client's private key using the curve25519() algorithm. The 32-byte result is called the PreMasterSecret, and is found to be: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1041, "pre", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1042, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1043, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1044, "df4a291baa1eb7cfa6934b29b474baad2697e29f1f920dcc77c8a0a088447624");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1045, " I've provided ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1046, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1047, "a tool");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1048, " to perform this calculation: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1049, "pre")(1050, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1051, "$ gcc -o curve25519-mult curve25519-mult.c\n        $ ./curve25519-mult client-ephemeral-private.key \\\n                            server-ephemeral-public.key | hexdump\n    \n        0000000 df 4a 29 1b aa 1e b7 cf a6 93 4b 29 b4 74 ba ad\n        0000010 26 97 e2 9f 1f 92 0d cc 77 c8 a0 a0 88 44 76 24\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1052, " The client then calculates 48 bytes of the MasterSecret from the PreMasterSecret using the following method: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1053, "pre", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1054, "seed = \"master secret\" + client_random + server_random\n        a0 = seed\n        a1 = HMAC-SHA256(key=PreMasterSecret, data=a0)\n        a2 = HMAC-SHA256(key=PreMasterSecret, data=a1)\n        p1 = HMAC-SHA256(key=PreMasterSecret, data=a1 + seed)\n        p2 = HMAC-SHA256(key=PreMasterSecret, data=a2 + seed)\n        MasterSecret = p1[all 32 bytes] + p2[first 16 bytes]");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1055, " Here we demonstrate on the command line: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1056, "pre")(1057, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1058);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1059, " This gives us a MasterSecret of: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1060, "pre", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1061, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1062, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1063, "916abf9da55973e13614ae0a3f5d3f37b023ba129aee02cc9134338127cd7049781c8e19fc1eb2a7387ac06ae237344c");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1064, " We then generate the final encryption keys using a key expansion: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1065, "pre", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1066, "        seed = \"key expansion\" + server_random + client_random\n        a0 = seed\n        a1 = HMAC-SHA256(key=MasterSecret, data=a0)\n        a2 = HMAC-SHA256(key=MasterSecret, data=a1)\n        a3 = HMAC-SHA256(key=MasterSecret, data=a2)\n        a4 = ...\n        p1 = HMAC-SHA256(key=MasterSecret, data=a1 + seed)\n        p2 = HMAC-SHA256(key=MasterSecret, data=a2 + seed)\n        p3 = HMAC-SHA256(key=MasterSecret, data=a3 + seed)\n        p4 = ...\n        p = p1 + p2 + p3 + p4 ...\n        client write mac key = [first 20 bytes of p]\n        server write mac key = [next 20 bytes of p]\n        client write key = [next 16 bytes of p]\n        server write key = [next 16 bytes of p]\n        client write IV = [next 16 bytes of p]\n        server write IV = [next 16 bytes of p]\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1067, " We can demonstrate this on the command line: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1068, "pre")(1069, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1070, "### continued from above command line example\n        ### set up our MasterSecret as a hex string\n        $ mshex=$(hexdump -ve '/1 \"%02x\"' /tmp/mastersecret)\n        ### build the seed\n        $ echo -en 'key expansion' > /tmp/seed\n        $ cat /tmp/s_rand /tmp/c_rand >> /tmp/seed\n        ### a0 is the same as the seed\n        $ cat /tmp/seed > /tmp/a0\n        ### a(n) is hmac-sha256(key=secret, data=a(n-1))\n        $ cat /tmp/a0 | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/a1\n        $ cat /tmp/a1 | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/a2\n        $ cat /tmp/a2 | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/a3\n        $ cat /tmp/a3 | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/a4\n        ### p(n) is hmac-sha256(key=secret, data=a(n)+seed)\n        $ cat /tmp/a1 /tmp/seed | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/p1\n        $ cat /tmp/a2 /tmp/seed | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/p2\n        $ cat /tmp/a3 /tmp/seed | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/p3\n        $ cat /tmp/a4 /tmp/seed | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/p4\n        ### combine them into a single stream\n        $ cat /tmp/p1 /tmp/p2 /tmp/p3 /tmp/p4 > /tmp/p\n        $ dd if=/tmp/p of=/tmp/client_mac_key bs=1 skip=0  count=20\n        $ dd if=/tmp/p of=/tmp/server_mac_key bs=1 skip=20 count=20\n        $ dd if=/tmp/p of=/tmp/client_key     bs=1 skip=40 count=16\n        $ dd if=/tmp/p of=/tmp/server_key     bs=1 skip=56 count=16\n        $ dd if=/tmp/p of=/tmp/client_iv      bs=1 skip=72 count=16\n        $ dd if=/tmp/p of=/tmp/server_iv      bs=1 skip=88 count=16\n        $ hexdump /tmp/client_mac_key\n        0000000 1b 7d 11 7c 7d 5f 69 0b c2 63 ca e8 ef 60 af 0f\n        0000010 18 78 ac c2\n    \n        $ hexdump /tmp/server_mac_key\n        0000000 2a d8 bd d8 c6 01 a6 17 12 6f 63 54 0e b2 09 06\n        0000010 f7 81 fa d2\n    \n        $ hexdump /tmp/client_key\n        0000000 f6 56 d0 37 b1 73 ef 3e 11 16 9f 27 23 1a 84 b6\n    \n        $ hexdump /tmp/server_key\n        0000000 75 2a 18 e7 a9 fc b7 cb cd d8 f9 8d d8 f7 69 eb\n    \n        $ hexdump /tmp/client_iv\n        0000000 a0 d2 55 0c 92 38 ee bf ef 5c 32 25 1a bb 67 d6\n    \n        $ hexdump /tmp/server_iv\n        0000000 43 45 28 db 49 37 d5 40 d3 93 13 5e 06 a1 1b b8\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1071, " From this we get the following key data: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1072, "ul")(1073, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1074, "client MAC key: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1075, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1076, "1b7d117c7d5f690bc263cae8ef60af0f1878acc2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1077, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1078, "server MAC key: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1079, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1080, "2ad8bdd8c601a617126f63540eb20906f781fad2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1081, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1082, "client write key: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1083, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1084, "f656d037b173ef3e11169f27231a84b6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1085, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1086, "server write key: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1087, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1088, "752a18e7a9fcb7cbcdd8f98dd8f769eb");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1089, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1090, "client write IV: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1091, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1092, "a0d2550c9238eebfef5c32251abb67d6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1093, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1094, "server write IV: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1095, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1096, "434528db4937d540d393135e06a11bb8");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1097, "div", 3)(1098, "div", 4)(1099, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1100, "Client Change Cipher Spec");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1101, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1102, " The client indicates that it has calculated the shared encryption keys and that all following messages from the client will be encrypted with the client write key. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1103, "br")(1104, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1105, " In the next version of TLS this message type has been removed because it can be inferred. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1106, "span", 8)(1107, "span", 9)(1108, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1109, "Record");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1110, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1111, " 14 03 03 00 01 01 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1112, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1113, " TLS sessions are broken into the sending and receiving of \"records\", which are blocks of data with a type, a protocol version, and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1114, "ul")(1115, "li")(1116, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1117, "14");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1118, " - type is 0x14 (ChangeCipherSpec record) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1119, "li")(1120, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1121, "03 03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1122, " - protocol version is \"3,3\" (TLS 1.2) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1123, "li")(1124, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1125, "00 01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1126, " - 0x1 (1) bytes of change cipher spec follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1127, "li")(1128, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1129, "01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1130, " - the payload of this message is defined as the byte 0x01 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1131, "div", 3)(1132, "div", 4)(1133, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1134, "Client Handshake Finished");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1135, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1136, " To verify that the handshake was successful and not tampered with, the client calculates verification data and encrypts it with the client write key. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1137, "br")(1138, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1139, " The verification data is built from a hash of all handshake messages and verifies the integrity of the handshake process. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1140, "span", 8)(1141, "span", 9)(1142, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1143, "Record Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1144, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1145, " 16 03 03 00 40 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1146, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1147, " TLS sessions are broken into the sending and receiving of \"records\", which are blocks of data with a type, a protocol version, and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1148, "ul")(1149, "li")(1150, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1151, "16");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1152, " - type is 0x16 (handshake record) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1153, "li")(1154, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1155, "03 03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1156, " - protocol version is \"3,3\" (TLS 1.2) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1157, "li")(1158, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1159, "00 40");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1160, " - 0x40 (64) bytes of handshake message follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1161, "span", 9)(1162, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1163, "Encryption IV");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1164, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1165, " 40 41 42 43 44 45 46 47 48 49 4a 4b 4c 4d 4e 4f ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1166, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1167, " The client has sent an initialization vector for decrypting this block. Because we have overridden the rand function it is a predictable sequence. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1168, "span", 38)(1169, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1170, "Encrypted Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1171, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1172, " 22 7b c9 ba 81 ef 30 f2 a8 a7 8f f1 df 50 84 4d 58 04 b7 ee b2 e2 14 c3 2b 68 92 ac a3 db 7b 78 07 7f dd 90 06 7c 51 6b ac b3 ba 90 de df 72 0f ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1173, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1174, " This data is encrypted with the client write key. Because it contains a message authentication code (MAC) and padding it is larger than the decrypted data. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1175, "br")(1176, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1177, " See below for the decrypted data. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1178, "div", 39)(1179, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1180, "Decryption");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1181, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1182, " This data can be decrypted using the encryption IV and the client write key that was generated in the step \"Client Encryption Keys Calculation\". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1183, "pre")(1184, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1185, "### client key\n        $ hexkey=f656d037b173ef3e11169f27231a84b6\n        ### IV for this record\n        $ hexiv=404142434445464748494a4b4c4d4e4f\n        ### encrypted data\n        $ echo '22 7b c9 ba 81 ef 30 f2 a8 a7 8f f1 df 50 84 4d'  > /tmp/msg1\n        $ echo '58 04 b7 ee b2 e2 14 c3 2b 68 92 ac a3 db 7b 78' >> /tmp/msg1\n        $ echo '07 7f dd 90 06 7c 51 6b ac b3 ba 90 de df 72 0f' >> /tmp/msg1\n        $ xxd -r -p /tmp/msg1 \\\n        | openssl enc -d -nopad -aes-128-cbc -K $hexkey -iv $hexiv | hexdump\n    \n        0000000 14 00 00 0c cf 91 96 26 f1 36 0c 53 6a aa d7 3a\n        0000010 a5 a0 3d 23 30 56 e4 ac 6e ba 7f d9 e5 31 7f ac\n        0000020 2d b5 b7 0e 0b 0b 0b 0b 0b 0b 0b 0b 0b 0b 0b 0b\n    \n        The last 32 bytes contain a 20-byte MAC and padding to bring the data to a\n        multiple of 16 bytes.  The 20-byte MAC can be reproduced as follows:\n    \n        ### from https://tools.ietf.org/html/rfc2246#section-6.2.3.1\n        $ sequence='0000000000000000'\n        $ rechdr='16 03 03'\n        $ datalen='00 10'\n        $ data='14 00 00 0c cf 91 96 26 f1 36 0c 53 6a aa d7 3a'\n        ### from \"Encryption Keys Calculation\"\n        $ mackey=1b7d117c7d5f690bc263cae8ef60af0f1878acc2\n        $ echo $sequence $rechdr $datalen $data | xxd -r -p \\\n        | openssl dgst -sha1 -mac HMAC -macopt hexkey:$mackey\n    \n        a5a03d233056e4ac6eba7fd9e5317fac2db5b70e\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1186, "span", 40)(1187, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1188, "Handshake Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1189, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1190, " 14 00 00 0c ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1191, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1192, " Each handshake message starts with a type and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1193, "ul")(1194, "li")(1195, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1196, "14");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1197, " - handshake message type 0x14 (finished) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1198, "li")(1199, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1200, "00 00 0c");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1201, " - 0xC (12) bytes of handshake finished follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1202, "span", 40)(1203, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1204, "Verify Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1205, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1206, " cf 91 96 26 f1 36 0c 53 6a aa d7 3a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1207, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1208, " The verify_data is built from the master secret and the hash of the payload of all handshake records (type=0x16) previous to this one. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1209, "br")(1210, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1211, " The SHA256 of all handshake messages before this one is ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1212, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1213, "061dda04b3c2217ff73bd79b9cf88a2bb6ec505404aac8722db03ef417b54cb4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1214, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1215, "br")(1216, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1217, " The calculation for verify_data is as follows: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1218, "pre", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1219, "        seed = \"client finished\" + SHA256(all handshake messages)\n        a0 = seed\n        a1 = HMAC-SHA256(key=MasterSecret, data=a0)\n        p1 = HMAC-SHA256(key=MasterSecret, data=a1 + seed)\n        verify_data = p1[first 12 bytes]\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1220, " The verify data calculated from this hash is ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1221, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1222, "cf919626f1360c536aaad73a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1223, ". We can show this on the command line: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1224, "pre")(1225, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1226, "### set up our MasterSecret as a hex string\n        $ mshex=$(hexdump -ve '/1 \"%02x\"' /tmp/mastersecret)\n        ### build the seed\n        $ echo -en 'client finished' > /tmp/seed\n        ### add SHA256(all_messages) to seed\n        $ echo -en '\\x06\\x1d\\xda\\x04\\xb3\\xc2\\x21\\x7f' >> /tmp/seed\n        $ echo -en '\\xf7\\x3b\\xd7\\x9b\\x9c\\xf8\\x8a\\x2b' >> /tmp/seed\n        $ echo -en '\\xb6\\xec\\x50\\x54\\x04\\xaa\\xc8\\x72' >> /tmp/seed\n        $ echo -en '\\x2d\\xb0\\x3e\\xf4\\x17\\xb5\\x4c\\xb4' >> /tmp/seed\n        ### a0 is the same as the seed\n        $ cat /tmp/seed > /tmp/a0\n        ### a(n) is hmac-sha256(key=secret, data=a(n-1))\n        $ cat /tmp/a0 | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/a1\n        ### p(n) is hmac-sha256(key=secret, data=a(n)+seed)\n        $ cat /tmp/a1 /tmp/seed | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/p1\n        $ head -c 12 /tmp/p1 > /tmp/verify_data\n        $ hexdump /tmp/verify_data\n    \n        0000000 cf 91 96 26 f1 36 0c 53 6a aa d7 3a\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1227, "div", 3)(1228, "div", 21)(1229, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1230, "Server Encryption Keys Calculation");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1231, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1232, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1233, " The server now has the information to calculate the encryption keys that will be used by each side. It uses the following information in this calculation: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1234, "ul")(1235, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1236, "server random (from Server Hello) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1237, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1238, "client random (from Client Hello) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1239, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1240, "client public key (from Client Key Exchange) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1241, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1242, "server private key (from Server Key Generation) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1243, " The server multiplies the client's public key with the server's private key using the curve25519() algorithm. The 32-byte result is called the PreMasterSecret, and is found to be: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1244, "pre", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1245, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1246, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1247, "df4a291baa1eb7cfa6934b29b474baad2697e29f1f920dcc77c8a0a088447624");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1248, " I've provided ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1249, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1250, "a tool");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1251, " to perform this calculation: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1252, "pre")(1253, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1254, "$ gcc -o curve25519-mult curve25519-mult.c\n        $ ./curve25519-mult server-ephemeral-private.key \\\n                            client-ephemeral-public.key | hexdump\n    \n        0000000 df 4a 29 1b aa 1e b7 cf a6 93 4b 29 b4 74 ba ad\n        0000010 26 97 e2 9f 1f 92 0d cc 77 c8 a0 a0 88 44 76 24\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1255, " This is identical to the PreMasterSecret found by the client, therefore the following calculations will be identical. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1256, "br")(1257, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1258, " The server then calculates 48 bytes of the MasterSecret from the PreMasterSecret using the following method: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1259, "pre", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1260, "seed = \"master secret\" + client_random + server_random\n        a0 = seed\n        a1 = HMAC-SHA256(key=PreMasterSecret, data=a0)\n        a2 = HMAC-SHA256(key=PreMasterSecret, data=a1)\n        p1 = HMAC-SHA256(key=PreMasterSecret, data=a1 + seed)\n        p2 = HMAC-SHA256(key=PreMasterSecret, data=a2 + seed)\n        MasterSecret = p1[all 32 bytes] + p2[first 16 bytes]");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1261, " Here we demonstrate on the command line: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1262, "pre")(1263, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1264);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1265, " This gives us a MasterSecret of: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1266, "pre", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1267, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1268, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1269, "916abf9da55973e13614ae0a3f5d3f37b023ba129aee02cc9134338127cd7049781c8e19fc1eb2a7387ac06ae237344c");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1270, " We then generate the final encryption keys using a key expansion: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1271, "pre", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1272, "        seed = \"key expansion\" + server_random + client_random\n        a0 = seed\n        a1 = HMAC-SHA256(key=MasterSecret, data=a0)\n        a2 = HMAC-SHA256(key=MasterSecret, data=a1)\n        a3 = HMAC-SHA256(key=MasterSecret, data=a2)\n        a4 = ...\n        p1 = HMAC-SHA256(key=MasterSecret, data=a1 + seed)\n        p2 = HMAC-SHA256(key=MasterSecret, data=a2 + seed)\n        p3 = HMAC-SHA256(key=MasterSecret, data=a3 + seed)\n        p4 = ...\n        p = p1 + p2 + p3 + p4 ...\n        client write mac key = [first 20 bytes of p]\n        server write mac key = [next 20 bytes of p]\n        client write key = [next 16 bytes of p]\n        server write key = [next 16 bytes of p]\n        client write IV = [next 16 bytes of p]\n        server write IV = [next 16 bytes of p]\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1273, " We can demonstrate this on the command line: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1274, "pre")(1275, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1276, "### continued from above command line example\n        ### set up our MasterSecret as a hex string\n        $ mshex=$(hexdump -ve '/1 \"%02x\"' /tmp/mastersecret)\n        ### build the seed\n        $ echo -en 'key expansion' > /tmp/seed\n        $ cat /tmp/s_rand /tmp/c_rand >> /tmp/seed\n        ### a0 is the same as the seed\n        $ cat /tmp/seed > /tmp/a0\n        ### a(n) is hmac-sha256(key=secret, data=a(n-1))\n        $ cat /tmp/a0 | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/a1\n        $ cat /tmp/a1 | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/a2\n        $ cat /tmp/a2 | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/a3\n        $ cat /tmp/a3 | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/a4\n        ### p(n) is hmac-sha256(key=secret, data=a(n)+seed)\n        $ cat /tmp/a1 /tmp/seed | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/p1\n        $ cat /tmp/a2 /tmp/seed | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/p2\n        $ cat /tmp/a3 /tmp/seed | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/p3\n        $ cat /tmp/a4 /tmp/seed | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/p4\n        $ cat /tmp/p1 /tmp/p2 /tmp/p3 /tmp/p4 > /tmp/p\n        $ dd if=/tmp/p of=/tmp/client_mac_key bs=1 skip=0  count=20\n        $ dd if=/tmp/p of=/tmp/server_mac_key bs=1 skip=20 count=20\n        $ dd if=/tmp/p of=/tmp/client_key     bs=1 skip=40 count=16\n        $ dd if=/tmp/p of=/tmp/server_key     bs=1 skip=56 count=16\n        $ dd if=/tmp/p of=/tmp/client_iv      bs=1 skip=72 count=16\n        $ dd if=/tmp/p of=/tmp/server_iv      bs=1 skip=88 count=16\n        $ hexdump /tmp/client_mac_key\n        0000000 1b 7d 11 7c 7d 5f 69 0b c2 63 ca e8 ef 60 af 0f\n        0000010 18 78 ac c2\n    \n        $ hexdump /tmp/server_mac_key\n        0000000 2a d8 bd d8 c6 01 a6 17 12 6f 63 54 0e b2 09 06\n        0000010 f7 81 fa d2\n    \n        $ hexdump /tmp/client_key\n        0000000 f6 56 d0 37 b1 73 ef 3e 11 16 9f 27 23 1a 84 b6\n    \n        $ hexdump /tmp/server_key\n        0000000 75 2a 18 e7 a9 fc b7 cb cd d8 f9 8d d8 f7 69 eb\n    \n        $ hexdump /tmp/client_iv\n        0000000 a0 d2 55 0c 92 38 ee bf ef 5c 32 25 1a bb 67 d6\n    \n        $ hexdump /tmp/server_iv\n        0000000 43 45 28 db 49 37 d5 40 d3 93 13 5e 06 a1 1b b8\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1277, " From this we get the following key data: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1278, "ul")(1279, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1280, "client MAC key: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1281, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1282, "1b7d117c7d5f690bc263cae8ef60af0f1878acc2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1283, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1284, "server MAC key: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1285, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1286, "2ad8bdd8c601a617126f63540eb20906f781fad2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1287, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1288, "client write key: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1289, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1290, "f656d037b173ef3e11169f27231a84b6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1291, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1292, "server write key: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1293, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1294, "752a18e7a9fcb7cbcdd8f98dd8f769eb");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1295, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1296, "client write IV: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1297, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1298, "a0d2550c9238eebfef5c32251abb67d6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1299, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1300, "server write IV: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1301, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1302, "434528db4937d540d393135e06a11bb8");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1303, "div", 3)(1304, "div", 16)(1305, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1306, "Server Change Cipher Spec");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1307, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1308, " The server indicates that it has calculated the shared encryption keys and that all following messages from the server will be encrypted with the server write key. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1309, "br")(1310, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1311, " In the next version of TLS this message type has been removed because it can be inferred. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1312, "span", 8)(1313, "span", 9)(1314, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1315, "Record");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1316, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1317, " 14 03 03 00 01 01 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1318, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1319, " TLS sessions are broken into the sending and receiving of \"records\", which are blocks of data with a type, a protocol version, and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1320, "ul")(1321, "li")(1322, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1323, "14");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1324, " - type is 0x14 (ChangeCipherSpec record) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1325, "li")(1326, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1327, "03 03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1328, " - protocol version is \"3,3\" (TLS 1.2) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1329, "li")(1330, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1331, "00 01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1332, " - 0x1 (1) bytes of change cipher spec follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1333, "li")(1334, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1335, "01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1336, " - the payload of this message is defined as the byte 0x01 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1337, "div", 3)(1338, "div", 16)(1339, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1340, "Server Handshake Finished");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1341, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1342, " To verify that the handshake was successful and not tampered with, the server calculates verification data and encrypts it with the server write key. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1343, "br")(1344, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1345, " The verification data is built from a hash of all handshake messages and verifies the integrity of the handshake process. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1346, "span", 8)(1347, "span", 9)(1348, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1349, "Record Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1350, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1351, " 16 03 03 00 40 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1352, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1353, " TLS sessions are broken into the sending and receiving of \"records\", which are blocks of data with a type, a protocol version, and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1354, "ul")(1355, "li")(1356, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1357, "16");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1358, " - type is 0x16 (handshake record) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1359, "li")(1360, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1361, "03 03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1362, " - protocol version is \"3,3\" (TLS 1.2) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1363, "li")(1364, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1365, "00 40");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1366, " - 0x40 (64) bytes of handshake message follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1367, "span", 9)(1368, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1369, "Encryption IV");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1370, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1371, " 51 52 53 54 55 56 57 58 59 5a 5b 5c 5d 5e 5f 60 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1372, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1373, " The server has sent an initialization vector for decrypting this block. Because we have overridden the rand function it is a predictable sequence. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1374, "span", 38)(1375, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1376, "Encrypted Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1377, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1378, " 18 e0 75 31 7b 10 03 15 f6 08 1f cb f3 13 78 1a ac 73 ef e1 9f e2 5b a1 af 59 c2 0b e9 4f c0 1b da 2d 68 00 29 8b 73 a7 e8 49 d7 4b d4 94 cf 7d ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1379, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1380, " This data is encrypted with the server write key. Because it contains a message authentication code (MAC) and padding it is larger than the decrypted data. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1381, "br")(1382, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1383, " See below for the decrypted data. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1384, "div", 39)(1385, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1386, "Decryption");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1387, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1388, " This data can be decrypted using the encryption IV and the server write key that was generated in the step \"Server Encryption Keys Calculation\". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1389, "pre")(1390, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1391, "### server key\n        $ hexkey=752a18e7a9fcb7cbcdd8f98dd8f769eb\n        ### IV for this record\n        $ hexiv=5152535455565758595a5b5c5d5e5f60\n        ### encrypted data\n        $ echo '18 e0 75 31 7b 10 03 15 f6 08 1f cb f3 13 78 1a'  > /tmp/msg1\n        $ echo 'ac 73 ef e1 9f e2 5b a1 af 59 c2 0b e9 4f c0 1b' >> /tmp/msg1\n        $ echo 'da 2d 68 00 29 8b 73 a7 e8 49 d7 4b d4 94 cf 7d' >> /tmp/msg1\n        $ xxd -r -p /tmp/msg1 \\\n        | openssl enc -d -nopad -aes-128-cbc -K $hexkey -iv $hexiv | hexdump\n    \n        0000000 14 00 00 0c 84 4d 3c 10 74 6d d7 22 f9 2f 0c 7e\n        0000010 20 c4 97 46 d2 a3 0f 23 57 39 90 58 07 53 52 43\n        0000020 af f2 bf e0 0b 0b 0b 0b 0b 0b 0b 0b 0b 0b 0b 0b\n    \n        The last 32 bytes contain a 20-byte MAC and padding to bring the data to a\n        multiple of 16 bytes.  The 20-byte MAC can be reproduced as follows:\n    \n        ### from https://tools.ietf.org/html/rfc2246#section-6.2.3.1\n        $ sequence='0000000000000000'\n        $ rechdr='16 03 03'\n        $ datalen='00 10'\n        $ data='14 00 00 0c 84 4d 3c 10 74 6d d7 22 f9 2f 0c 7e'\n        ### from \"Encryption Keys Calculation\"\n        $ mackey=2ad8bdd8c601a617126f63540eb20906f781fad2\n        $ echo $sequence $rechdr $datalen $data | xxd -r -p \\\n        | openssl dgst -sha1 -mac HMAC -macopt hexkey:$mackey\n    \n        20c49746d2a30f235739905807535243aff2bfe0\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1392, "span", 40)(1393, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1394, "Handshake Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1395, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1396, " 14 00 00 0c ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1397, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1398, " Each handshake message starts with a type and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1399, "ul")(1400, "li")(1401, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1402, "14");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1403, " - handshake message type 0x14 (finished) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1404, "li")(1405, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1406, "00 00 0c");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1407, " - 0xC (12) bytes of handshake finished follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1408, "span", 40)(1409, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1410, "Verify Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1411, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1412, " 84 4d 3c 10 74 6d d7 22 f9 2f 0c 7e ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1413, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1414, " The verify_data is built from the master secret and the hash of the payload of all handshake records (type=0x16) previous to this one. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1415, "br")(1416, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1417, " The SHA256 of all handshake messages before this one is ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1418, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1419, "b2017ba28d0e27f03ae327456b6ff00b4d5bbf0ef7cda83ce1029b521c3e7c35");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1420, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1421, "br")(1422, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1423, " The calculation for verify_data is as follows: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1424, "pre", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1425, "        seed = \"server finished\" + SHA256(all handshake messages)\n        a0 = seed\n        a1 = HMAC-SHA256(key=MasterSecret, data=a0)\n        p1 = HMAC-SHA256(key=MasterSecret, data=a1 + seed)\n        verify_data = p1[first 12 bytes]\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1426, " The verify data calculated from this hash is ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1427, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1428, "844d3c10746dd722f92f0c7e");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1429, ". We can show this on the command line: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1430, "pre")(1431, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1432, "### set up our MasterSecret as a hex string\n        $ mshex=$(hexdump -ve '/1 \"%02x\"' /tmp/mastersecret)\n        ### build the seed\n        $ echo -en 'server finished' > /tmp/seed\n        ### add SHA256(all_messages) to seed\n        $ echo -en '\\xb2\\x01\\x7b\\xa2\\x8d\\x0e\\x27\\xf0' >> /tmp/seed\n        $ echo -en '\\x3a\\xe3\\x27\\x45\\x6b\\x6f\\xf0\\x0b' >> /tmp/seed\n        $ echo -en '\\x4d\\x5b\\xbf\\x0e\\xf7\\xcd\\xa8\\x3c' >> /tmp/seed\n        $ echo -en '\\xe1\\x02\\x9b\\x52\\x1c\\x3e\\x7c\\x35' >> /tmp/seed\n        ### a0 is the same as the seed\n        $ cat /tmp/seed > /tmp/a0\n        ### a(n) is hmac-sha256(key=secret, data=a(n-1))\n        $ cat /tmp/a0 | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/a1\n        ### p(n) is hmac-sha256(key=secret, data=a(n)+seed)\n        $ cat /tmp/a1 /tmp/seed | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$mshex -binary > /tmp/p1\n        $ head -c 12 /tmp/p1 > /tmp/verify_data\n        $ hexdump /tmp/verify_data\n    \n        0000000 84 4d 3c 10 74 6d d7 22 f9 2f 0c 7e\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1433, "div", 3)(1434, "div", 4)(1435, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1436, "Client Application Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1437, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1438, " The client sends the data \"ping\". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1439, "span", 8)(1440, "span", 9)(1441, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1442, "Record Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1443, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1444, " 17 03 03 00 30 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1445, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1446, " TLS sessions are broken into the sending and receiving of \"records\", which are blocks of data with a type, a protocol version, and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1447, "ul")(1448, "li")(1449, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1450, "17");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1451, " - type is 0x17 (application data) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1452, "li")(1453, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1454, "03 03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1455, " - protocol version is \"3,3\" (TLS 1.2) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1456, "li")(1457, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1458, "00 30");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1459, " - 0x30 (48) bytes of application data follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1460, "span", 9)(1461, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1462, "Encryption IV");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1463, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1464, " 00 01 02 03 04 05 06 07 08 09 0a 0b 0c 0d 0e 0f ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1465, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1466, " The client has sent an initialization vector for decrypting this block. Because we have overridden the rand function it is a predictable sequence. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1467, "span", 38)(1468, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1469, "Encrypted Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1470, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1471, " 6c 42 1c 71 c4 2b 18 3b fa 06 19 5d 13 3d 0a 09 d0 0f c7 cb 4e 0f 5d 1c da 59 d1 47 ec 79 0c 99 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1472, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1473, " This data is encrypted with the client write key. Because it contains a message authentication code (MAC) and padding it is larger than the decrypted data. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1474, "br")(1475, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1476, " See below for the decrypted data. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1477, "div", 39)(1478, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1479, "Decryption");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1480, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1481, " This data can be decrypted using the encryption IV and the client write key that was generated in the step \"Client Encryption Keys Calculation\". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1482, "pre")(1483, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1484, "### client key\n        $ hexkey=f656d037b173ef3e11169f27231a84b6\n        ### IV for this record\n        $ hexiv=000102030405060708090a0b0c0d0e0f\n        ### encrypted data\n        $ echo '6c 42 1c 71 c4 2b 18 3b fa 06 19 5d 13 3d 0a 09'  > /tmp/msg1\n        $ echo 'd0 0f c7 cb 4e 0f 5d 1c da 59 d1 47 ec 79 0c 99' >> /tmp/msg1\n        $ xxd -r -p /tmp/msg1 \\\n        | openssl enc -d -nopad -aes-128-cbc -K $hexkey -iv $hexiv | hexdump\n    \n        0000000 70 69 6e 67 60 10 12 49 f7 4a 03 77 c9 ca cf 63\n        0000010 09 75 13 70 d8 0c fc aa 07 07 07 07 07 07 07 07\n    \n        The last 28 bytes contain a 20-byte MAC and padding to bring the data to a\n        multiple of 16 bytes.  The 20-byte MAC can be reproduced as follows:\n    \n        ### from https://tools.ietf.org/html/rfc2246#section-6.2.3.1\n        $ sequence='0000000000000001'\n        $ rechdr='17 03 03'\n        $ datalen='00 04'\n        $ data='70 69 6e 67'\n        ### from \"Encryption Keys Calculation\"\n        $ mackey=1b7d117c7d5f690bc263cae8ef60af0f1878acc2\n        $ echo $sequence $rechdr $datalen $data | xxd -r -p \\\n        | openssl dgst -sha1 -mac HMAC -macopt hexkey:$mackey\n    \n        60101249f74a0377c9cacf6309751370d80cfcaa\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1485, "span", 40)(1486, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1487, "Application Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1488, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1489, " 70 69 6e 67 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1490, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1491, " The bytes \"ping\". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1492, "div", 3)(1493, "div", 16)(1494, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1495, "Server Application Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1496, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1497, " The server replies with the data \"pong\". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1498, "span", 8)(1499, "span", 9)(1500, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1501, "Record Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1502, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1503, " 17 03 03 00 30 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1504, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1505, " TLS sessions are broken into the sending and receiving of \"records\", which are blocks of data with a type, a protocol version, and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1506, "ul")(1507, "li")(1508, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1509, "17");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1510, " - type is 0x17 (application data) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1511, "li")(1512, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1513, "03 03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1514, " - protocol version is \"3,3\" (TLS 1.2) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1515, "li")(1516, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1517, "00 30");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1518, " - 0x30 (48) bytes of application data follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1519, "span", 9)(1520, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1521, "Encryption IV");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1522, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1523, " 61 62 63 64 65 66 67 68 69 6a 6b 6c 6d 6e 6f 70 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1524, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1525, " The server has sent an initialization vector for decrypting this block. Because we have overridden the rand function it is a predictable sequence. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1526, "span", 38)(1527, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1528, "Encrypted Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1529, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1530, " 97 83 48 8a f5 fa 20 bf 7a 2e f6 9d eb b5 34 db 9f b0 7a 8c 27 21 de e5 40 9f 77 af 0c 3d de 56 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1531, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1532, " This data is encrypted with the server write key. Because it contains a message authentication code (MAC) and padding it is larger than the decrypted data. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1533, "br")(1534, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1535, " See below for the decrypted data. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1536, "div", 39)(1537, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1538, "Decryption");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1539, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1540, " This data can be decrypted using the encryption IV and the server write key that was generated in the step \"Server Encryption Keys Calculation\". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1541, "pre")(1542, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1543, "### server key\n        $ hexkey=752a18e7a9fcb7cbcdd8f98dd8f769eb\n        ### IV for this record\n        $ hexiv=6162636465666768696a6b6c6d6e6f70\n        ### encrypted data\n        $ echo '97 83 48 8a f5 fa 20 bf 7a 2e f6 9d eb b5 34 db'  > /tmp/msg1\n        $ echo '9f b0 7a 8c 27 21 de e5 40 9f 77 af 0c 3d de 56' >> /tmp/msg1\n        $ xxd -r -p /tmp/msg1 \\\n        | openssl enc -d -nopad -aes-128-cbc -K $hexkey -iv $hexiv | hexdump\n    \n        0000000 70 6f 6e 67 5a c7 99 dc cf dc 0f af 95 2b dc 91\n        0000010 18 af 20 0e e3 1c 51 05 07 07 07 07 07 07 07 07\n    \n        The last 28 bytes contain a 20-byte MAC and padding to bring the data to a\n        multiple of 16 bytes.  The 20-byte MAC can be reproduced as follows:\n    \n        ### from https://tools.ietf.org/html/rfc2246#section-6.2.3.1\n        $ sequence='0000000000000001'\n        $ rechdr='17 03 03'\n        $ datalen='00 04'\n        $ data='70 6f 6e 67'\n        ### from \"Encryption Keys Calculation\"\n        $ mackey=2ad8bdd8c601a617126f63540eb20906f781fad2\n        $ echo $sequence $rechdr $datalen $data | xxd -r -p \\\n        | openssl dgst -sha1 -mac HMAC -macopt hexkey:$mackey\n    \n        5ac799dccfdc0faf952bdc9118af200ee31c5105\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1544, "span", 40)(1545, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1546, "Application Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1547, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1548, " 70 6f 6e 67 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1549, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1550, " The bytes \"pong\". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1551, "div", 3)(1552, "div", 4)(1553, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1554, "Client Close Notify");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1555, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1556, " The client sends an alert that it is closing the connection. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1557, "span", 8)(1558, "span", 9)(1559, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1560, "Record Header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1561, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1562, " 15 03 03 00 30 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1563, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1564, " TLS sessions are broken into the sending and receiving of \"records\", which are blocks of data with a type, a protocol version, and a length. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1565, "ul")(1566, "li")(1567, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1568, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1569, " - type is 0x15 (alert record) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1570, "li")(1571, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1572, "03 03");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1573, " - protocol version is \"3,3\" (TLS 1.2) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1574, "li")(1575, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1576, "00 30");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1577, " - 0x30 (48) bytes of alert data follows ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1578, "span", 9)(1579, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1580, "Encryption IV");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1581, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1582, " 10 11 12 13 14 15 16 17 18 19 1a 1b 1c 1d 1e 1f ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1583, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1584, " The client has sent an initialization vector for decrypting this block. Because we have overridden the rand function it is a predictable sequence. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1585, "span", 38)(1586, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1587, "Encrypted Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1588, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1589, " 0d 83 f9 79 04 75 0d d8 fd 8a a1 30 21 86 32 63 4f d0 65 e4 62 83 79 b8 8b bf 9e fd 12 87 a6 2d ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1590, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1591, " This data is encrypted with the client write key. Because it contains a message authentication code (MAC) and padding it is larger than the decrypted data. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1592, "br")(1593, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1594, " See below for the decrypted data. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1595, "div", 39)(1596, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1597, "Decryption");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1598, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1599, " This data can be decrypted using the encryption IV and the client write key that was generated in the step \"Client Encryption Keys Calculation\". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1600, "pre")(1601, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1602, "### client key\n        $ hexkey=f656d037b173ef3e11169f27231a84b6\n        ### IV for this record\n        $ hexiv=101112131415161718191a1b1c1d1e1f\n        ### encrypted data\n        $ echo '0d 83 f9 79 04 75 0d d8 fd 8a a1 30 21 86 32 63'  > /tmp/msg1\n        $ echo '4f d0 65 e4 62 83 79 b8 8b bf 9e fd 12 87 a6 2d' >> /tmp/msg1\n        $ xxd -r -p /tmp/msg1 \\\n        | openssl enc -d -nopad -aes-128-cbc -K $hexkey -iv $hexiv | hexdump\n    \n        0000000 01 00 92 79 9c ba 81 9f 31 07 44 c5 59 62 2b e4\n        0000010 2b ce 3d 6a 41 fb 09 09 09 09 09 09 09 09 09 09\n    \n        The last 30 bytes contain a 20-byte MAC and padding to bring the data to a\n        multiple of 16 bytes.  The 20-byte MAC can be reproduced as follows:\n    \n        ### from https://tools.ietf.org/html/rfc2246#section-6.2.3.1\n        $ sequence='0000000000000002'\n        $ rechdr='15 03 03'\n        $ datalen='00 02'\n        $ data='01 00'\n        ### from \"Encryption Keys Calculation\"\n        $ mackey=1b7d117c7d5f690bc263cae8ef60af0f1878acc2\n        $ echo $sequence $rechdr $datalen $data | xxd -r -p \\\n        | openssl dgst -sha1 -mac HMAC -macopt hexkey:$mackey\n    \n        92799cba819f310744c559622be42bce3d6a41fb\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1603, "span", 40)(1604, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1605, "Alert Level");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1606, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1607, " 01 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1608, "div", 12)(1609, "ul")(1610, "li")(1611, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1612, "01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1613, " - assigned value for \"Warning\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1614, " A \"Warning\" alert is informational. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1615, "span", 40)(1616, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1617, "Alert Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1618, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1619, " 00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1620, "div", 12)(1621, "ul")(1622, "li")(1623, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1624, "00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1625, " - assigned value for \"Close Notify\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1626, " This message notifies the recipient that the sender will not send any more messages on this connection. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1627, "div", 42)(1628, "div", 43)(1629, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1630, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1631, "div", 45)(1632, "button", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1633, "Show Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1634, "button", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1635, "Annotations");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1636, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1637, " [print] ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("if vers == 0 ", "{", "\n            // Some TLS servers fail if the record version is\n            // greater than TLS 1.0 for the initial ClientHello.\n            vers = VersionTLS10\n        ", "}", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1005);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("### set up our PreMasterSecret as a hex string\n        $ pmshex=df4a291baa1eb7cfa6934b29b474baad\n        $ pmshex=$", "{", "pmshex", "}", "2697e29f1f920dcc77c8a0a088447624\n        ### client random from Client Hello\n        $ echo -en '\\x00\\x01\\x02\\x03\\x04\\x05\\x06\\x07' >  /tmp/c_rand\n        $ echo -en '\\x08\\x09\\x0a\\x0b\\x0c\\x0d\\x0e\\x0f' >> /tmp/c_rand\n        $ echo -en '\\x10\\x11\\x12\\x13\\x14\\x15\\x16\\x17' >> /tmp/c_rand\n        $ echo -en '\\x18\\x19\\x1a\\x1b\\x1c\\x1d\\x1e\\x1f' >> /tmp/c_rand\n        ### server random from Server Hello\n        $ echo -en '\\x70\\x71\\x72\\x73\\x74\\x75\\x76\\x77' >  /tmp/s_rand\n        $ echo -en '\\x78\\x79\\x7a\\x7b\\x7c\\x7d\\x7e\\x7f' >> /tmp/s_rand\n        $ echo -en '\\x80\\x81\\x82\\x83\\x84\\x85\\x86\\x87' >> /tmp/s_rand\n        $ echo -en '\\x88\\x89\\x8a\\x8b\\x8c\\x8d\\x8e\\x8f' >> /tmp/s_rand\n        ### build the seed\n        $ echo -en 'master secret' > /tmp/seed\n        $ cat /tmp/c_rand /tmp/s_rand >> /tmp/seed\n        ### a0 is the same as the seed\n        $ cat /tmp/seed > /tmp/a0\n        ### a(n) is hmac-sha256(key=secret, data=a(n-1))\n        $ cat /tmp/a0 | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$pmshex -binary > /tmp/a1\n        $ cat /tmp/a1 | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$pmshex -binary > /tmp/a2\n        ### p(n) is hmac-sha256(key=secret, data=a(n)+seed)\n        $ cat /tmp/a1 /tmp/seed | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$pmshex -binary > /tmp/p1\n        $ cat /tmp/a2 /tmp/seed | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$pmshex -binary > /tmp/p2\n        ### first 48 bytes is MasterSecret\n        $ cat /tmp/p1 /tmp/p2 | head -c 48 > /tmp/mastersecret\n        $ hexdump /tmp/mastersecret\n    \n        0000000 91 6a bf 9d a5 59 73 e1 36 14 ae 0a 3f 5d 3f 37\n        0000010 b0 23 ba 12 9a ee 02 cc 91 34 33 81 27 cd 70 49\n        0000020 78 1c 8e 19 fc 1e b2 a7 38 7a c0 6a e2 37 34 4c\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](206);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("### set up our PreMasterSecret as a hex string\n        $ pmshex=df4a291baa1eb7cfa6934b29b474baad\n        $ pmshex=$", "{", "pmshex", "}", "2697e29f1f920dcc77c8a0a088447624\n        ### client random from Client Hello\n        $ echo -en '\\x00\\x01\\x02\\x03\\x04\\x05\\x06\\x07' >  /tmp/c_rand\n        $ echo -en '\\x08\\x09\\x0a\\x0b\\x0c\\x0d\\x0e\\x0f' >> /tmp/c_rand\n        $ echo -en '\\x10\\x11\\x12\\x13\\x14\\x15\\x16\\x17' >> /tmp/c_rand\n        $ echo -en '\\x18\\x19\\x1a\\x1b\\x1c\\x1d\\x1e\\x1f' >> /tmp/c_rand\n        ### server random from Server Hello\n        $ echo -en '\\x70\\x71\\x72\\x73\\x74\\x75\\x76\\x77' >  /tmp/s_rand\n        $ echo -en '\\x78\\x79\\x7a\\x7b\\x7c\\x7d\\x7e\\x7f' >> /tmp/s_rand\n        $ echo -en '\\x80\\x81\\x82\\x83\\x84\\x85\\x86\\x87' >> /tmp/s_rand\n        $ echo -en '\\x88\\x89\\x8a\\x8b\\x8c\\x8d\\x8e\\x8f' >> /tmp/s_rand\n        ### build the seed\n        $ echo -en 'master secret' > /tmp/seed\n        $ cat /tmp/c_rand /tmp/s_rand >> /tmp/seed\n        ### a0 is the same as the seed\n        $ cat /tmp/seed > /tmp/a0\n        ### a(n) is hmac-sha256(key=secret, data=a(n-1))\n        $ cat /tmp/a0 | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$pmshex -binary > /tmp/a1\n        $ cat /tmp/a1 | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$pmshex -binary > /tmp/a2\n        ### p(n) is hmac-sha256(key=secret, data=a(n)+seed)\n        $ cat /tmp/a1 /tmp/seed | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$pmshex -binary > /tmp/p1\n        $ cat /tmp/a2 /tmp/seed | openssl dgst -sha256 \\\n        -mac HMAC -macopt hexkey:$pmshex -binary > /tmp/p2\n        ### first 48 bytes is MasterSecret\n        $ cat /tmp/p1 /tmp/p2 | head -c 48 > /tmp/mastersecret\n        $ hexdump /tmp/mastersecret\n    \n        0000000 91 6a bf 9d a5 59 73 e1 36 14 ae 0a 3f 5d 3f 37\n        0000010 b0 23 ba 12 9a ee 02 cc 91 34 33 81 27 cd 70 49\n        0000020 78 1c 8e 19 fc 1e b2 a7 38 7a c0 6a e2 37 34 4c\n        ");
    }
  },
  styles: ["body[_ngcontent-%COMP%]:not(.user-is-tabbing)   button[_ngcontent-%COMP%]:focus, body[_ngcontent-%COMP%]:not(.user-is-tabbing)   input[_ngcontent-%COMP%]:focus, body[_ngcontent-%COMP%]:not(.user-is-tabbing)   select[_ngcontent-%COMP%]:focus, body[_ngcontent-%COMP%]:not(.user-is-tabbing)   textarea[_ngcontent-%COMP%]:focus {\n\toutline: none;\n}\n\nbody[_ngcontent-%COMP%] {\n\t\n\tposition: relative;\n}\n\n.container[_ngcontent-%COMP%] {\n\t\n\toverflow: auto;\n}\n\n\n@media (max-width: 600px) {\n\t.illustration[_ngcontent-%COMP%] {\n\t\tdisplay: none !important;\n\t}\n\t.print-mode[_ngcontent-%COMP%] {\n\t\tdisplay: none;\n\t}\n}\n\nh1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n\ttext-align: center;\n\tpadding: 10px;\n\tmax-width: 800px;\n\tmargin: 0 auto;\n}\n\npre[_ngcontent-%COMP%] {\n\tmargin: 1em 0;\n\toverflow: scroll;\n\t-ms-overflow-style: scrollbar;\n}\n\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n\tfont-size: inherit;\n\tword-break: normal;\n\tdisplay: block;\n\tcolor: white;\n\tbackground-color: black;\n\tpadding: 0.5em;\n\tborder-radius: 5px;\n\toverflow: scroll;\n\t-ms-overflow-style: scrollbar;\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], dl[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n\ntt.longboi[_ngcontent-%COMP%] {\n\tword-break: break-all;\n}\n\n.ind1[_ngcontent-%COMP%] {\n\tpadding-left: 1em;\n}\n.ind2[_ngcontent-%COMP%] {\n\tpadding-left: 2em;\n}\n\n.outerblock[_ngcontent-%COMP%] {\n\tmax-width: 600px;\n\tmargin: 1em auto;\n}\n.outerblock[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n\ttext-align: center;\n}\n\n.server[_ngcontent-%COMP%] {\n\tbackground-color: rgb(208, 17, 17)\n}\n\n.client[_ngcontent-%COMP%] {\n\tbackground-color: rgb(223, 124, 10)\n}\n\n\n\n.rec-outer[_ngcontent-%COMP%] {\n\tmax-width: 800px;\n\tmargin: 0.8em auto;\n}\n\n.record[_ngcontent-%COMP%], .calculation[_ngcontent-%COMP%] {\n\tcursor: pointer;\n\tmax-width: 800px;\n\tpadding: 1em;\n\tborder-radius: 1em;\n\tborder: 2px solid transparent;\n}\n\n\n.record.selected[_ngcontent-%COMP%], .calculation.selected[_ngcontent-%COMP%] {\n\tcursor: inherit;\n\tbox-shadow: rgba(0, 0, 0, 0.3) 2px 2px 2px;\n}\n\n.record.selected[_ngcontent-%COMP%]   .rec-label[_ngcontent-%COMP%], .calculation.selected[_ngcontent-%COMP%]   .rec-label[_ngcontent-%COMP%] {\n\tpadding: 0 0 10px 0;\n\twidth: 0;\n}\n\n.record[_ngcontent-%COMP%]   .record-data[_ngcontent-%COMP%] {\n\tfont-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n\tdisplay: none;\n\tposition: relative;\n}\n\n.record.selected[_ngcontent-%COMP%]   .record-data[_ngcontent-%COMP%] {\n\tdisplay: block;\n}\n\n.record[_ngcontent-%COMP%]:hover, .calculation[_ngcontent-%COMP%]:hover {\n\tborder: 2px solid #666;\n}\n.record.selected[_ngcontent-%COMP%]:hover, .calculation.selected[_ngcontent-%COMP%]:hover {\n\tborder: 2px solid transparent;\n}\n\n.rec-explanation[_ngcontent-%COMP%] {\n\tdisplay: none;\n\tmargin-bottom: 1em;\n}\n.selected[_ngcontent-%COMP%]   .rec-explanation[_ngcontent-%COMP%] {\n\tdisplay: block;\n}\n\n.record[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%], .calculation[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n\tmargin: -40px 0 0 0;\n\tdisplay: none;\n\tfloat: right;\n}\n.record.selected[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%], .calculation.selected[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n\tdisplay: block;\n}\n\n.record[_ngcontent-%COMP%]    > button.annotate-toggle[_ngcontent-%COMP%] {\n\tdisplay: none;\n}\n.record.selected[_ngcontent-%COMP%]    > button.annotate-toggle[_ngcontent-%COMP%] {\n\tdisplay: block;\n}\n\n\n\n.client[_ngcontent-%COMP%]   .record-data[_ngcontent-%COMP%]   .string[_ngcontent-%COMP%]:hover {\n\tcolor: teal;\n}\n.server[_ngcontent-%COMP%]   .record-data[_ngcontent-%COMP%]   .string[_ngcontent-%COMP%]:hover {\n\tcolor: darkgreen;\n}\n\n\n.record-data[_ngcontent-%COMP%]   .string[_ngcontent-%COMP%] {\n\tposition: relative;\n}\n\n.record-data[_ngcontent-%COMP%]   .string[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n\tdisplay: none;\n\tposition: absolute;\n\tbackground-color: #FAF7DC;\n\tborder-radius: 5px;\n\tmargin: 2px 0;\n\tpadding: 2px 7px;\n\tline-height: 1.2;\n\twhite-space: nowrap;\n\ttop: -28px;\n\tbox-shadow: rgba(0, 0, 0, 0.3) 2px 2px 2px;\n}\n.record-data[_ngcontent-%COMP%]   .string[_ngcontent-%COMP%]:hover    > .label[_ngcontent-%COMP%] {\n\tdisplay: inline;\n}\n\n.record-data[_ngcontent-%COMP%]   .string[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:after {\n\tcontent: \"\";\n\tposition: absolute;\n\tbox-shadow: rgba(0, 0, 0, 0.3) 2px 2px 2px;\n\ttransform: rotate(45deg);\n\tbottom: -3px;\n\tleft: 10px;\n\tborder-width: 3px;\n\tborder-style: solid;\n\tborder-color: transparent #FAF7DC #FAF7DC transparent;\n}\n\n.record.annotate[_ngcontent-%COMP%]   .string[_ngcontent-%COMP%]    > .explanation[_ngcontent-%COMP%], .record.annotate[_ngcontent-%COMP%]   .decryption[_ngcontent-%COMP%]    > .explanation[_ngcontent-%COMP%] {\n\tposition: relative;\n\tdisplay: block;\n\tfont-size: 0.9em;\n\tcolor: black;\n\tmargin: 1em 0;\n\tpadding: 1em;\n\tbackground-color: #FAF7DC;\n\tborder: 2px solid #e0d998;\n\tborder-radius: 1em;\n\tbox-shadow: rgba(0, 0, 0, 0.3) 2px 2px 2px;\n}\n\n.record.annotate[_ngcontent-%COMP%]   .string[_ngcontent-%COMP%]    > .explanation[_ngcontent-%COMP%]:before {\n\tcontent: \" \";\n\tposition: absolute;\n\tpadding: 5px;\n\ttransform: rotate(45deg);\n\ttop: -7px;\n\tleft: 20px;\n\tborder: 2px solid;\n\tbackground-color: #FAF7DC;\n\tborder-color: #e0d998 transparent transparent #e0d998;\n}\n\n.record.annotate[_ngcontent-%COMP%]   .string[_ngcontent-%COMP%]    > .label[_ngcontent-%COMP%] {\n\tdisplay: none;\n}\n\n.record[_ngcontent-%COMP%]   .string[_ngcontent-%COMP%]    > .explanation[_ngcontent-%COMP%], .record[_ngcontent-%COMP%]   .decryption[_ngcontent-%COMP%]    > .explanation[_ngcontent-%COMP%] {\n\tdisplay: none;\n}\n\n\n.string.encrypted[_ngcontent-%COMP%]   .bytes[_ngcontent-%COMP%] {\n\ttext-shadow: 1px 1px 0px red;\n}\n\n.string.decrypted[_ngcontent-%COMP%]   .bytes[_ngcontent-%COMP%] {\n\ttext-shadow: 1px 1px 0px green;\n}\n\n.record-data[_ngcontent-%COMP%]   .decryption[_ngcontent-%COMP%] {\n\tmargin: 1em 0;\n}\n\n.record-data[_ngcontent-%COMP%]   .decryption[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n\ttext-align: center;\n}\n\n\n\n.codesample[_ngcontent-%COMP%] {\n\tdisplay: block;\n\tmargin: 1em 0;\n}\n\n.codesample[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n\tmargin: 0;\n\theight: 0;\n}\n\n.codesample[_ngcontent-%COMP%]   button.show-code[_ngcontent-%COMP%] {\n\tdisplay: block;\n\tclear: both;\n\tbox-shadow: inset 0px 1px 3px 0px #91b8b3;\n\tbackground: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);\n\tbackground-color: #768d87;\n\tborder-radius:5px;\n\tborder: 1px solid #566963;\n\tcursor: pointer;\n\tcolor: #ffffff;\n\tfont-family: Arial;\n\tfont-size: 15px;\n\tfont-weight: bold;\n\tpadding: 11px 23px;\n\ttext-decoration: none;\n\ttext-shadow: 0px -1px 0px #2b665e;\n}\n\n.codesample[_ngcontent-%COMP%]   button.show-code[_ngcontent-%COMP%]:hover:hover {\n\tbackground: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);\n\tbackground-color: #6c7c7c;\n}\n.codesample[_ngcontent-%COMP%]   button.show-code[_ngcontent-%COMP%]:active {\n\tposition: relative;\n\ttop: 1px;\n}\n.codesample.show[_ngcontent-%COMP%]   button.show-code[_ngcontent-%COMP%] {\n\tdisplay: none;\n}\n.codesample.show[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n\theight: auto;\n}\n\n\n\nbutton.annotate-toggle[_ngcontent-%COMP%] {\n\tmargin-bottom: 1em;\n\n\tdisplay: inline-block;\n\toutline: none;\n\tcursor: pointer;\n\ttext-align: center;\n\ttext-decoration: none;\n\tfont: Arial, Helvetica, sans-serif;\n\tfont-size: 1em;\n\tpadding: .4em 1.7em .45em;\n\ttext-shadow: 0 1px 1px rgba(0,0,0,.4);\n\tborder-radius: .5em;\n\tbox-shadow: 1px 1px 1px rgba(0,0,0,.3);\n\n\tcolor: #fff;\n\tborder: solid 1px #da7c0c;\n\tbackground: #f78d1d;\n\tbackground: -moz-linear-gradient(top,  #faa51a,  #f47a20);\n\tfilter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#faa51a', endColorstr='#f47a20');\n}\nbutton.annotate-toggle[_ngcontent-%COMP%]:hover {\n\ttext-decoration: none;\n\n\tbackground: #f47c20;\n\tbackground: -moz-linear-gradient(top,  #f88e11,  #f06015);\n\tfilter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#f88e11', endColorstr='#f06015');\n}\nbutton.annotate-toggle[_ngcontent-%COMP%]:active {\n\tposition: relative;\n\ttop: 1px;\n}\n\n.print-mode[_ngcontent-%COMP%] {\n\tcursor: pointer;\n\tposition: absolute;\n\tpadding: 5px;\n\tbottom: 0;\n\tright: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jc2MzNDAvaWxsdXN0cmF0ZWQvaWxsdXN0cmF0ZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvSEFBb0g7O0FBRXBILDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUM7Ozs7Q0FJQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsY0FBYztDQUNkLGNBQWM7QUFDZjs7QUFFQSw2Q0FBNkM7QUFDN0M7Q0FDQztFQUNDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0MsYUFBYTtDQUNkO0FBQ0Q7O0FBRUE7OztDQUdDLENBQUM7OztDQUdELENBQUM7Q0FDRCxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLFlBQVk7Q0FDWix1QkFBdUI7Q0FDdkIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsNkJBQTZCO0FBQzlCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUEscUNBQXFDOztBQUVyQztDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsNkJBQTZCO0FBQzlCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXVCQztBQUNEOztDQUVDLGVBQWU7Q0FDZiwwQ0FBMEM7QUFDM0M7O0FBRUE7O0NBRUMsbUJBQW1CO0NBQ25CLFFBQVE7QUFDVDtBQUNBOzs7Ozs7Q0FNQztBQUNEO0NBQ0MsOERBQThEO0NBQzlELGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7O0NBRUMsc0JBQXNCO0FBQ3ZCO0FBQ0E7O0NBRUMsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUVBOztDQUVDLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsY0FBYztBQUNmOztBQUVBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUEseUJBQXlCOztBQUV6QjtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7O0dBRUc7O0FBRUg7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDViwwQ0FBMEM7QUFDM0M7QUFDQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLDBDQUEwQztDQUsxQyx3QkFBd0I7Q0FDeEIsWUFBWTtDQUNaLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLHFEQUFxRDtBQUN0RDs7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osYUFBYTtDQUNiLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQiwwQ0FBMEM7QUFDM0M7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFlBQVk7Q0FLWix3QkFBd0I7Q0FDeEIsU0FBUztDQUNULFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIseUJBQXlCO0NBQ3pCLHFEQUFxRDtBQUN0RDs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTs7Q0FFQyxhQUFhO0FBQ2Q7O0FBRUE7Ozs7OztDQU1DO0FBQ0Q7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUEsdUJBQXVCOztBQUV2QjtDQUNDLGNBQWM7Q0FDZCxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsU0FBUztBQUNWOztBQUVBO0NBQ0MsY0FBYztDQUNkLFdBQVc7Q0FDWCx5Q0FBeUM7Q0FDekMsZ0VBQWdFO0NBQ2hFLHlCQUF5QjtDQUN6QixpQkFBaUI7Q0FDakIseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQyxnRUFBZ0U7Q0FDaEUseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtBQUNUO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLFlBQVk7QUFDYjs7QUFFQSxxQ0FBcUM7O0FBRXJDO0NBQ0Msa0JBQWtCOztDQUVsQixxQkFBcUI7Q0FDckIsYUFBYTtDQUNiLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGtDQUFrQztDQUNsQyxjQUFjO0NBQ2QseUJBQXlCO0NBQ3pCLHFDQUFxQztDQUNyQyxtQkFBbUI7Q0FDbkIsc0NBQXNDOztDQUV0QyxXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUVuQix5REFBeUQ7Q0FDekQsbUdBQW1HO0FBQ3BHO0FBQ0E7Q0FDQyxxQkFBcUI7O0NBRXJCLG1CQUFtQjtDQUVuQix5REFBeUQ7Q0FDekQsbUdBQW1HO0FBQ3BHO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtBQUNUOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osU0FBUztDQUNULFFBQVE7QUFDVCIsInNvdXJjZXNDb250ZW50IjpbIi8qICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNNYXRlcmlhbHMgRGVjb3JhdGlvbnMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAqL1xuXG4vKiByZW1vdmUgZm9jdXMgcmluZ3MgZm9yIG5vbi1rZXlib2FyZCB1c2VycyAqL1xuLyogcmVtb3ZlIGZvY3VzIHJpbmdzIGZvciBub24ta2V5Ym9hcmQgdXNlcnMgKi9cbmJvZHk6bm90KC51c2VyLWlzLXRhYmJpbmcpIGJ1dHRvbjpmb2N1cyxcbmJvZHk6bm90KC51c2VyLWlzLXRhYmJpbmcpIGlucHV0OmZvY3VzLFxuYm9keTpub3QoLnVzZXItaXMtdGFiYmluZykgc2VsZWN0OmZvY3VzLFxuYm9keTpub3QoLnVzZXItaXMtdGFiYmluZykgdGV4dGFyZWE6Zm9jdXMge1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG5ib2R5IHtcblx0LyogcHJpbnRtb2RlICovXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRhaW5lciB7XG5cdC8qIHByaW50bW9kZSAqL1xuXHRvdmVyZmxvdzogYXV0bztcbn1cblxuLyogaGlkZSBrZXlzIHdoZW4gdGhlcmUgaXMgbm8gcm9vbSBmb3IgdGhlbSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cdC5pbGx1c3RyYXRpb24ge1xuXHRcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcblx0fVxuXHQucHJpbnQtbW9kZSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG4vKmgxOmFmdGVyIHtcblx0Y29udGVudDogXCJcXDAwYTDDg8Kiw4LCncOCwqdcIjtcbn1cbiovLypoMTpiZWZvcmUge1xuXHRjb250ZW50OiBcIsODwqLDgsKdw4LCp1xcMDBhMFwiO1xufVxuKi9oMSwgaDMge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdG1heC13aWR0aDogODAwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xufVxuXG5wcmUge1xuXHRtYXJnaW46IDFlbSAwO1xuXHRvdmVyZmxvdzogc2Nyb2xsO1xuXHQtbXMtb3ZlcmZsb3ctc3R5bGU6IHNjcm9sbGJhcjtcbn1cblxucHJlIGNvZGUge1xuXHRmb250LXNpemU6IGluaGVyaXQ7XG5cdHdvcmQtYnJlYWs6IG5vcm1hbDtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGNvbG9yOiB3aGl0ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdHBhZGRpbmc6IDAuNWVtO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdG92ZXJmbG93OiBzY3JvbGw7XG5cdC1tcy1vdmVyZmxvdy1zdHlsZTogc2Nyb2xsYmFyO1xufVxuXG5vbCwgdWwsIGRsIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbnR0Lmxvbmdib2kge1xuXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5pbmQxIHtcblx0cGFkZGluZy1sZWZ0OiAxZW07XG59XG4uaW5kMiB7XG5cdHBhZGRpbmctbGVmdDogMmVtO1xufVxuXG4ub3V0ZXJibG9jayB7XG5cdG1heC13aWR0aDogNjAwcHg7XG5cdG1hcmdpbjogMWVtIGF1dG87XG59XG4ub3V0ZXJibG9jayBwIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VydmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMTcsIDE3KVxufVxuXG4uY2xpZW50IHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMTI0LCAxMClcbn1cblxuLyoqKioqIC5yZWNvcmQgYW5kIC5jYWxjdWxhdGlvbiAqKioqKi9cblxuLnJlYy1vdXRlciB7XG5cdG1heC13aWR0aDogODAwcHg7XG5cdG1hcmdpbjogMC44ZW0gYXV0bztcbn1cblxuLnJlY29yZCwgLmNhbGN1bGF0aW9uIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRtYXgtd2lkdGg6IDgwMHB4O1xuXHRwYWRkaW5nOiAxZW07XG5cdGJvcmRlci1yYWRpdXM6IDFlbTtcblx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi8qLmlsbHVzdHJhdGVkIC5zZXJ2ZXIucmVjb3JkIC5yZWMtbGFiZWw6YmVmb3JlIHtcblx0Y29udGVudDogXCLDg8Kiw6LCgMKhw6LCgMKhIFwiO1xufVxuLmlsbHVzdHJhdGVkIC5jbGllbnQucmVjb3JkIC5yZWMtbGFiZWw6YmVmb3JlIHtcblx0Y29udGVudDogXCLDg8Kiw6LCgMKhw6LCgMKwIFwiO1xufVxuLmlsbHVzdHJhdGVkIC5jYWxjdWxhdGlvbiAucmVjLWxhYmVsOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiw4PCg8OCwrcgXCI7XG59XG5cbi5yZWMtbGFiZWwge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGZvbnQtc2l6ZTogMS4zZW07XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogMTAwJTtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4qL1xuLnJlY29yZC5zZWxlY3RlZCxcbi5jYWxjdWxhdGlvbi5zZWxlY3RlZCB7XG5cdGN1cnNvcjogaW5oZXJpdDtcblx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDJweCAycHggMnB4O1xufVxuXG4ucmVjb3JkLnNlbGVjdGVkIC5yZWMtbGFiZWwsXG4uY2FsY3VsYXRpb24uc2VsZWN0ZWQgLnJlYy1sYWJlbCB7XG5cdHBhZGRpbmc6IDAgMCAxMHB4IDA7XG5cdHdpZHRoOiAwO1xufVxuLyouaWxsdXN0cmF0ZWQgLnJlY29yZC5zZWxlY3RlZCAucmVjLWxhYmVsOmFmdGVyLFxuLmlsbHVzdHJhdGVkIC5jYWxjdWxhdGlvbi5zZWxlY3RlZCAucmVjLWxhYmVsOmFmdGVyIHtcblx0Y29udGVudDogXCIgw4PCg8OiwoDClFwiO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuKi9cbi5yZWNvcmQgLnJlY29yZC1kYXRhIHtcblx0Zm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcblx0ZGlzcGxheTogbm9uZTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmVjb3JkLnNlbGVjdGVkIC5yZWNvcmQtZGF0YSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucmVjb3JkOmhvdmVyLFxuLmNhbGN1bGF0aW9uOmhvdmVyIHtcblx0Ym9yZGVyOiAycHggc29saWQgIzY2Njtcbn1cbi5yZWNvcmQuc2VsZWN0ZWQ6aG92ZXIsXG4uY2FsY3VsYXRpb24uc2VsZWN0ZWQ6aG92ZXIge1xuXHRib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnJlYy1leHBsYW5hdGlvbiB7XG5cdGRpc3BsYXk6IG5vbmU7XG5cdG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5zZWxlY3RlZCAucmVjLWV4cGxhbmF0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5yZWNvcmQgLmlsbHVzdHJhdGlvbixcbi5jYWxjdWxhdGlvbiAuaWxsdXN0cmF0aW9uIHtcblx0bWFyZ2luOiAtNDBweCAwIDAgMDtcblx0ZGlzcGxheTogbm9uZTtcblx0ZmxvYXQ6IHJpZ2h0O1xufVxuLnJlY29yZC5zZWxlY3RlZCAuaWxsdXN0cmF0aW9uLFxuLmNhbGN1bGF0aW9uLnNlbGVjdGVkIC5pbGx1c3RyYXRpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLnJlY29yZCA+IGJ1dHRvbi5hbm5vdGF0ZS10b2dnbGUge1xuXHRkaXNwbGF5OiBub25lO1xufVxuLnJlY29yZC5zZWxlY3RlZCA+IGJ1dHRvbi5hbm5vdGF0ZS10b2dnbGUge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLyoqKioqIC5yZWNvcmQtZGF0YSAqKioqKi9cblxuLmNsaWVudCAucmVjb3JkLWRhdGEgLnN0cmluZzpob3ZlciB7XG5cdGNvbG9yOiB0ZWFsO1xufVxuLnNlcnZlciAucmVjb3JkLWRhdGEgLnN0cmluZzpob3ZlciB7XG5cdGNvbG9yOiBkYXJrZ3JlZW47XG59XG4vKiAucmVjb3JkLmFubm90YXRlIC5yZWNvcmQtZGF0YSAuc3RyaW5nOmhvdmVyIHtcblx0Y29sb3I6IGluaGVyaXQ7XG59ICovXG5cbi5yZWNvcmQtZGF0YSAuc3RyaW5nIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmVjb3JkLWRhdGEgLnN0cmluZyAubGFiZWwge1xuXHRkaXNwbGF5OiBub25lO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGQUY3REM7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0bWFyZ2luOiAycHggMDtcblx0cGFkZGluZzogMnB4IDdweDtcblx0bGluZS1oZWlnaHQ6IDEuMjtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0dG9wOiAtMjhweDtcblx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDJweCAycHggMnB4O1xufVxuLnJlY29yZC1kYXRhIC5zdHJpbmc6aG92ZXIgPiAubGFiZWwge1xuXHRkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5yZWNvcmQtZGF0YSAuc3RyaW5nIC5sYWJlbDphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDJweCAycHggMnB4O1xuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG5cdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG5cdC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXHRib3R0b206IC0zcHg7XG5cdGxlZnQ6IDEwcHg7XG5cdGJvcmRlci13aWR0aDogM3B4O1xuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNGQUY3REMgI0ZBRjdEQyB0cmFuc3BhcmVudDtcbn1cblxuLnJlY29yZC5hbm5vdGF0ZSAuc3RyaW5nID4gLmV4cGxhbmF0aW9uLFxuLnJlY29yZC5hbm5vdGF0ZSAuZGVjcnlwdGlvbiA+IC5leHBsYW5hdGlvbiB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMC45ZW07XG5cdGNvbG9yOiBibGFjaztcblx0bWFyZ2luOiAxZW0gMDtcblx0cGFkZGluZzogMWVtO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGN0RDO1xuXHRib3JkZXI6IDJweCBzb2xpZCAjZTBkOTk4O1xuXHRib3JkZXItcmFkaXVzOiAxZW07XG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKSAycHggMnB4IDJweDtcbn1cblxuLnJlY29yZC5hbm5vdGF0ZSAuc3RyaW5nID4gLmV4cGxhbmF0aW9uOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiIFwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHBhZGRpbmc6IDVweDtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG5cdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXHQtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG5cdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0dG9wOiAtN3B4O1xuXHRsZWZ0OiAyMHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZDtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZBRjdEQztcblx0Ym9yZGVyLWNvbG9yOiAjZTBkOTk4IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNlMGQ5OTg7XG59XG5cbi5yZWNvcmQuYW5ub3RhdGUgLnN0cmluZyA+IC5sYWJlbCB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yZWNvcmQgLnN0cmluZyA+IC5leHBsYW5hdGlvbixcbi5yZWNvcmQgLmRlY3J5cHRpb24gPiAuZXhwbGFuYXRpb24ge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4vKi5yZWNvcmQgLmRlY3J5cHRpb24gPiAubGFiZWw6YmVmb3JlIHtcblx0Y29udGVudDogXCLDg8Kiw4LCrMOiwoDCoSBcIjtcbn1cbi5yZWNvcmQgLmRlY3J5cHRpb24gPiAubGFiZWw6YWZ0ZXIge1xuXHRjb250ZW50OiBcIiDDg8Kiw4LCrMOiwoDCoVwiO1xufVxuKi9cbi5zdHJpbmcuZW5jcnlwdGVkIC5ieXRlcyB7XG5cdHRleHQtc2hhZG93OiAxcHggMXB4IDBweCByZWQ7XG59XG5cbi5zdHJpbmcuZGVjcnlwdGVkIC5ieXRlcyB7XG5cdHRleHQtc2hhZG93OiAxcHggMXB4IDBweCBncmVlbjtcbn1cblxuLnJlY29yZC1kYXRhIC5kZWNyeXB0aW9uIHtcblx0bWFyZ2luOiAxZW0gMDtcbn1cblxuLnJlY29yZC1kYXRhIC5kZWNyeXB0aW9uIC5sYWJlbCB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyoqKioqIGNvZGVzYW1wbGUgKioqKiovXG5cbi5jb2Rlc2FtcGxlIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG1hcmdpbjogMWVtIDA7XG59XG5cbi5jb2Rlc2FtcGxlIHByZSB7XG5cdG1hcmdpbjogMDtcblx0aGVpZ2h0OiAwO1xufVxuXG4uY29kZXNhbXBsZSBidXR0b24uc2hvdy1jb2RlIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGNsZWFyOiBib3RoO1xuXHRib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDNweCAwcHggIzkxYjhiMztcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzc2OGQ4NyA1JSwgIzZjN2M3YyAxMDAlKTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzc2OGQ4Nztcblx0Ym9yZGVyLXJhZGl1czo1cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICM1NjY5NjM7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Y29sb3I6ICNmZmZmZmY7XG5cdGZvbnQtZmFtaWx5OiBBcmlhbDtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0cGFkZGluZzogMTFweCAyM3B4O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdHRleHQtc2hhZG93OiAwcHggLTFweCAwcHggIzJiNjY1ZTtcbn1cblxuLmNvZGVzYW1wbGUgYnV0dG9uLnNob3ctY29kZTpob3Zlcjpob3ZlciB7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2YzdjN2MgNSUsICM3NjhkODcgMTAwJSk7XG5cdGJhY2tncm91bmQtY29sb3I6ICM2YzdjN2M7XG59XG4uY29kZXNhbXBsZSBidXR0b24uc2hvdy1jb2RlOmFjdGl2ZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAxcHg7XG59XG4uY29kZXNhbXBsZS5zaG93IGJ1dHRvbi5zaG93LWNvZGUge1xuXHRkaXNwbGF5OiBub25lO1xufVxuLmNvZGVzYW1wbGUuc2hvdyBwcmUge1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi8qKioqKiBhbm5vdGF0aW9uIHRvZ2dsZSBidXR0b24gKioqKiovXG5cbmJ1dHRvbi5hbm5vdGF0ZS10b2dnbGUge1xuXHRtYXJnaW4tYm90dG9tOiAxZW07XG5cblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRvdXRsaW5lOiBub25lO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRmb250OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXHRmb250LXNpemU6IDFlbTtcblx0cGFkZGluZzogLjRlbSAxLjdlbSAuNDVlbTtcblx0dGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC40KTtcblx0Ym9yZGVyLXJhZGl1czogLjVlbTtcblx0Ym94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwuMyk7XG5cblx0Y29sb3I6ICNmZmY7XG5cdGJvcmRlcjogc29saWQgMXB4ICNkYTdjMGM7XG5cdGJhY2tncm91bmQ6ICNmNzhkMWQ7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI2ZhYTUxYSksIHRvKCNmNDdhMjApKTtcblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZhYTUxYSwgICNmNDdhMjApO1xuXHRmaWx0ZXI6ICBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZhYTUxYScsIGVuZENvbG9yc3RyPScjZjQ3YTIwJyk7XG59XG5idXR0b24uYW5ub3RhdGUtdG9nZ2xlOmhvdmVyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG5cdGJhY2tncm91bmQ6ICNmNDdjMjA7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI2Y4OGUxMSksIHRvKCNmMDYwMTUpKTtcblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI2Y4OGUxMSwgICNmMDYwMTUpO1xuXHRmaWx0ZXI6ICBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2Y4OGUxMScsIGVuZENvbG9yc3RyPScjZjA2MDE1Jyk7XG59XG5idXR0b24uYW5ub3RhdGUtdG9nZ2xlOmFjdGl2ZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAxcHg7XG59XG5cbi5wcmludC1tb2RlIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHBhZGRpbmc6IDVweDtcblx0Ym90dG9tOiAwO1xuXHRyaWdodDogMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6067:
/*!*****************************************************!*\
  !*** ./src/app/courses/csc340/rsa/rsa.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RsaComponent": () => (/* binding */ RsaComponent)
/* harmony export */ });
/* harmony import */ var big_integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big-integer */ 5188);
/* harmony import */ var big_integer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_integer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
var _class;




function RsaComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Result: ", ctx_r0.result, "");
  }
}
class RsaComponent {
  constructor() {
    this.p = 3;
    this.q = 7;
    this.message = 'hello';
    this.result = '';
    this.memory = [];
    // Public key
    this.e = big_integer__WEBPACK_IMPORTED_MODULE_0__(0);
    this.n = big_integer__WEBPACK_IMPORTED_MODULE_0__(0);
    // Private key
    this.d = big_integer__WEBPACK_IMPORTED_MODULE_0__(0);
  }
  ngOnInit() {
    this.generateKeys();
  }
  // Generate keys
  generateKeys() {
    const p = big_integer__WEBPACK_IMPORTED_MODULE_0__(this.p);
    const q = big_integer__WEBPACK_IMPORTED_MODULE_0__(this.q);
    const phi = p.subtract(1).multiply(q.subtract(1)); // Euler's totient function
    this.n = p.multiply(q); // Compute modulus
    this.e = big_integer__WEBPACK_IMPORTED_MODULE_0__(this.choose(parseInt(phi.toString()))); // Choose public exponent
    this.d = this.modeinv(this.e, phi); // Compute modular multiplicative inverse of e mod phi
    console.log(phi.toString());
    console.log(this.n.toString());
    console.log(this.e.toString());
    console.log(this.d.toString());
  }
  modeinv(e, phi) {
    let temp = e.modInv(phi);
    let res = big_integer__WEBPACK_IMPORTED_MODULE_0__(0);
    if (temp.toString() == e.toString()) {
      res = temp.add(phi);
    }
    return res;
  }
  choose(phi) {
    for (let i = 2; i < phi; i++) {
      if (this.gcd(i, phi) == 1) {
        return i;
      }
    }
    return 0;
  }
  gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return this.gcd(b, a % b);
  }
  // Encrypt message
  encrypt() {
    this.memory = [];
    let result = '';
    for (let i = 0; i < this.message.length; i++) {
      const m = big_integer__WEBPACK_IMPORTED_MODULE_0__(this.message.charCodeAt(i) - 32); // Convert character to integer (subtract 32 to limit the range of characters)
      console.log(m);
      const c = m.modPow(this.e, this.n); // Encrypt character using public key
      let mint = m.toJSNumber();
      let nint = this.n.toJSNumber();
      this.memory.push(Math.floor(mint / nint));
      result += c.toString() + ' '; // Add encrypted character to result (separated by space)
    }

    this.result = result.trim(); // Trim the last space
  }
  // Decrypt message
  decrypt() {
    const ciphertextArray = this.result.trim().split(' ');
    console.log(this.memory);
    // Get array of ciphertext integers from input
    let message = '';
    for (let i = 0; i < ciphertextArray.length; i++) {
      const c = big_integer__WEBPACK_IMPORTED_MODULE_0__(ciphertextArray[i]); // Get ciphertext integer
      let m = c.modPow(this.d, this.n);
      let temp = m.toJSNumber();
      for (let j = 1; j <= this.memory[i]; j++) {
        temp += this.n.toJSNumber();
      }
      m = big_integer__WEBPACK_IMPORTED_MODULE_0__(temp);
      console.log(m);
      console.log(m.toJSNumber());
      message += String.fromCharCode(m.toJSNumber() + 32); // Convert decrypted integer to character (add 32 to undo the subtraction in encryption)
    }

    this.result = message.trim(); // Trim the decrypted message
  }
}
_class = RsaComponent;
_class.ɵfac = function RsaComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-rsa"]],
  decls: 27,
  vars: 7,
  consts: [["src", "./assets/images/RSA.gif", "alt", ""], ["for", "p"], ["id", "p", 3, "ngModel", "ngModelChange"], ["for", "q"], ["id", "q", 3, "ngModel", "ngModelChange"], ["for", "message"], ["id", "message", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "keypair"], [4, "ngIf"]],
  template: function RsaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div")(2, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Enter prime number p: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RsaComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.p = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Enter prime number q: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RsaComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.q = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Enter message to encrypt: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RsaComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.message = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RsaComponent_Template_button_click_14_listener() {
        return ctx.generateKeys();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Generate Keys");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RsaComponent_Template_button_click_22_listener() {
        return ctx.encrypt();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Encrypt");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RsaComponent_Template_button_click_24_listener() {
        return ctx.decrypt();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Decrypt");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, RsaComponent_div_26_Template, 3, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.p);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.q);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" (Public Key) e = ", ctx.e, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" (Public Key) n = ", ctx.n, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" (Private Key) d = ", ctx.d, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.result);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
  styles: [".keypair[_ngcontent-%COMP%]{\n    position: relative;\n    left: 40%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jc2MzNDAvcnNhL3JzYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYiIsInNvdXJjZXNDb250ZW50IjpbIi5rZXlwYWlye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA0MCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9983:
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;

class ErrorComponent {}
_class = ErrorComponent;
_class.ɵfac = function ErrorComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-error"]],
  decls: 5,
  vars: 0,
  consts: [[1, "container"]],
  template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404: Page Not Found!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The page you are looking for cannot be found or you do not have access to this page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".container[_ngcontent-%COMP%]{\n    text-align: center;\n    margin: 30px 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDMwcHggMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;

const _c0 = ["*"];
class FooterComponent {
  constructor() {
    this.isSticky = false;
    window.onscroll = () => {
      this.isSticky = window.pageYOffset > 0;
    };
  }
}
_class = FooterComponent;
_class.ɵfac = function FooterComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-footer"]],
  hostVars: 2,
  hostBindings: function FooterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("sticky-footer", ctx.isSticky);
    }
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/footer.component */ 970);
var _class;


class HomeComponent {
  constructor() {
    this.showFooter = false;
  }
  onWindowScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight + 5) {
      this.showFooter = true;
    } else {
      this.showFooter = false;
    }
  }
}
_class = HomeComponent;
_class.ɵfac = function HomeComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-home"]],
  hostBindings: function HomeComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) {
        return ctx.onWindowScroll($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    }
  },
  decls: 51,
  vars: 0,
  consts: [[1, "container"], [1, "intro"], [1, "header"], [1, "gif"], ["src", "./assets/aoma/aoma5.gif", "alt", "sqlgif.gif", "width", "600px"], [1, "section"], [1, "codegif"], ["src", "./assets/aoma/aoma3.gif", "alt", "codegif"], [1, "describe"], [1, "header2"], [1, "user"], [1, "u1"], [1, "userimg"], ["src", "./assets/images/vsl.png", "alt", "coderimg"], [1, "role"], ["src", "./assets/images/apl.png", "alt", "analystsimg"], [1, "footer-container"], [1, "footer-left"], ["href", "#"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Welcome to DePauw's Coding Playground!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Computer Science is for everyone");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5)(11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8)(14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Computer science emphasizes problem-solving through software and hardware across different sectors. DePauw CS alumni find opportunities in various industries and higher education. This webpage provides data structure study resources with visuals for DePauw CS courses and comprehensive information about all CSC courses at DePauw University, covering a wide range of CS concepts. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Who Can Use DePauw's Playground?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10)(20, "div", 11)(21, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Visualized Learning ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " This website offers visualizations of various data structures used in Computer Science, providing students with a more intuitive understanding of complex concepts. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11)(28, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Applied Learning ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " This website also offers coding practice problems transform theoretical concepts into practical skills, allowing students to actively engage with the subject matter and deepen their understanding. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "app-footer")(35, "div", 16)(36, "div", 17)(37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Copyright \u00A9 2023 DePauw University Computer Science Department");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li")(40, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li")(43, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li")(46, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Privacy Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li")(49, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Terms of Service");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
  styles: [".container[_ngcontent-%COMP%] {\n    width: 100%; \n    padding: 20px;\n    position: flex;\n}\n\n.intro[_ngcontent-%COMP%]{\n    display: flex;\n    width: 100%;\n    \n    height: 500px;\n}\n\n\n.gif[_ngcontent-%COMP%]{\n    width: 50%;\n}\n.gif[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    border-radius: 30px;\n}\n\n.header[_ngcontent-%COMP%]{\n    margin-top: 280px;\n    width: 50%;\n}\n.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    font-size: 64px;\n    color: #fff;\n    line-height: 1;\n}\np[_ngcontent-%COMP%]{\n  font-size: 30px;\n  font-weight: bold;\n  margin-bottom: 16%;\n}\n\n\n\n.section[_ngcontent-%COMP%]{\n    width: 100%;\n    height: -moz-fit-content;\n    height: fit-content;\n    align-items: center;\n    border-radius: 40px;\n    display: flex;\n    margin-bottom: 16%;\n}\n\n.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 95%;\n  font-size: 28px;\n  line-height: 2;\n  margin: 1%;\n  text-align: justify;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n.footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #333;\n}\n\n.footer-left[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: left;\n}\n.footer-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  margin-bottom: 0%;\n}\n\n\n\n\n.user[_ngcontent-%COMP%] {\n  display: flex; \n  justify-content: space-between; \n  width: 100%;\n  margin-bottom: 20%;\n}\n\n.u1[_ngcontent-%COMP%] {\n  flex: 1; \n  \n  text-align: center; \n  padding: 10px; \n  margin: 10px; \n  box-sizing: border-box; \n  height: 400px;\n}\n\n.userimg[_ngcontent-%COMP%] {\n  \n  border-radius: 40px;\n  padding: 10px; \n  margin-bottom: 10px; \n}\n.userimg[_ngcontent-%COMP%]:hover{\n  scale: 1.1\n}\n.userimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35%; \n  height: 35%; \n}\n\n\n.role[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 30px;\n}\n\n.describe[_ngcontent-%COMP%] {\n  color: #fff;\n  \n}\n.header2[_ngcontent-%COMP%]{\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXLEVBQUUsbUNBQW1DO0lBQ2hELGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUEseUJBQXlCOztBQUV6QjtJQUNJLFdBQVc7SUFDWCx3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsY0FBYztFQUNkLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7Ozs7O0FBS0EseUNBQXlDOzs7QUFHekMsNkJBQTZCOztBQUU3QixzQkFBc0I7Ozs7QUFJdEI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUdBLHFCQUFxQjs7QUFFckI7RUFDRSxhQUFhLEVBQUUsOENBQThDO0VBQzdELDhCQUE4QixFQUFFLHNEQUFzRDtFQUN0RixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTyxFQUFFLGtFQUFrRTtFQUMzRSwrQkFBK0I7RUFDL0Isa0JBQWtCLEVBQUUseUJBQXlCO0VBQzdDLGFBQWEsRUFBRSxpQ0FBaUM7RUFDaEQsWUFBWSxFQUFFLGdEQUFnRDtFQUM5RCxzQkFBc0IsRUFBRSx1RUFBdUU7RUFDL0YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixhQUFhLEVBQUUsNENBQTRDO0VBQzNELG1CQUFtQixFQUFFLHlDQUF5QztBQUNoRTtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsVUFBVSxFQUFFLHVEQUF1RDtFQUNuRSxXQUFXLEVBQUUsMkNBQTJDO0FBQzFEOztBQUVBLHlEQUF5RDtBQUN6RDtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlOyAvKiBBZGp1c3QgdGhlIG1heCB3aWR0aCBhcyBuZWVkZWQgKi9cbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBmbGV4O1xufVxuXG4uaW50cm97XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZSA7ICovXG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cblxuXG4uZ2lme1xuICAgIHdpZHRoOiA1MCU7XG59XG4uZ2lmIGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4uaGVhZGVye1xuICAgIG1hcmdpbi10b3A6IDI4MHB4O1xuICAgIHdpZHRoOiA1MCU7XG59XG4uaGVhZGVyIGgze1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lLWhlaWdodDogMTtcbn1cbnB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDE2JTtcbn1cblxuLyogU3R5bGUgZm9yIHBhcmFncmFwaHMgKi9cblxuLnNlY3Rpb257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNiU7XG59XG5cbi5zZWN0aW9uIHAge1xuICB3aWR0aDogOTUlO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBtYXJnaW46IDElO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5cblxuXG4vKiBTdHlsZXMgZm9yIHRoZSBhcnJvdyBjb25uZWN0aW5nIGRpdnMgKi9cblxuXG4vKiBTdHlsZXMgZm9yIHRoZSBjb250YWluZXIgKi9cblxuLyogRm9vdGVyIERlY29yYXRpb24gKi9cblxuXG5cbi5mb290ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuXG4uZm9vdGVyLWxlZnQge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5mb290ZXItY29udGFpbmVyIHB7XG4gIG1hcmdpbi1ib3R0b206IDAlO1xufVxuXG5cbi8qIERlY29yYXRlIHB1cnBvc2UgKi9cblxuLnVzZXIge1xuICBkaXNwbGF5OiBmbGV4OyAvKiBNYWtlIHRoZSAudXNlciBjb250YWluZXIgYSBmbGV4IGNvbnRhaW5lciAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIERpc3RyaWJ1dGUgdGhlIC51MSBlbGVtZW50cyB3aXRoIHNwYWNlIGluIGJldHdlZW4gKi9cbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwJTtcbn1cblxuLnUxIHtcbiAgZmxleDogMTsgLyogRWFjaCAudTEgZWxlbWVudCB0YWtlcyBlcXVhbCB3aWR0aCB3aXRoaW4gdGhlIC51c2VyIGNvbnRhaW5lciAqL1xuICAvKiBib3JkZXI6IDJweCBzb2xpZCBwdXJwbGU7ICAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlciBhbGlnbiBjb250ZW50ICovXG4gIHBhZGRpbmc6IDEwcHg7IC8qIEFkZCBzb21lIHBhZGRpbmcgZm9yIHNwYWNpbmcgKi9cbiAgbWFyZ2luOiAxMHB4OyAvKiBBZGQgbWFyZ2luIGZvciBzcGFjaW5nIGJldHdlZW4gLnUxIGVsZW1lbnRzICovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEluY2x1ZGUgcGFkZGluZyBhbmQgYm9yZGVyIGluIHRoZSBlbGVtZW50J3MgdG90YWwgd2lkdGggYW5kIGhlaWdodCAqL1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4udXNlcmltZyB7XG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7ICAqL1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBwYWRkaW5nOiAxMHB4OyAvKiBBZGQgcGFkZGluZyB0byB0aGUgdXNlciBpbWFnZSBjb250YWluZXIgKi9cbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyogQWRkIG1hcmdpbiBhdCB0aGUgYm90dG9tIGZvciBzcGFjaW5nICovXG59XG4udXNlcmltZzpob3ZlcntcbiAgc2NhbGU6IDEuMVxufVxuLnVzZXJpbWcgaW1nIHtcbiAgd2lkdGg6IDM1JTsgLyogTWFrZSB0aGUgaW1hZ2UgdGFrZSB1cCAxMDAlIG9mIHRoZSBjb250YWluZXIgd2lkdGggKi9cbiAgaGVpZ2h0OiAzNSU7IC8qIE1haW50YWluIHRoZSBhc3BlY3QgcmF0aW8gb2YgdGhlIGltYWdlICovXG59XG5cbi8qIEFkZGl0aW9uYWwgc3R5bGluZyBmb3IgLnJvbGUgYW5kIC5kZXNjcmliZSBpZiBuZWVkZWQgKi9cbi5yb2xlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmRlc2NyaWJlIHtcbiAgY29sb3I6ICNmZmY7XG4gIC8qIHRleHQtYWxpZ246IGp1c3RpZnk7ICovXG59XG4uaGVhZGVyMntcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map