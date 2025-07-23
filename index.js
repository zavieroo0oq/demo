// 投稿开始时间  '2025-4-25 10:00:00'
const startTime = 1745546400000;
// 投稿结束时间 '2025-5-18 23:59:59'
const endTime = 1747583999000;

// 作品公示期开始时间 '2025-5-26 00:00:00'
const showStartTime = 1748188800000;

// 领奖开始时间'2025-5-26 00:00:00'
const awardStartTime = 1748188800000;
// 领奖结束时间'2025-5-30 23:59:59'
const awardEndTime = 1750003200000;

// 投票开始时间'2025-5-19 00:00:00'
const voteStartTime = 1747584000000;
// 投票结束时间'2025-5-25 23:59:59'
const voteEndTime = 1748188799000;

// 排行榜任务组id
const rankGroupID = 10821;
// 排行榜任务按钮
const $contributeRankingBtns = $('.part6_wrap .btn_lq4').attr('get_all', 'true').attr('group_id', rankGroupID);

// 视频播放量任务组id
const videoGroupID = 10820;
// 视频播放量任务奖励领取按钮
const $contributeGearsBtns = $('.contribute_gears_btns').attr('max_awarde_count', 3).attr('group_id', videoGroupID);
// 视频播放量任务id
const getContributeGearIndex = function (id) {
    if (id >= 54519 && id <= 54521) {
        return 1;
    } else if (id >= 54522 && id <= 54524) {
        return 2;
    } else if (id >= 54525 && id <= 54527) {
        return 3;
    } else if (id >= 54528 && id <= 54530) {
        return 4;
    }
};

const groupID = 10819; // 投稿次数任务组id
// 投稿次数任务按钮
const $contributeTaskBtns = $('.task-btn').attr('max_awarde_count', 1).attr('group_id', groupID);

// 优秀作品组id
const excellentGroupID = 10822;
// 优秀作品领奖按钮
const $contributeExcellentBtns = $('.part5_wrap .btn_lq4').attr('max_awarde_count', 1).attr('group_id', excellentGroupID);

// 点击跳转授权按钮
const $btnDjsq = $('.btn_djsq');
// 未绑定第三方提示文案
const bindTip = '少侠还未绑定微博账号，请先前往授权绑定微博账号';
// 过投稿时间提示
const timeTip = '已过了投稿时间，无法继续投稿';
// 奖励图标
const imgArr = {
    '6318229': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/6318229.png',
    '6318230': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/6318230.png',
    '6318231': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/6318231.png',
    '6318232': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/6318232.png',
    '6318233': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/6318233.png',
    '6318234': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/6318234.png',
    '6318235': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/6318235.png',
    '6318236': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/6318236.png',
    '6318240': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/6318240.png',
    '6318395': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/6318395.png',
    '6318396': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/6318396.png',
    '6318397': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/6318397.png',
    '6318399': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/6318399.png',
    '6318400': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/6318400.png',
    '6319274': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/bz/6319274.png',
    '6319277': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/bz/6319277.png',
    '6319278': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/bz/6319278.png',
    '6319279': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/bz/6319279.png',
    '6319281': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/bz/6319281.png',
    '6319304': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/bz/6319304.png',
    '6319305': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/bz/6319305.png',
    '6319306': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/bz/6319306.png',
    '6319307': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/bz/6319307.png',
    '6319308': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/bz/6319308.png',
    '6319309': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/bz/6319309.png',
    '6319310': '//game.gtimg.cn/images/ty/cp/a20250414tdwb/bz/6319310.png',
};

// 投票次数任务组id
const voteGroupID = 10823;
// 投票次数任务按钮
const $contributeVoteBtns = $('.contribute_vote_btns').attr('max_awarde_count', 1).attr('group_id', voteGroupID);

// 设置按钮状态
function setBtnStatus($btn, type) {
    if (type === '1') {
        // 未完成
        $btn.addClass('got');
    } else if (type === '2') {
        // 已完成
        $btn.removeClass('got');
    } else if (type === '3') {
        // 已领取
        $btn.addClass('got').text('已领取');
    }

    return $btn;
}

$('.award_end_time').text(formatData(awardEndTime));

// 选择角色弹窗确认按钮
$('#pop_bind .fcbtn_qr1').click(bindAreaFn);

// 登录绑定
reBindEvent('.qlg.btn a', function () {
    closeDialog();
    qqLogin();
});
reBindEvent('.wlg.btn a', function () {
    closeDialog();
    wxLogin();
});

reBindEvent('.pop_boxs .close1', function () {
    $('.pop_boxs').removeClass('cur')
});

reBindEvent('.video_close1', function () {
    $('#pop_video').removeClass('cur')
    $('#video_div').html('');
});

//领取记录
reBindEvent('#getReceiveRecord', function () {
    getReceiveRecord(function (list) {
        if (isArray(list) && list.length) {
            $('.fc_box6').html(list.map(item => {
                return `
                <div class="record-list-item">
                           <div class="record-list-item-img"><span class="ico-1"></span></div>
                           <div class="record-list-item-info">
                              <div>${item.sPackageName}</div>
                              <p>获得时间：${item.dtGetPackageTime}</p>
                              <p>奖励通过游戏邮件发放至绑定角色</p>
                           </div>
                        </div>
                `
            }).join(''));
            dialogHandler.show('record');
        } else {
            // TGDialogS('pop_ljjl');
            dialogAlert('暂无领奖记录');
        }
    });
});

// 第三方授权跳转
const setAuth = function () {
    if (!verify()) {
        console.log("debug1");
        return;
    }

    const params = Hp.appendParams('', {
        client_id: '1441253898',
        redirect_uri: _h5_wb_config_.redirect_uri,
        response_type: 'code',
        state: '123',
    });

    window.location.href = `https://api.weibo.com/oauth2/authorize${params}`;
};
reBindEvent($btnDjsq, setAuth);

const bindRoleSuccess = function (areaInfo) {
    if (areaInfo) {
        reBindEvent('#bindBtn', function () {
            if (urlParams.debug === '1') {
                TGDialogS('pop_bind');
            }
        }).text(`【${Hp.getText(decodeURIComponent(areaInfo.FroleName))}】`);
    }
}

Hp.openDebug('#logined,#unlogin');

// 点击按钮领取奖励
const clickBtnGetTaskReward = function () {
    if (Date.now() > awardEndTime) {
        return dialogAlert('已过了领奖时间，无法继续领奖');
    }

    if (!verify()) {
        return;
    }

    if (!authorized) {
        return dialogAlert(bindTip, function () {
            setAuth();
        });
    }

    const $this = $(this);
    const ids = `${$this.attr('task-id') || ''}`.split(',').filter(Boolean);
    const itemids = `${$this.attr('itemid') || ''}`.split(',').filter(Boolean);
    const awardeCount = Number($this.attr('awarde_count')) || 0;
    const maxAwardeCount = Number($this.attr('max_awarde_count')) || 1;
    const taskGroupID = Number($this.attr('group_id'));
    const getAll = $this.attr('get_all') === 'true';

    if (awardeCount >= maxAwardeCount) {
        return dialogAlert('奖励已达到领取上限，无法继续领取');
    }


    if (!ids.length) {
        console.log('没有可领取的任务id');

        if ($contributeRankingBtns.is($this) || $contributeExcellentBtns.is($this)) {
            if (Date.now() < awardStartTime) {
                return dialogAlert('未到领奖时间，无法领取奖励');
            } else if (Date.now() > awardEndTime) {
                return dialogAlert('已过了领奖时间，无法继续领奖');
            }
            return dialogAlert('暂无可领取的奖励');
        }

        return dialogAlert('没有可领取的奖励');
    }

    if (getAll) {
        Hp.promiseAll(ids.map(id => {
            return function (callback) {
                getTaskReward({
                    taskID: id,
                    taskGroupID: taskGroupID,
                    sRole: bindArea.FroleId,
                    itemid: itemids.unshift() || bindArea.FroleId
                }, callback);

                // callback({
                //   "ret": 0,
                //   "iRet": 0,
                //   "sMsg": "succ",
                //   "jData": {
                //     "taskData": {
                //       "code": 0,
                //       "data": {
                //         "status": 0,
                //         "msg": "success",
                //         "res": [
                //           {
                //             "Ret": 0,
                //             "H": {
                //               "amsmsg": "恭喜您获得了礼包： 人气B档-月灵石*888＋头顶图标-同人之星 ",
                //               "amspackageid": "5913343",
                //               "amsret": "0",
                //               "amsserial": "AMS-ty-1226152316-GDCPOJ-689036-68126",
                //               "msg": "ams send success",
                //               "taskstatus": "{\"taskid\":\"51018\"}"
                //             }
                //           }
                //         ]
                //       }
                //     }
                //   },
                //   "sAmsSerial": "AMS-TY-1226152316-MLjqnF-689141-355308"
                // })
            }
        }), function (res) {
            const message = res.map(item => gd(item, 'details.jData.taskData.data.res[0].H.amsmsg') || gd(item, 'jData.taskData.data.res[0].H.amsmsg')).filter(Boolean).join(',');
            if (message) {
                setBtnStatus($this, '3').attr('awarde_count', ids.length).attr('task-id', '').attr('itemid', '');
                dialogAlert('奖励领取成功');
            } else {
                dialogAlert('奖励领取失败');
            }
        });
    } else {
        const id = ids.shift();
        getTaskReward({
            taskID: id,
            taskGroupID: taskGroupID,
            sRole: bindArea.FroleId,
            itemid: itemids.unshift() || bindArea.FroleId
        }, function (res) {

            let message = gd(res, 'details.jData.taskData.data.res[0].H.amsmsg')
            if (!message && urlParams.debugg === '1') {
                message = 'ok';
            }
            if (message) {
                $this.attr('task-id', ids.join(',')).attr('itemid', itemids.join(','));
                setBtn($this, { isawarded: true, isfinished: true })
                $this.prev('p.count').text(`${$this.attr('awarde_count') || 0}/3`);
                dialogAlert('奖励领取成功');
            } else {
                dialogAlert('奖励领取失败');
            }
        });
    }

};

$contributeTaskBtns.on('click', clickBtnGetTaskReward);
$contributeGearsBtns.on('click', clickBtnGetTaskReward);
$contributeRankingBtns.on('click', clickBtnGetTaskReward);
$contributeExcellentBtns.on('click', clickBtnGetTaskReward);
$contributeVoteBtns.on('click', clickBtnGetTaskReward);

/************************************************************************ */
// 拉起投稿弹窗
const visibleContent = function (type) {
    if (Date.now() > endTime && type !== '2') {
        return dialogAlert(timeTip);
    }
    if (!verify()) {
        return;
    }
    if (!authorized) {
        // 授权弹窗
        dialogAlert(bindTip, function () {
            setAuth();
        });
    } else {
        // 投稿弹窗
        if (!verify()) {
            return;
        }
        if (!verifyAuth()) {
            return;
        }

        function filterContent(res1, res2) {
            // res1 已经投稿的视频 res2 可以投稿的视频
            // 过滤已经投稿的视频 return 可以投稿的视频
            const contributedMap = Object.assign({}, ...res1.map(item => ({ [item.itemid]: item })));
            return res2.filter(item => !contributedMap[item.itemid]);
        }

        Hp.promiseAll([getContent, getVideoList], function ([list1, list2]) {
            if (isArray(list1) && list1.length) {
                getVoteCount({
                    object_ids: list1.map(item => item.itemid).join('|')
                }, function (listMap) {
                    console.log('listMap', listMap);

                    $('#myWorksDialog .works').html(list1.sort((item1, item2) => item2.videoCreateTime - item1.videoCreateTime).map(item => {
                        return `
                        <div class="my-works-item">
                              <div class="my-works-img tg_img" itemid="${item.itemid}" iframe-url="${encodeURIComponent(item.videoIframeUrl)}"">
                               <img src="${item.videoCover.replace(/^\s*https?:/, '') || '//game.gtimg.cn/images/ty/cp/a20250210weibo/polc1.png'}" alt=""/>
                              </div>
                              <div class="my-works-info">
                                 <p>作品编号:${item.itemid}</p>
                                 <p>投稿时间：${formatData(item.videoCreateTime * 1000)}</p>
                                 <p>喜爱值：${listMap[item.itemid]}</p>
                              </div>
                              <div class="my-works-bottom">
                                 <div class="my-works-status">${(`${item.status}` === '1' || `${item.status}` === '2') ? '稿件合格' : (`${item.status}` === '8' ? '审核中' : '稿件不合格')}</div>
                                 <div class="my-works-tools">
                                    <div class="my-works-btn fxlp btn_share" itemid="${item.itemid}">分享拉票</div>
                                    <div class="my-works-btn delet">删除</div>
                                 </div>
                              </div>
                           </div>
                        `
                    }).join(''));
                });
            } else {
                $('#myWorksDialog .works').html(`<div style="text-align:center;font-size:${Math.min(window.innerWidth, window.innerHeight) * 0.05}px">您还没有投稿过作品哦</div>`);
            }

            if (type === '2') {
                // TGDialogS('pop_wdzp');
                dialogHandler.show('myWorks');
                return;
            }

            list2 = filterContent(list1, list2);
            console.log('list2', list2);
            //视频投稿窗
            if (isArray(list2)) {
                const html = list2.map(item => {
                    return `
                    <div class="tg-works-item" itemid="${item.itemid}">
                              <div class="tg-works-img tg_img"  itemid="${item.itemid}" iframe-url="${encodeURIComponent(item.videoIframeUrl)}">
                               <img src="${item.videoCover.replace(/^https?:/, '') || '//game.gtimg.cn/images/ty/cp/a20250210weibo/polc1.png'}" alt=""/>
                                <a href="javascript:;" itemid="${item.itemid}" class="btn_plays sp"></a>
                               </div>
                              <div class="tg-works-name">作品:${item.videoTitle.replace(/#.+?#/g, '').replace(/\s*http.+$/, '').replace(/\s|​/g, '')}</div>
                              <div class="tg-works-select"></div>
                           </div>
                        `
                }).join('');
                if (html) {
                    $('.tg_list').html(html).off('click').on('click', '.tg-works-item', function () {
                        console.log('点击投稿视频');
                        $(this).find('.tg-works-select').toggleClass('active');
                    })
                    dialogHandler.show('tg');
                    // $('#pop_tg .works .on_play').on('click', function (e) {
                    //   e.stopPropagation();
                    //   const itemid = $(this).attr('itemid');
                    //   $('#play > div').html(`<iframe src="https://player.bilibili.com/player.html?bvid=${itemid}"scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>`);
                    //   TGDialogS('play');
                    //   $('#play .fcbtn_qr1').off('click').on('click', function () {
                    //     $('#play > div').html('');
                    //     TGDialogS('pop_tg');
                    //   });
                    // });
                } else {
                    $('#tgDialog .works').attr('style', 'font-size:20px;color:#fefcb9;padding:2em 0;').html('符合要求的稿件已经投递过了哦~');
                }
            } else {
                $('#tgDialog .works').attr('style', 'font-size:20px;color:#fefcb9;padding:2em 0;').html('暂无可投稿内容');
            }
            // TGDialogS('pop_tg');

            dialogHandler.show('tg');
        });
    }
};

reBindEvent('.fcbtn_t1', visibleContent);

reBindEvent('.btn_tz3', function () {
    visibleContent('2');
});

reBindEvent('#inputDialog .fcbtn_qr1', function () {
    if (Date.now() > awardEndTime) {
        return dialogAlert('已过了领奖时间，无法继续领奖');
    }
    if (!verify()) {
        return;
    }
    if (!authorized) {
        return dialogAlert(bindTip, function () {
            setAuth();
        });
    }

    if (!$('#text12_input').val()) {
        return dialogAlert('请填写QQ号', function () {
            
            dialogHandler.show("input");
        });
    }

    submitAddress({
        query: false,
        sExtend3: $('#text12_input').val(),
    }, function (res) {
        console.log('填写实物奖品地址成功', res);
        dialogAlert('填写QQ号成功');
    });
});

reBindEvent('#tgDialog .fcbtn_qr2', function () {
    if (Date.now() > endTime) {
        return dialogAlert(timeTip);
    }
    const selectedList = [];
    $('#tgDialog .tg-works-select.active').each(function () {
        selectedList.push($(this).closest('.tg-works-item').attr('itemid'));
    });
    if (!selectedList.length) {
        return dialogAlert('请选择要投稿的视频', function () {
            dialogHandler.show('tg');
        });
    }

    console.log('提交投稿视频', selectedList);

    submitContribute(selectedList, function (res) {
        dialogAlert(gd(res, 'details.jData.createRankData.code') === 0 ? '投稿成功' : '投稿失败', function () {
            closeDialog();
        });
    });
});

reBindEvent('.fcbtn_qr3', function () {
    const val = $('#linkTgDialog input').val();
    if (!val) {
        return dialogAlert('请输入作品链接', function () {
            
            dialogHandler.show("linkTg");
        });
    }

    // 取最后一串数字
    const id = val.match(/\d+$/);
    if (!id) {
        return dialogAlert('请输入正确的作品链接', function () {
            dialogHandler.show("linkTg");
        });
    }

    submitContribute([id[0]], function (res) {
        dialogAlert(gd(res, 'details.jData.createRankData.code') === 0 ? '投稿成功' : '投稿失败', function () {
            closeDialog();
        });
    });
});

//todo 控制活动公示 我要投稿 这俩tab页签的显示
if (Date.now() > showStartTime) {
    $('.btn_tz1').show();
    $('.btn_tz0').show();
} else {
    $('.btn_tz1').show();
    $('.btn_tz0').show();
    
}

const windowOnScroll = function () {
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const $afooter = $('#afooter');
    const $afooterHeight = $afooter.outerHeight();
    $('.btn_box1, .btn_box3').css('bottom', Math.max(0, clientHeight + scrollTop - scrollHeight + $afooterHeight));
}
windowOnScroll();
window.addEventListener('scroll', windowOnScroll, false);

$('a[href*=html]').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    const href = $(this).attr('href');
    delete urlParams.itemid;
    window.location.href = Hp.appendParams(href, urlParams);
});


const setBtn = function ($btn, {
    id,
    itemid,
    isawarded,
    isfinished,
}) {
    if ($btn && $btn.length) {
        const oldId = ($btn.attr('task-id') || '').split(',').filter(Boolean);
        if (isfinished) {
            if (isawarded) {
                const awardeCount = (Number($btn.attr('awarde_count')) || 0) + 1;
                const maxAwardeCount = Number($btn.attr('max_awarde_count')) || 1;
                $btn.attr('awarde_count', awardeCount);
                if (awardeCount >= maxAwardeCount) {
                    setBtnStatus($btn, '3');
                } else if ($btn.attr('task-id')) {
                    setBtnStatus($btn, '2');
                } else {
                    setBtnStatus($btn, '1');
                }
            } else {
                const finishedCount = Number($btn.attr('finished_count')) || 0;
                $btn.attr('finished_count', finishedCount + 1);
                if (id && !oldId.includes(`${id}`)) {
                    setBtnStatus($btn, '2').attr('task-id', oldId.concat(id).join(','));
                }
                if (itemid) {
                    const oldItemid = ($btn.attr('itemid') || '').split(',').filter(Boolean);
                    if (!oldItemid.includes(`${itemid}`)) {
                        $btn.attr('itemid', oldItemid.concat(itemid).join(','));
                    }
                }
            }
        } else if (!oldId.length) {
            setBtnStatus($btn, '1');
        }
    }
};

reBindEvent('.btn_lq3', function () {
    if (Date.now() > awardEndTime) {
        return dialogAlert('已过了领奖时间，无法继续领奖');
    }
    if (!verify()) {
        return;
    }
    if (!authorized) {
        return dialogAlert(bindTip, function () {
            setAuth();
        });
    }

    const isawarded = Number($contributeRankingBtns.attr('awarde_count')) || Number($contributeExcellentBtns.attr('awarde_count'));

    let sExtend3 = '';
    if (!isawarded) {
        return dialogAlert('请先领取奖励后登记QQ号');
    } else {
        if (sExtend3) {
            return dialogAlert('您已经登记过领取QQ号');
        }
        submitAddress({
            query: true
        }, function (res) {
            console.log('查询实物奖品地址成功', res);
            sExtend3 = gd(res, 'data.sExtend3');
            if (sExtend3) {
                return dialogAlert('您已经登记过领取QQ号');
            } else {
                $('#text12_input').val('');
                dialogHandler.show("input");
            }
        });
    }
});

Hp.reload(function () {
    console.log('urlParams', urlParams);
    // 登录检查
    checkLogin({
        loginedCallback: function (loginInfo) {
            if (isObject(loginInfo)) {
                $('#logined').show();
                $('#unlogin').hide();
                $('#userinfo').text(loginInfo.nickName ? Hp.getText(decodeURIComponent(loginInfo.nickName)) : '亲爱的少侠');

                if (isMSDK) {
                    $('#logoutBtn').hide();
                }
            }
            // 登录成功后手动查询绑定区服
            queryBindAreaFn(bindRoleSuccess);
        },
        failCallback: function () {
            if (isWX) {
                wxLogin();
            } else if (isQQ) {
                qqLogin();
            } else {
                dialogAlert('请先登录');
            }
        },
        authorizedFialCallback: function () {
            dialogAlert('授权失败，一个微博账号只能给一个游戏账号授权', function () {
                if (urlParams.code) {
                    window.location.replace(Hp.removeParams(window.location.href, ['code', 'state']));
                }
            });
        },
        bindAreaCallback: function (area) {
            closeDialog();
            console.log('绑定大区信息：', area);
            if (isObject(area)) {
                bindRoleSuccess(area);
                getAuth();
            }

        },
        authorizedCallback: function () {
            if (urlParams.code) {
                window.location.replace(Hp.removeParams(window.location.href, ['code', 'state']));
            } else {
                reBindEvent($btnDjsq).text('已授权');
                getUserVoteCount({}, function (count) {
                    $('.user_vote_count').text(count);
                });
                // 登录 & 绑定 & 授权成功后回调
                getTaskList({ id: groupID }, function (taskList) {
                    if (isArray(taskList)) {
                        // 投放次数任务
                        taskList.forEach(item => {
                            const isawarded = item.taskdata.isawarded;
                            const isfinished = item.taskdata.isfinished;

                            const index = item.taskinfo.sort;
                            let $btn = $contributeTaskBtns.eq(index - 1);
                            if ($btn) {
                                $btn.removeAttr('task-id').removeAttr('name').removeAttr('awarde_count');
                                setBtn($btn, { isawarded, isfinished, id: item.taskid });
                            } else {
                                console.error('没有找到对应的任务按钮', item);
                            }
                        });
                    }
                });
                getTaskList({ id: videoGroupID }, function (taskList2) {
                    // 视频播放量任务
                    if (isArray(taskList2)) {
                        console.log('videoGroupID', taskList2);

                        taskList2.forEach((item, i) => {
                            const taskid = Number(item.taskid);
                            const index = getContributeGearIndex(taskid);
                            const $btn = $contributeGearsBtns.eq(index - 1);

                            let isawarded = item.taskdata.isawarded;
                            let isfinished = item.taskdata.isfinished;
                            // if (urlParams.debugg === '1') {
                            //   if (i === 0) {
                            //     isawarded = true;
                            //     isfinished = true;
                            //   } else if (i >= 1 && i <= 2) {
                            //     isawarded = false;
                            //     isfinished = true;
                            //   } else {
                            //     isawarded = false;
                            //     isfinished = false;
                            //   }
                            // }

                            setBtn($btn, { isawarded, isfinished, id: taskid });
                            $btn.prev('.task_num').find('.count').text(`${$btn.attr('awarde_count') || 0}`);
                        });
                    }
                });
                getTaskList({ id: voteGroupID }, function (list) {
                    console.log('投票次数任务列表 ', list);
                    if (isArray(list)) {
                        list.forEach(item => {
                            const isawarded = item.taskdata.isawarded;
                            const isfinished = item.taskdata.isfinished;
                            const id = item.taskid;
                            const index = item.taskinfo.sort;
                            const $btn = $contributeVoteBtns.eq(index - 1);
                            setBtn($btn, { isawarded, isfinished, id });
                        });
                    }
                });

                // if (Date.now() <= endTime) {
                //   window.location.href = Hp.appendParams('index.html', urlParams);
                //   return false;
                // }
                getRankList(function (list) {
                    if (isArray(list) && list.length) {
                        $('.video_item').hide();
                        if (list.length <= 3) {
                            $('.video_box1').hide();
                            $('.video_box2').hide();
                            $('.video_box3').hide();
                        } else if (list.length <= 10) {
                            $('.video_box2').hide();
                            $('.video_box3').hide();
                        } else if (list.length <= 20) {
                            $('.video_box3').hide();
                        }

                        let maxAwardeCount = 0;
                        list.forEach((item, i) => {
                            if (item.gopenid === bindArea.Fuin) {
                                getTaskList({ id: rankGroupID, itemid: item.itemid }, function (taskList3) {
                                    taskList3.forEach(item2 => {
                                        const isawarded = item2.taskdata.isawarded;
                                        const isfinished = item2.taskdata.isfinished;
                                        const oldId = ($contributeRankingBtns.attr('task-id') || '').split(',').filter(Boolean);
                                        const oldItemid = ($contributeRankingBtns.attr('itemid') || '').split(',').filter(Boolean);
                                        if (isfinished && !isawarded && !oldId.includes(`${item2.taskid}`) && !oldItemid.includes(`${item.itemid}`)) {
                                            maxAwardeCount++;
                                            $contributeRankingBtns.attr('max_awarde_count', maxAwardeCount);

                                        }
                                        setBtn($contributeRankingBtns, {
                                            isawarded,
                                            isfinished,
                                            id: item2.taskid,
                                            itemid: item.itemid
                                        });
                                    });
                                });
                            }
                            getVoteCount({
                                object_ids: list.map(item => item.itemid).join('|')
                            }, function (listMap) {
                                console.log('listMap', listMap);
                                const $find = $('.part6 .video_item').eq(i).show();
                                $find.find('.iframe').css({
                                    'background-image': `url(${item.videoCover.replace(/^https?:/, '') || '//game.gtimg.cn/images/ty/cp/a20250210weibo/polc1.png'})`,
                                    'background-size': 'cover',
                                }).attr('iframe-url', encodeURIComponent(item.videoIframeUrl));
                                // $find.find('.txt4,.txt9').html(item.videoTitle.replace(/#.+?#/g, '').replace(/\s*http.+$/, '').replace(/\s|​/g, ''));
                                // 处理视频标题：移除标签、链接和空格，并限制最多显示12个字符
                                const processedTitle = item.videoTitle
                                    .replace(/#.+?#/g, '')
                                    .replace(/\s*http.+$/, '')
                                    .replace(/\s|​/g, '');
                                $find.find('.txt4,.txt9').html(
                                    processedTitle.length > 12
                                        ? processedTitle.substring(0, 12) + '...'
                                        : processedTitle
                                );
                                $find.find('.txt5,.txt10').html(`<br>喜爱值：${listMap[item.itemid]}`);
                            });
                        });
                    } else {
                        $('.part6').hide();
                    }
                });

                getRecommend(function (list) {
                    console.log('优秀作品视频列表', list);
                    $('.video_item1').hide();
                    if (list.length == 1) {
                        $('.video_fine1').hide();
                        $('.video_fine2').hide();
                        $('.video_fine3').hide();
                    } else if (list.length <= 3) {
                        $('.video_fine2').hide();
                        $('.video_fine3').hide();
                    } else if (list.length <= 10) {
                        $('.video_fine3').hide();
                    }
                    if (isArray(list) && list.length) {
                        list.forEach((item, i) => {
                            const $find = $('.part5 .video_item1').eq(i).show();
                            $find.find('.iframe1').css({
                                'background-image': `url(${item.videoCover.replace(/^https?:/, '') || '//game.gtimg.cn/images/ty/cp/a20250210weibo/polc1.png'})`,
                                'background-size': 'cover',
                            }).attr('iframe-url', encodeURIComponent(item.videoIframeUrl));
                            // $find.find('.txt4,.txt9').text(item.videoTitle.replace(/#.+?#/g, '').replace(/\s*http.+$/, '').replace(/\s|​/g, ''));
                            // 处理视频标题：移除标签、链接和空格，并限制最多显示12个字符
                            const processedTitle = item.videoTitle
                                .replace(/#.+?#/g, '')
                                .replace(/\s*http.+$/, '')
                                .replace(/\s|​/g, '');
                            $find.find('.txt4,.txt9').html(
                                processedTitle.length > 12
                                    ? processedTitle.substring(0, 12) + '...'
                                    : processedTitle
                            );
                        });
                    } else {
                        $('.part5').hide();
                    }
                });

                getTaskList({ id: excellentGroupID }, function (list) {
                    console.log('优秀作品任务列表', list);
                    if (isArray(list)) {
                        list.forEach(item => {
                            const isawarded = item.taskdata.isawarded;
                            const isfinished = item.taskdata.isfinished;
                            const id = item.taskid;
                            const $btn = $contributeExcellentBtns;
                            console.log('优秀作品任务', isawarded, isfinished, id, $btn);
                            setBtn($btn, { isawarded, isfinished, id });
                        });
                    }
                });

                console.log('投票页============')

                const getHtml = function (list) {
                    return list.map(item => {
                        return `
                        <div class="works-list-item">
                                          <div class="works-list-item-img zp_img"  iframe-url="${encodeURIComponent(item.iframe_url)}">
                                            <img src="${item.cover.replace(/^\s*https?:/, '') || '//game.gtimg.cn/images/ty/cp/a20250210weibo/polc1.png'}" alt=""/>
                            
                                          </div>
                                          <div class="works-list-item-info">
                                             <div>作品编号: ${item.object_id}</div>
                                             <p>喜爱值：${item.vote_count}</p>
                                          </div>
                                          <div class="works-list-item-copy-btn btn_copy"  itemid="${item.object_id}">复制</div>
                                          <div class="works-list-item-btn btn_vote"  itemid="${item.object_id}">投票</div>
                                       </div>
                    `
                    }).join('')
                }
                const getList = function (resetVote) {
                    // 修改：从选中的 radio 按钮获取筛选条件
                    const $checkedRadio = $('input[name="radio"]:checked');
                    const is_latest = $checkedRadio.attr('is_latest');
                    const is_hot = $checkedRadio.attr('is_hot');
                    
                    // 修改：判断是否是筛选操作（当点击的是 radio 按钮时重置分页）
                    if ($(this).is('input[name="radio"]')) {
                        $('.pager_item').removeClass('cur').eq(0).addClass('cur');
                    }
                    
                    const page = Number($('.pager_item.cur').addClass('cur').text()) || 1;
                    const limit = 10;
                    
                    if (urlParams.itemid) {
                        showTab(4)
                        searchVote({
                            object_id: urlParams.itemid,
                        }, function (data) {
                            if (isObject(data)) {
                                $('.vote_list').html(getHtml([data])).css('margin-top', '.4rem');
                                $('.vote_pager').hide();
                                // 修改：隐藏新的筛选结构
                                $('.works-filter').hide();
                                $('.search_sec').hide();
                            } else {
                                dialogAlert('没有找到对应的作品');
                            }
                        });
                    } else {
                        getVoteList({
                            page,
                            limit,
                            is_latest,
                            is_hot,
                        }, function (list, count) {
                            if (isArray(list) && list.length) {
                                $('.vote_list').html(getHtml(list));
                            }
                            if (resetVote === true) {
                                $('.vote_pager').show().html(new Array(Math.ceil(count / limit)).fill(0).map((item, i) => {
                                    return `
                                    <div class="page_num pager_item ${i === 0 ? 'cur' : ''}">
                                        <span>${i + 1}</span>
                                    </div>
                                    `;
                                }).join(''));
                            }
                        });
                    }
                }

                // 修改：绑定 radio 按钮的 change 事件
                $('input[name="radio"]').on('change', function () {
                    if ($(this).is(':checked')) {
                        getList.call(this, true);
                    }
                });

                $('.vote_pager').on('click', '.pager_item', function () {
                    $('.pager_item').removeClass('cur');
                    $(this).addClass('cur');
                    getList();
                });

                // 修改：触发默认选中的 radio 按钮
                $('input[name="radio"]:checked').trigger('change');

                $('.btn_query').on('click', function () {
                    const val = $('.works-search-box input').val(); // 注意：这里根据HTML结构修改了选择器
                    if (val) {
                        searchVote({
                            object_id: val,
                        }, function (data) {
                            if (isObject(data)) {
                                $('.vote_list').html(getHtml([data]));
                                $('.vote_pager').hide();
                            } else {
                                dialogAlert('没有找到对应的作品');
                            }
                        });
                    } else {
                        // 修改：重新触发当前选中的 radio 按钮
                        $('input[name="radio"]:checked').trigger('change');
                    }
                });

                // 修改：修正输入框选择器
                $('.works-search-box input').on('input', function () {
                    if ($(this).val()) {
                        $('.btn_query').text('查询');
                    } else {
                        $('.btn_query').text('刷新');
                    }
                });


                $('.vote_list').on('click', '.btn_vote', function () {

                    if (Date.now() < voteStartTime) {
                        return dialogAlert('未到投票时间，无法投票');
                    } else if (Date.now() > voteEndTime) {
                        return dialogAlert('已过了投票时间，无法投票');
                    }

                    const itemid = $(this).attr('itemid');

                    const $vote_count = $(this).parent().find('.vote_count');
                    const vote_count = Number($vote_count.text());
                    voteFn({
                        object_id: itemid,
                    }, function (code) {
                        if (code === 0) {
                            dialogAlert('投票成功');
                            $vote_count.text(vote_count + 1);
                        } else if (code === -101) {
                            dialogAlert('投票失败，您今日投票次数已达到上限，请明日再来');
                        } else if (code === -102) {
                            dialogAlert('投票失败，您已经给这个作品投过票了');
                        } else if (code === -103) {
                            dialogAlert('投票失败，投票时间已结束');
                        } else {
                            dialogAlert('网络异常，请稍后再试');
                        }
                    });
                });
            }
        },
        toThirdPartyAuth: function () {
            dialogAlert(bindTip, function () {
                setAuth();
            });
        }
    });
});

// Hp.clickCount("body > div.wrap > div.content > div.part3 > dl > dd:nth-child(8) > p", 3, function () {
//   location.href = 'https://m.bilibili.com/space/';
// });

// 分享拉票
$('body').on('click', '.btn_share', function (e) {
    e.stopPropagation();
    const itemid = $(this).attr('itemid');
    const link = window.location.href.replace(/\/[a-z0-9A-Z]+\.html.?$/, `/index.html?itemid=${itemid}`);
    console.log('分享拉票', link);
    executeShare({
        desc: `我的作品编号是${itemid}，投票助力我领取Q币大奖`,
        link,
        now: true
    });
    if (!isMSDK) {
        dialogAlert('请点击右上角分享到微信或QQ拉票<br><div style="color:red;text-align:center">( 关闭弹窗后分享无效 )</div>', executeShare);
    }
}).on('click', '[iframe-url*="http"]', function () {
    const $this = $(this);
    const iframeUrl = $this.attr('iframe-url');
    if (iframeUrl) {
        dialogAlert(decodeURIComponent(iframeUrl));
    }
});

// 添加复制功能
$('body').on('click', '.btn_copy', function (e) {
    e.preventDefault();
    e.stopPropagation();

    const itemid = $(this).attr('itemid');
    if (!itemid) return;

    // 创建临时textarea元素用于复制
    const $temp = $('<textarea>');
    $('body').append($temp);
    $temp.val(itemid).select();

    try {
        // 执行复制命令
        const successful = document.execCommand('copy');
        if (successful) {
            console.log('作品编号 ' + itemid + ' 已复制到剪贴板');
            alert('作品编号 ' + itemid + ' 已复制到剪贴板');
        } else {
            dialogAlert('复制失败，请手动复制');
        }
    } catch (err) {
        dialogAlert('复制失败，请手动复制');
    }

    // 移除临时元素
    $temp.remove();
});
