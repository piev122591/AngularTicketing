import { BsModalService } from 'ngx-bootstrap/modal';
import { ErrorInfoComponent } from 'src/app/shared/modals/error-info/error-info.component';
import { environment } from 'src/environments/environment';

export function RestangularConfigFactory(
  RestangularProvider: any,
  modalService: BsModalService
) {
  //   const AuthToken = localStorage.getItem('mst.auth-token');

  //   let headers: any = {
  //     Authorization: 'Bearer ' + AuthToken,
  //     Locale: 'en',
  //     Offset: '1',
  //   };

  RestangularProvider.setBaseUrl(environment.api.endpoint);
  RestangularProvider.setPlainByDefault(true);
  //   RestangularProvider.setDefaultHeaders(headers);

  RestangularProvider.addErrorInterceptor(
    (response: any, subject: any, responseHandler: any) => {
      // console.log(response);

      if (response.status === 401) {
        // modalService.show(ExpiredTokenComponent, {
        //   class: 'gcc-modal',
        //   ignoreBackdropClick: true,
        //   keyboard: false,
        // });
      } else {
        // console.log(response);
        if (response.data) {
          modalService.show(ErrorInfoComponent, {
            class: 'gcc-modal',
            ignoreBackdropClick: true,
            initialState: {
              errors: response.data.ErrorMessages,
            },
          });
        }
      }

      return false;
    }
  );
}
