import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DataService} from "../../../../shared/services/data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  section !: any ;
  tutorId !: number;
  loadingSection : string = 'LOADING' ;

  loadingStates : string = 'LOADING' ;

  isCollapsed = false;
  isCollapsed1 = true;
  isCollapsedPayment = true;
  sppinerDeleteDisplaying : boolean = false

  active: number = 1;
  lang: string = "fr";



  cand ;
  constructor(
        // private sectionService : SectionService,
              //private usrUserService: UsrUserService,
              private route : Router,
              private toastr: ToastrService,
              private modalService: NgbModal,

              private dataService : DataService,

              private router: ActivatedRoute) {

    this.lang = this.dataService.currentUser.lang
    this.cand=this.router.paramMap.subscribe(params => {
      this.tutorId =  params.get('id') as unknown as number;
    });

  }









  userExist : boolean = true
  onGetSectionDetail() {
    // this.userExist = true
    // this.loadingSection = "LOADING" ;
    // this.sectionService.findSectionById(this.tutorId)
    //   .subscribe(
    //     (tutor) => {
    //       this.section = tutor
    //
    //     },
    //     (errorGettingByCode) => {
    //       this.route.navigate(['404'])
    //       this.loadingSection = "FINISHED"
    //     },
    //     () =>{
    //       if ( this.section !== null ) {
    //
    //         this.loadingSection = "FINISHED"
    //
    //       }else{
    //         this.loadingSection = "NO_DATA_FOUND"
    //       }
    //
    //     }
    //   );

  }


  identityType:any;
  IdentityName:any;




  navigateToSectionPage() {
    this.route.navigate(['wimSite/parametrage/section'] ) ;
  }

  editSection(row: any) {
    //
    // const dialogRef = this.modalService.open(AddEditSectionComponent, {
    //   size: "xl",
    //   backdrop: 'static',
    //   keyboard: false,
    // });
    // const data = {
    //   operation: "edit",
    //   section : row,
    //   item: {}
    // }
    // dialogRef.componentInstance.data = data;
    // dialogRef.componentInstance.onAddEdit.subscribe(() => {
    //   this.loadingStates = "LOADING" ;
    //   if ( this.section.length !== null) {
    //     this.loadingStates = "EMPTY" ;
    //   }else {
    //     this.loadingStates = "FINISHED" ;
    //   }
    // });
  }


  OncloseModal(addForm?: NgForm) {
    this.modalService.dismissAll();
    if( addForm !== undefined ) {
      addForm.reset()
    }
  }







  //===================   ========================================
// ===============================================================
  screenMode: string | undefined;
  @HostListener('window:resize', ['$event'])
  onResize() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 875) {
      this.screenMode = 'big';
    } else {
      this.screenMode = 'small';
    }
  }


  ngOnInit(): void {

    this.onResize()
    this.onGetSectionDetail();
  }

}
