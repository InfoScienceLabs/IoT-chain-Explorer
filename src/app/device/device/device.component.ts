import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Base64DecodePipe } from '../../pipes/base64-decode/base64-decode.pipe';
import { UIAceDataTransformPipe } from
  '../../pipes/ui-ace-data-transform/ui-ace-data-transform.pipe';

@Component({
  selector: 'device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss',
    '../../../styles/shared/_explorer-detail.scss'
  ],
  providers: [Base64DecodePipe, UIAceDataTransformPipe]
})

export class DeviceComponent implements OnInit {

  @Input() data = {};

  // data stringified for Angular UI Ace to display
  payloadJSON = '{}';

  // set default UI Ace display to show as plain text (no syntax highlighting)
  aceMode = 'text';

  /**
   * @param uiAceDataTransformPipe {UIAceDataTransformPipe} - used to transform
   * data into a format displayable by Angular UI Ace
   */
  constructor(private uiAceDataTransformPipe: UIAceDataTransformPipe) { }

  // ngOnInit needed in addition to ngOnChanges because when this view is
  // dynamically loaded as a component, ngOnInit fires, but ngOnChanges doesn't.
  ngOnInit() {
    // format payload for Angular UI Ace
    this.updatePayloadData(this.data);
  }

  ngOnChanges() {
    // format payload for Angular UI Ace
    this.updatePayloadData(this.data);
  }

  /**
   * Updates transaction payload so it can be displayed in UI Ace
   * @param payloadData - data representing the payload within a transaction
   */
  updatePayloadData(payloadData: any): void {
    // format payload for Angular UI Ace
    let formatRes = this.getFormatData(payloadData);
    this.payloadJSON = formatRes.data;
    this.aceMode = formatRes.aceDisplayMode;
  }

  /**
   * Gets formatting information needed for a transaction payload to be
   * displayed in string form.
   * @param payloadData - data representing the payload within a transaction
   * @returns {object} formatted transaction payload data
   */
  getFormatData(payloadData: any): any {
    let formatResult = this.uiAceDataTransformPipe.parseForUIAce(payloadData);
    return formatResult;
  }

}
