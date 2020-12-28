// thông tin case gốc
if (tw.local.semiAutoAccounting.messageInformation.isSingle) {
  tw.local.tracingInward.informationCaseOrigin.swiftCodeNo =
    tw.local.semiAutoAccounting.messageInformation.inforMT103.swiftCodeNo;
  tw.local.tracingInward.informationCaseOrigin.accountNostroNo =
    tw.local.semiAutoAccounting.messageInformation.inforMT103.accNumberT24;
  tw.local.tracingInward.informationCaseOrigin.field32aAmount =
    tw.local.semiAutoAccounting.messageInformation.inforMT103.field32aAmount;
  tw.local.tracingInward.informationCaseOrigin.field32aCurrency =
    tw.local.semiAutoAccounting.messageInformation.inforMT103.field32aCurrency;
} else {
  if (tw.local.semiAutoAccounting.typeOfMergeMessages == "join MT103 MT910") {
    tw.local.tracingInward.informationCaseOrigin.swiftCodeNo =
      tw.local.semiAutoAccounting.messageInformation.informationMT910.swiftCodeNo;
    tw.local.tracingInward.informationCaseOrigin.accountNostroNo =
      tw.local.semiAutoAccounting.messageInformation.informationMT910.accountNostroNo;
    tw.local.tracingInward.informationCaseOrigin.field32aAmount =
      tw.local.semiAutoAccounting.messageInformation.informationMT910.field32aAmount;
    tw.local.tracingInward.informationCaseOrigin.field32aCurrency =
      tw.local.semiAutoAccounting.messageInformation.informationMT910.field32aCurrency;
  } else {
    tw.local.tracingInward.informationCaseOrigin.swiftCodeNo =
      tw.local.semiAutoAccounting.messageInformation.ledgerInformation.swiftCodeLedger;
    tw.local.tracingInward.informationCaseOrigin.accountNostroNo =
      tw.local.semiAutoAccounting.messageInformation.ledgerInformation.accountNostroNoLedger;
    tw.local.tracingInward.informationCaseOrigin.field32aAmount =
      tw.local.semiAutoAccounting.messageInformation.ledgerInformation.field32aAmountLedger;
    tw.local.tracingInward.informationCaseOrigin.field32aCurrency =
      tw.local.semiAutoAccounting.messageInformation.ledgerInformation.field32aCurrencyLedger;
  }
}
tw.local.tracingInward.informationCaseOrigin.swiftCodeNoMerge =
  tw.local.semiAutoAccounting.messageInformation.inforMT103.swiftCodeNo;

var lengthEntry =
  tw.local.semiAutoAccounting.generalInformation.entryInformation.length;
if (
  tw.local.semiAutoAccounting.generalInformation.accountTransactionType ==
    "Tracing" ||
  tw.local.semiAutoAccounting.generalInformation.accountTransactionType ==
    "Credited" ||
  tw.local.semiAutoAccounting.generalInformation.accountTransactionType ==
    "Inner" ||
  tw.local.semiAutoAccounting.generalInformation.accountTransactionType ==
    "CreditedVostro"
) {
  if (lengthEntry > 0) {
    for (var i = 0; i < lengthEntry; i++) {
      if (
        tw.local.semiAutoAccounting.generalInformation.entryInformation[
          i
        ].entryType.indexOf("FT") != -1 ||
        tw.local.semiAutoAccounting.generalInformation.entryInformation[
          i
        ].entryType.indexOf("FX") != -1
      ) {
        tw.local.tracingInward.informationCaseOrigin.originAcc =
          tw.local.semiAutoAccounting.generalInformation.entryInformation[
            i
          ].entryNumber;
        break;
      }
    }
  }
}

tw.local.tracingInward.informationCaseOrigin.field20 =
  tw.local.semiAutoAccounting.messageInformation.inforMT103.field20;
tw.local.tracingInward.informationCaseOrigin.field32aValue =
  tw.local.semiAutoAccounting.messageInformation.inforMT103.field32aValue;
tw.local.tracingInward.informationCaseOrigin.field59BenAcc =
  tw.local.semiAutoAccounting.messageInformation.inforMT103.field59BenAcc;
tw.local.tracingInward.informationCaseOrigin.field59BenName =
  tw.local.semiAutoAccounting.messageInformation.inforMT103.field59BenName;
tw.local.tracingInward.informationCaseOrigin.field59Adress =
  tw.local.semiAutoAccounting.messageInformation.inforMT103.f59Address;
tw.local.tracingInward.informationCaseOrigin.field50 =
  tw.local.semiAutoAccounting.messageInformation.inforMT103.field50OrderingCustomer103;
tw.local.tracingInward.informationCaseOrigin.field52Ordering =
  tw.local.semiAutoAccounting.messageInformation.inforMT103.field52aOrderingInstitution103;
tw.local.tracingInward.informationCaseOrigin.field70 =
  tw.local.semiAutoAccounting.messageInformation.inforMT103.field70RemittanceInformation;
tw.local.tracingInward.informationCaseOrigin.field71DetailCharge =
  tw.local.semiAutoAccounting.messageInformation.inforMT103.field71aDetailsOfCharge;
tw.local.tracingInward.informationCaseOrigin.field72 =
  tw.local.semiAutoAccounting.messageInformation.inforMT103.field72SenderToReceiverInfor103;
tw.local.tracingInward.informationCaseOrigin.accSuspence =
  tw.local.semiAutoAccounting.generalInformation.suspenseNumber;
tw.local.tracingInward.informationCaseOrigin.idCustomer =
  tw.local.semiAutoAccounting.generalInformation.customerInformation.customerId;
tw.local.tracingInward.informationCaseOrigin.narratives11 =
  tw.local.semiAutoAccounting.messageInformation.narrative11;
tw.local.tracingInward.informationCaseOrigin.narratives33 =
  tw.local.semiAutoAccounting.messageInformation.narrative33;
tw.local.tracingInward.informationCaseOrigin.transactionCode =
  tw.local.semiAutoAccounting.transactionInfor.transactionCode;

tw.local.tracingInward.informationCaseOrigin.field33b =
  tw.local.semiAutoAccounting.messageInformation.inforMT103.field33bCurrencyInstructedAmount;
tw.local.tracingInward.informationCaseOrigin.field33bAmount =
  tw.local.semiAutoAccounting.messageInformation.inforMT103.field33bAmount;
tw.local.tracingInward.informationCaseOrigin.field33bCurrency =
  tw.local.semiAutoAccounting.messageInformation.inforMT103.field33bCurrency;

tw.local.tracingInward.inforHandlingInvest.feeInformation.customer.customerType =
  tw.local.semiAutoAccounting.generalInformation.customerInformation.customerType;
// Thông tin hồ sơ tra soát
tw.local.tracingInward.inforProfileInvest.branchCode =
  tw.local.semiAutoAccounting.generalInformation.branchMnemonic;
tw.local.tracingInward.inforProfileInvest.theSecondDateTracing =
  tw.local.semiAutoAccounting.generalInformation.investTerm;
tw.local.tracingInward.inforProfileInvest.errorTypeTracingBranch = [];
tw.local.tracingInward.inforProfileInvest.errorTypeTracingBranch =
  tw.local.semiAutoAccounting.generalInformation.tracingType; //Loại lỗi tra soát chi nhánh
tw.local.tracingInward.inforProfileInvest.errorTypeTracingForeign =
  tw.local.semiAutoAccounting.generalInformation.foreignTracingType; //Loại lỗi tra soát nước ngoài
//check null merge
//if (!!tw.local.tracingInward.inforProfileInvest.errorTypeTracingForeign) {
//    var tempErrorTypeTracingMerge = tw.local.tracingInward.inforProfileInvest.errorTypeTracingBranch.concat(tw.local.tracingInward.inforProfileInvest.errorTypeTracingForeign);
//} else {
//    var tempErrorTypeTracingMerge = tw.local.tracingInward.inforProfileInvest.errorTypeTracingBranch;
//}
//if (!!tempErrorTypeTracingMerge && tempErrorTypeTracingMerge.length > 0) {
//    for (var i = 0; i < tempErrorTypeTracingMerge.length; i++) {
//        if (!!tempErrorTypeTracingMerge[i] && !!tempErrorTypeTracingMerge[i].name) {
//            tw.local.tracingInward.inforProfileInvest.errorTypeTracingMerge.push(tempErrorTypeTracingMerge[i]);
//        }
//    }
//}
//console.log(tw.local.tracingInward.inforProfileInvest.errorTypeTracingMerge);

tw.local.tracingInward.inforProfileInvest.errorTypeTracingWorkList =
  tw.local.semiAutoAccounting.generalInformation.tracingTypeWorkList; //Loại lỗi tra soát worklist

tw.local.tracingInward.inforProfileInvest.tracingType =
  tw.local.semiAutoAccounting.generalInformation.investType; //Loại tra soát
if (
  !!tw.local.tracingInward.informationCaseOrigin.field59BenAcc &&
  tw.local.tracingInward.informationCaseOrigin.field59BenAcc.length == 14
) {
  tw.local.tracingInward.inforHandlingInvest.feeInformation.customer.customerId = tw.local.tracingInward.informationCaseOrigin.field59BenAcc.substring(
    3,
    11
  );
}
tw.local.tracingInward.inforHandlingInvest.feeInformation.creditAccountCustomerChoosed.accountNumber =
  tw.local.semiAutoAccounting.messageInformation.inforMT103.field59BenAcc;
tw.local.tracingInward.inforProfileInvest.reasonHoldInEnglish =
  tw.local.semiAutoAccounting.generalInformation.reasonSuspense;

// Ngày hạch toán vào TK suspense
tw.local.tracingInward.transactionInfor.creditDateFT =
  tw.local.semiAutoAccounting.transactionInfor.creditDateFT;
//tw.local.tracingInward.transactionInfor.creditDateFX = tw.local.semiAutoAccounting.transactionInfor.creditDateFX;

// nghi them nhe Tan
tw.local.tracingInward.inforProfileInvest.informationTracingApproved = [];
if (
  tw.local.semiAutoAccounting.generalInformation.entryInformation &&
  tw.local.semiAutoAccounting.generalInformation.entryInformation.length > 0
) {
  for (
    var i = 0;
    i < tw.local.semiAutoAccounting.generalInformation.entryInformation.length;
    i++
  ) {
    tw.local.tracingInward.inforProfileInvest.informationTracingApproved[
      i
    ] = {};
    tw.local.tracingInward.inforProfileInvest.informationTracingApproved[
      i
    ].sendMessageFree = {};
    if (
      tw.local.semiAutoAccounting.generalInformation.entryInformation[
        i
      ].entryType.indexOf("FM") != -1 &&
      tw.local.semiAutoAccounting.generalInformation.entryInformation[i]
        .messageStatus == "0"
    ) {
      tw.local.tracingInward.inforProfileInvest.informationTracingApproved[
        i
      ].sendMessageFree.messageTypeFree = "FM Tra soát lần 1";
    }
    tw.local.tracingInward.inforProfileInvest.informationTracingApproved[
      i
    ].informationTracing = {};
    tw.local.tracingInward.inforProfileInvest.informationTracingApproved[
      i
    ].informationTracing.tracingType =
      tw.local.tracingInward.inforProfileInvest.tracingType;
    tw.local.tracingInward.inforProfileInvest.informationTracingApproved[
      i
    ].informationTracing.errorTypeTracingMerge = [];
    var length = 0;
    if (tw.local.tracingInward.inforProfileInvest.errorTypeTracingBranch) {
      for (
        var j = 0;
        j <
        tw.local.tracingInward.inforProfileInvest.errorTypeTracingBranch.length;
        j++
      ) {
        if (
          tw.local.tracingInward.inforProfileInvest.errorTypeTracingBranch[j] &&
          tw.local.tracingInward.inforProfileInvest.errorTypeTracingBranch[j]
            .name
        ) {
          tw.local.tracingInward.inforProfileInvest.informationTracingApproved[
            i
          ].informationTracing.errorTypeTracingMerge[length] =
            tw.local.tracingInward.inforProfileInvest.errorTypeTracingBranch[j];
          // tw.local.tracingInward.inforProfileInvest.informationTracingApproved[i].informationTracing.errorTypeTracingMerge.insertIntoList(tw.local.tracingInward.inforProfileInvest.informationTracingApproved[i].informationTracing.errorTypeTracingMerge.listLength, tw.local.tracingInward.inforProfileInvest.errorTypeTracingBranch[j]);
          length += 1;
        }
      }
    }

    length =
      tw.local.tracingInward.inforProfileInvest.informationTracingApproved[i]
        .informationTracing.errorTypeTracingMerge.length;
    if (tw.local.tracingInward.inforProfileInvest.errorTypeTracingForeign) {
      for (
        var k = 0;
        k <
        tw.local.tracingInward.inforProfileInvest.errorTypeTracingForeign
          .length;
        k++
      ) {
        if (
          tw.local.tracingInward.inforProfileInvest.errorTypeTracingForeign[
            k
          ] &&
          tw.local.tracingInward.inforProfileInvest.errorTypeTracingForeign[k]
            .name
        ) {
          tw.local.tracingInward.inforProfileInvest.informationTracingApproved[
            i
          ].informationTracing.errorTypeTracingMerge[length] =
            tw.local.tracingInward.inforProfileInvest.errorTypeTracingForeign[
              k
            ];
          // tw.local.tracingInward.inforProfileInvest.informationTracingApproved[i].informationTracing.errorTypeTracingMerge.insertIntoList(tw.local.tracingInward.inforProfileInvest.informationTracingApproved[i].informationTracing.errorTypeTracingMerge.listLength, tw.local.tracingInward.inforProfileInvest.errorTypeTracingForeign[k]);
          length += 1;
        }
      }
    }
    //         if (tw.local.tracingInward.inforProfileInvest.informationTracingApproved
    //             && tw.local.tracingInward.inforProfileInvest.informationTracingApproved.length > 0
    //             && tw.local.tracingInward.inforProfileInvest.informationTracingApproved[0].informationTracing)
    //             tw.local.tracingInward.inforProfileInvest.errorTypeTracingMerge = tw.local.tracingInward.inforProfileInvest.informationTracingApproved[0].informationTracing.errorTypeTracingMerge;
    //
    //
    tw.local.tracingInward.inforProfileInvest.informationTracingApproved[
      i
    ].sendMessageFree = {};
    tw.local.tracingInward.inforProfileInvest.informationTracingApproved[
      i
    ].sendMessageFree.entryNumber =
      tw.local.semiAutoAccounting.generalInformation.entryInformation[
        i
      ].entryNumber;
    if (
      tw.local.semiAutoAccounting.generalInformation.entryInformation[
        i
      ].entryType.indexOf("FM") != -1
    ) {
      tw.local.tracingInward.inforProfileInvest.informationTracingApproved[
        i
      ].sendMessageFree.messageTypeFree = "FM Tra soát lần 1";
      tw.local.tracingInward.inforProfileInvest.informationTracingApproved[
        i
      ].sendMessageFree.inforTracingAdd =
        tw.local.semiAutoAccounting.generalInformation.reasonSuspense;
    }
    tw.local.tracingInward.inforProfileInvest.informationTracingApproved[
      i
    ].approvalTime =
      tw.local.semiAutoAccounting.generalInformation.entryInformation[
        i
      ].approvalTime;
    tw.local.tracingInward.inforProfileInvest.informationTracingApproved[
      i
    ].inputter =
      tw.local.semiAutoAccounting.generalInformation.entryInformation[
        i
      ].inputter;
    tw.local.tracingInward.inforProfileInvest.informationTracingApproved[
      i
    ].authorizer =
      tw.local.semiAutoAccounting.generalInformation.entryInformation[
        i
      ].authorizer;
  }
}
console.log(tw.local.tracingInward);
