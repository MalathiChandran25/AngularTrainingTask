"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentdataService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var StudentdataService = /** @class */ (function () {
    function StudentdataService(http) {
        this.http = http;
        this.url = "http://localhost:3001/school/student-details";
    }
    StudentdataService.prototype.getdatas = function () {
        return this.http.get(this.url);
    };
    StudentdataService.prototype.addstudentdata = function (studentsdatas) {
        console.log("data come");
        console.log(studentsdatas);
        this.studentDataObject = studentsdatas;
        console.log("add datas");
        console.log(this.studentDataObject);
    };
    StudentdataService.prototype.getStudentData = function (name) {
        return rxjs_1.of(this.studentDataObject.find(function (student) { return student.Name === name; }));
    };
    StudentdataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], StudentdataService);
    return StudentdataService;
}());
exports.StudentdataService = StudentdataService;
