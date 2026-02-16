var ai=Object.defineProperty;var li=(n,e,t)=>e in n?ai(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ae=(n,e,t)=>li(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function te(){}function ys(n){return n()}function Rn(){return Object.create(null)}function je(n){n.forEach(ys)}function _s(n){return typeof n=="function"}function vt(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function ci(n){return Object.keys(n).length===0}function bs(n,...e){if(n==null){for(const s of e)s(void 0);return te}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Pt(n){let e;return bs(n,t=>e=t)(),e}function ws(n,e,t){n.$$.on_destroy.push(bs(e,t))}function p(n,e){n.appendChild(e)}function ne(n,e,t){n.insertBefore(e,t||null)}function X(n){n.parentNode&&n.parentNode.removeChild(n)}function kt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function I(n){return document.createElement(n)}function C(n){return document.createTextNode(n)}function F(){return C(" ")}function vs(){return C("")}function _e(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function j(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function fi(n){return Array.from(n.childNodes)}function G(n,e){e=""+e,n.data!==e&&(n.data=e)}let _t;function gt(n){_t=n}function ks(){if(!_t)throw new Error("Function called outside component initialization");return _t}function ui(n){ks().$$.on_mount.push(n)}function hi(n){ks().$$.on_destroy.push(n)}const Ze=[],Un=[];let st=[];const Vn=[],di=Promise.resolve();let mn=!1;function mi(){mn||(mn=!0,di.then(Ss))}function gn(n){st.push(n)}const rn=new Set;let ze=0;function Ss(){if(ze!==0)return;const n=_t;do{try{for(;ze<Ze.length;){const e=Ze[ze];ze++,gt(e),gi(e.$$)}}catch(e){throw Ze.length=0,ze=0,e}for(gt(null),Ze.length=0,ze=0;Un.length;)Un.pop()();for(let e=0;e<st.length;e+=1){const t=st[e];rn.has(t)||(rn.add(t),t())}st.length=0}while(Ze.length);for(;Vn.length;)Vn.pop()();mn=!1,rn.clear(),gt(n)}function gi(n){if(n.fragment!==null){n.update(),je(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(gn)}}function pi(n){const e=[],t=[];st.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),st=e}const Bt=new Set;let Ue;function qt(){Ue={r:0,c:[],p:Ue}}function Rt(){Ue.r||je(Ue.c),Ue=Ue.p}function ge(n,e){n&&n.i&&(Bt.delete(n),n.i(e))}function Ie(n,e,t,s){if(n&&n.o){if(Bt.has(n))return;Bt.add(n),Ue.c.push(()=>{Bt.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}function we(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function yi(n,e){Ie(n,1,1,()=>{e.delete(n.key)})}function _i(n,e,t,s,i,o,r,a,l,c,u,f){let h=n.length,d=o.length,y=h;const m={};for(;y--;)m[n[y].key]=y;const g=[],_=new Map,v=new Map,N=[];for(y=d;y--;){const b=f(i,o,y),w=t(b);let A=r.get(w);A?N.push(()=>A.p(b,e)):(A=c(w,b),A.c()),_.set(w,g[y]=A),w in m&&v.set(w,Math.abs(y-m[w]))}const S=new Set,E=new Set;function T(b){ge(b,1),b.m(a,u),r.set(b.key,b),u=b.first,d--}for(;h&&d;){const b=g[d-1],w=n[h-1],A=b.key,B=w.key;b===w?(u=b.first,h--,d--):_.has(B)?!r.has(A)||S.has(A)?T(b):E.has(B)?h--:v.get(A)>v.get(B)?(E.add(A),T(b)):(S.add(B),h--):(l(w,r),h--)}for(;h--;){const b=n[h];_.has(b.key)||l(b,r)}for(;d;)T(g[d-1]);return je(N),g}function kn(n){n&&n.c()}function Yt(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),gn(()=>{const o=n.$$.on_mount.map(ys).filter(_s);n.$$.on_destroy?n.$$.on_destroy.push(...o):je(o),n.$$.on_mount=[]}),i.forEach(gn)}function Gt(n,e){const t=n.$$;t.fragment!==null&&(pi(t.after_update),je(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function bi(n,e){n.$$.dirty[0]===-1&&(Ze.push(n),mi(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ht(n,e,t,s,i,o,r=null,a=[-1]){const l=_t;gt(n);const c=n.$$={fragment:null,ctx:[],props:o,update:te,not_equal:i,bound:Rn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Rn(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};r&&r(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(f,h,...d)=>{const y=d.length?d[0]:h;return c.ctx&&i(c.ctx[f],c.ctx[f]=y)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](y),u&&bi(n,f)),h}):[],c.update(),u=!0,je(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=fi(e.target);c.fragment&&c.fragment.l(f),f.forEach(X)}else c.fragment&&c.fragment.c();e.intro&&ge(n.$$.fragment),Yt(n,e.target,e.anchor),Ss()}gt(l)}class Jt{constructor(){ae(this,"$$");ae(this,"$$set")}$destroy(){Gt(this,1),this.$destroy=te}$on(e,t){if(!_s(t))return te;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!ci(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const wi="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(wi);const vi=`game:
  id: boiler_7
  title: Boiler 7
  version: "0.1"

  start:
    scene: arrival
    node: dock
  
  ui:
    theme: default
    text_speed: normal`,ki=`items:
  inspector_badge:
    name: boiler.item.badge.name
    description: boiler.item.badge.description

  valve_key:
    name: boiler.item.valve_key.name
    description: boiler.item.valve_key.description

  maintenance_log:
    name: boiler.item.log.name
    description: boiler.item.log.description

  sealed_report:
    name: boiler.item.report.name
    description: boiler.item.report.description
`,Si=`boiler:
  choice:
    enter_floor: "Enter the boiler floor"
    inspect_valve: "Inspect the auxiliary manifold"
    speak_worker: "Speak to the machinist"
    go_control: "Proceed to the control room"
    read_logs: "Review maintenance logs"
    descend: "Descend to the lower chamber"
    return: "Return to the boiler floor"
    back: "Go back"
    stabilize: "Attempt manual stabilization"
    investigate: "Inspect regulator housing"
    retreat: "Retreat to control room"
    proceed_end: "Complete inspection and file report"
    stabilize_after: "Stabilize the regulator"
    take_valve_key: "Take the valve key"
    listen_worker: "Press the machinist for details"
    submit_report: "Submit official report"

  item:
    badge:
      name: "Inspection Badge"
      description: "Test1"
    valve_key:
      name: "Valve Key"
      description: "Test2"
    log:
      name: "Maintenance Logbook"
      description: "Test3"
    report:
      name: "Sealed Report"
      description: "Test4"

  arrival:
    dock: >
      The river fog hangs low over Dock 17.
      Boiler 7's exhaust tower cuts through the mist like a blade.
      The district depends on this unit. If it fails, half the lower wards go dark.
      Your inspection orders are stamped urgent.

  floor:
    main: >
      The boiler floor trembles beneath rotating pistons and hissing valves.
      Workers move with deliberate efficiency, but conversations stop when you pass.
      Pressure gauges along the far wall flicker slightly above normal range.

    valve: >
      The auxiliary pressure manifold is partially disassembled.
      A heavy brass valve key rests on a maintenance hook.
      No one seems eager to claim responsibility.

    worker: >
      A soot-streaked machinist glances at your badge, then away.
      After a pause, they lean closer.
      "The readings started spiking three nights ago.
      Management says it's drift.
      It isn't drift."

    main_worker_warning: >
      The machinist's warning lingers in your thoughts.

  control:
    entry: >
      The control room overlooks the boiler core through reinforced glass.
      Brass levers line the console.
      The central pressure needle vibrates against its housing.

    logs: >
      The maintenance ledger shows repeated recalibrations filed and overwritten.
      Several entries are signed, then crossed out.
      Someone adjusted tolerance limits upward.

    entry_tampering_found: >
      The falsified calibration logs shift your perception of the room.

  lower:
    entrance: >
      The lower chamber radiates dry heat.
      Steam condenses along the iron ribs of the chamber walls.
      The primary regulator housing groans under strain.

    no_valve_key_hint: >
      Without the proper valve key, any manual adjustment would be reckless.

    no_tampering_hint: >
      Nothing here immediately suggests deliberate interference.
      It could still be mechanical fatigue.

    stabilize: >
      You slot the valve key into the regulator assembly.
      A controlled counterturn releases trapped pressure in measured bursts.
      The chamber's vibration eases, though the system remains fragile.

    tampering: >
      Behind the regulator casing, a calibration stop has been filed down.
      Not worn.
      Filed.
      The boiler was forced to tolerate higher pressure than design allowed.

    valve_ready: >
      With the valve key in hand, manual adjustment is possible.

    entrance_suspicion: >
      Knowing the regulator was altered changes the meaning of every vibration.

  conclusion:
    final: >
      Boiler 7 stabilizes under your intervention.
      The district lights will hold tonight.
      What follows depends on what you choose to report.

    neutral: >
      You file a technical summary.
      No accusations.
      No names.
      The Guild will review internally.

    worker_trust: >
      You attach documentation of the tampering.
      The machinists will know someone listened.
      The Guild will not appreciate the implication.

    isolated: >
      You restrict your report to mechanical anomalies.
      Quietly.
      Whatever this was, it will remain buried.

    end: >
      The report is sealed and filed.
      Boiler 7 will hold — for now.
      Whatever forces strained the regulator remain outside the scope of your duty.
      The district sleeps with its lights intact.
`,Ni=`rules:
  systems:
    randomness: false
    inventory: true
    statistics: false
    combat: false

  state_visibility:
    default: visible`,Ii=`scene:
  id: arrival
  nodes:

    - id: dock
      text:
        - key: boiler.arrival.dock
      choices:
        - id: enter_floor
          text: boiler.choice.enter_floor
          effects:
            - add_item:
                id: inspector_badge
          goto:
            scene: boiler_floor
            node: main`,Ei=`scene:
  id: boiler_floor
  nodes:

    - id: main
      text:
        - key: boiler.floor.main

        - if:
            eq:
              var: worker_warning
              value: true
          then:
            key: boiler.floor.main_worker_warning

      choices:
        - id: inspect_valve
          text: boiler.choice.inspect_valve
          goto:
            scene: boiler_floor
            node: valve

        - id: speak_worker
          text: boiler.choice.speak_worker
          goto:
            scene: boiler_floor
            node: worker

        - id: go_control
          text: boiler.choice.go_control
          goto:
            scene: control_room
            node: entry

    - id: valve
      text:
        - key: boiler.floor.valve
      choices:
        - id: take_valve_key
          text: boiler.choice.take_valve_key
          if:
            eq:
              var: has_valve_key
              value: false
          effects:
            - add_item:
                id: valve_key
            - set:
                var: has_valve_key
                value: true
          goto:
            scene: boiler_floor
            node: main

        - id: back_main
          text: boiler.choice.back
          goto:
            scene: boiler_floor
            node: main

    - id: worker
      text:
        - key: boiler.floor.worker
      choices:
        - id: listen_worker
          text: boiler.choice.listen_worker
          if:
            eq:
              var: worker_warning
              value: false
          effects:
            - set:
                var: worker_warning
                value: true
            - add:
                var: trust_level
                value: 1
          goto:
            scene: boiler_floor
            node: main

        - id: back_main
          text: boiler.choice.back
          goto:
            scene: boiler_floor
            node: main`,Ti=`scene:
  id: conclusion
  nodes:

    - id: final
      text:
        - key: boiler.conclusion.final

        - if:
            eq:
              var: trust_level
              value: 0
          then:
            key: boiler.conclusion.neutral

        - if:
            gt:
              var: trust_level
              value: 0
          then:
            key: boiler.conclusion.worker_trust

        - if:
            lt:
              var: trust_level
              value: 0
          then:
            key: boiler.conclusion.isolated

      choices:
        - id: submit_report
          text: boiler.choice.submit_report
          if:
            eq:
              var: report_submitted
              value: false
          effects:
            - add_item:
                id: sealed_report
            - set:
                var: report_submitted
                value: true
          goto:
            scene: conclusion
            node: end

    - id: end
      text:
        - key: boiler.conclusion.end
      choices: []`,Oi=`scene:
  id: control_room
  nodes:

    - id: entry
      text:
        - key: boiler.control.entry

        - if:
            eq:
              var: discovered_tampering
              value: true
          then:
            key: boiler.control.entry_tampering_found

      choices:
        - id: read_logs
          text: boiler.choice.read_logs
          if:
            eq:
              var: discovered_tampering
              value: false
          effects:
            - add_item:
                id: maintenance_log
            - set:
                var: discovered_tampering
                value: true
          goto:
            scene: control_room
            node: entry

        - id: descend
          text: boiler.choice.descend
          goto:
            scene: lower_chamber
            node: entrance

        - id: return_floor
          text: boiler.choice.return
          goto:
            scene: boiler_floor
            node: main`,Ai=`scene:
  id: lower_chamber
  nodes:

    - id: entrance
      text:
        - key: boiler.lower.entrance

        - if:
            eq:
              var: has_valve_key
              value: false
          then:
            key: boiler.lower.no_valve_key_hint

        - if:
            eq:
              var: has_valve_key
              value: true
          then:
            key: boiler.lower.valve_ready

        - if:
            eq:
              var: discovered_tampering
              value: false
          then:
            key: boiler.lower.no_tampering_hint

        - if:
            eq:
              var: discovered_tampering
              value: true
          then:
            key: boiler.lower.entrance_suspicion

      choices:
        - id: investigate
          text: boiler.choice.investigate
          if:
            all:
              - eq:
                  var: discovered_tampering
                  value: true
              - eq:
                  var: investigated_regulator
                  value: false
          effects:
            - set:
                var: investigated_regulator
                value: true
            - add:
                var: trust_level
                value: -1
          goto:
            scene: lower_chamber
            node: tampering_result

        - id: stabilize
          text: boiler.choice.stabilize
          if:
            eq:
              var: has_valve_key
              value: true
          effects:
            - add:
                var: pressure_level
                value: -1
          goto:
            scene: conclusion
            node: final

        - id: retreat
          text: boiler.choice.retreat
          goto:
            scene: control_room
            node: entry

    - id: tampering_result
      text:
        - key: boiler.lower.tampering
      choices:
        - id: back_entrance
          text: boiler.choice.back
          goto:
            scene: lower_chamber
            node: entrance`,$i=`state:
  variables:

    has_valve_key:
      type: boolean
      initial: false
      visible: true

    worker_warning:
      type: boolean
      initial: false
      visible: true

    discovered_tampering:
      type: boolean
      initial: false
      visible: true

    investigated_regulator:
      type: boolean
      initial: false
      visible: true

    report_submitted:
      type: boolean
      initial: false
      visible: true

    trust_level:
      type: number
      initial: 0
      visible: true

    pressure_level:
      type: number
      initial: 3
      visible: true`,Li=`game:
  id: midnight_switchboard
  title: Midnight Switchboard
  version: "0.1"

  start:
    scene: prologue
    node: desk

  ui:
    theme: default
    text_speed: normal`,Ci=`items:

  brass_token:
    name: midnight.item.brass_token.name
    description: midnight.item.brass_token.description

  operator_badge:
    name: midnight.item.operator_badge.name
    description: midnight.item.operator_badge.description

  torn_photograph:
    name: midnight.item.torn_photograph.name
    description: midnight.item.torn_photograph.description

  ritual_diagram:
    name: midnight.item.ritual_diagram.name
    description: midnight.item.ritual_diagram.description

  basement_key:
    name: midnight.item.basement_key.name
    description: midnight.item.basement_key.description

  black_candle:
    name: midnight.item.black_candle.name
    description: midnight.item.black_candle.description`,Di=`midnight:

  prologue:
    desk_intro: "The switchboard office is dimly lit. Only one desk lamp burns."
    call_active: "You lift the receiver. Static crackles across the line, interruped only by the sound of slow, deliberate breathing."
    call_rings_again: "The telephone continues ringing. It refuses to be ignored."
    clock: "The clock reads 00:17."
    anxiety_status: "Your anxiety level is {{anxiety}}."
    line_open: "The line is already open. Someone is breathing softly."

    lift_receiver: "Your fingers hover over the receiver."
    receiver_warm: "It already feels faintly warm."
    ringing_stops: "The ringing stops the instant you lift it."

    breathing_stops: "The breathing stops."
    feel_watched: "You feel watched."
    memory_echo: "For a moment, you remember answering this call before."

    trace_attempt: "You attempt to trace the origin."
    board_flicker: "The switchboard lights flicker."
    signal_internal: "The signal appears to originate from somewhere inside this building."

    ringing_louder: "The ringing is louder now."
    anxiety_display: "Anxiety: {{anxiety}}"
    ringing_drill: "The sound drills into your skull."

  switchboard:
    main_intro: "The switchboard stretches across the wall. Wires hang like veins."
    desk: "The desk is cluttered with invoices and old cigarette ash."
    panel: "The control panel hums faintly beneath your fingertips."
    cabinet: "A narrow filing cabinet stands half open."

    status_line: "Anxiety: {{anxiety}} | Corruption: {{corruption}}"
    light_flicker: "The overhead light flickers intermittently."
    cable_sway: "One of the unplugged cables sways gently. There is no draft."
    board_familiar: "The board feels almost familiar beneath your hands."

    listen_still: "You stand perfectly still."
    listen_normal: "Only the faint hum of electricity answers you."
    listen_other: "Something else hums beneath it. Slow. Patient."

    token_visible: "A small brass token lies near the blotter."

    drawer_open: "The drawer resists before sliding open."
    badge_present: "An old operator badge rests inside."
    badge_indent: "The empty indentation suggests it belonged there for years."

    faded_initial: "One switch is labeled only with a faded initial: M."
    badge_match: "The insignia on the badge matches a scratched symbol near the lower switches."

    photo_visible: "A torn photograph is tucked inside a folder."
    photo_shift: "The photograph seems slightly different each time you glance at it."

  records:
    archive_intro: "Rows of old folders line the archive room."
    files: "Most files are mundane. A few are sealed with red wax."
    diagram_reaction: "The diagram seems older than the paper it rests on."

    dust_air: "Dust hangs in the air like suspended breath."
    drawers_ajar: "The filing drawers seem slightly ajar, though you do not remember opening them."

    diagram_visible: "Among the folders is a brittle sheet covered in geometric inkwork."

    corruption_display: "Corruption: {{corruption}}"
    whisper_floor: "You briefly hear whispering beneath the floorboards."

  basement:
    stairs_intro: "The staircase descends into darkness."
    chamber_intro: "The basement chamber smells of wax and stone."
    ritual_ready: "You kneel at the center of the circle."
    ritual_complete: "The candle burns unnaturally steady."

    status_line: "Anxiety: {{anxiety}} | Corruption: {{corruption}}"
    hands_tremble: "Your hands tremble as you grip the railing."
    shift_below: "Something shifts below. Not footsteps. Something heavier."

    chamber_description: "The chamber is circular. Symbols are carved into the stone."
    corruption_display: "Corruption: {{corruption}}"
    symbols_pulse: "The symbols faintly pulse."

    pattern_memory: "You replicate the pattern from memory."

    corruption_surge: "Corruption surges to {{corruption}}."
    air_tears: "The air tears open."

  operator:
    line_active: "The operator's voice emerges through static."
    trust_shift: "There is recognition in the silence."
    tension: "The conversation tightens like a wire pulled too far."
    revelation: "The truth filters through distortion."

    status_line: "Anxiety: {{anxiety}} | Trust: {{operator_trust}} | Corruption: {{corruption}}"
    layered_voice: "The voice sounds layered, as if two people speak in unison."

    voice_softens: "The voice softens. \\"You finally remember.\\""

    receiver_hot: "The receiver feels hot against your ear."

    truth_inhuman: "The truth is no longer human."

  ending:
    ritual_outcome: "The ritual concludes."
    reconciliation: "The voice thanks you. The line goes silent."
    collapse: "The connection overloads. Reality flickers."
    revelation: "The truth settles heavily in the air."
    sealed: "The chamber grows quiet. The veil remains intact."
    consumed: "Darkness folds inward. The line never disconnects."
    closed: "The office is empty. Morning light filters in."
    open: "The switchboard hums. Something remains connected."

    corruption_level: "Corruption level: {{corruption}}"
    veil_split: "The veil splits completely."
    never_alone: "You were never alone in the room."

  choice:
    answer_call: "Answer the ringing phone"
    answer_after_delay: "Finally answer the ringing phone"
    ignore_call: "Ignore the ringing"
    leave_desk: "Leave the desk"

    speak: "Speak into the receiver"
    hang_up: "Hang up"

    trace_call: "Attempt to trace the call"
    listen_room: "Stand still and listen"
    open_drawer: "Open the desk drawer"
    take_badge: "Take the operator badge"

    inspect_desk: "Inspect the desk"
    inspect_panel: "Examine the control panel"
    inspect_cabinet: "Open the filing cabinet"
    go_records: "Enter the records room"
    open_operator_line: "Open a direct operator line"
    descend_basement: "Descend to the basement"
    back: "Return"

    take_token: "Take the brass token"
    study_label: "Study the faded label"
    take_photo: "Take the torn photograph"
    search_deeper: "Search deeper inside"

    search_files: "Search through the files"
    return_switchboard: "Return to the switchboard"
    take_diagram: "Take the ritual diagram"
    disturb_stack: "Disturb the stack of folders"
    steady_self: "Steady yourself"

    descend_fully: "Descend fully"
    hesitate: "Hesitate on the stairs"
    retreat: "Retreat upstairs"

    prepare_ritual: "Prepare the ritual"
    search_room: "Search the chamber"
    ignite_candle: "Ignite the black candle"
    abort_ritual: "Abort the ritual"
    face_consequence: "Face the consequence"

    speak_name: "Speak the operator's name"
    accuse: "Accuse the voice"
    listen_silently: "Listen silently"
    accept_truth: "Accept the truth"
    doubt_again: "Express doubt"
    escalate: "Escalate the confrontation"
    withdraw: "Withdraw from the line"
    pursue_truth: "Pursue the truth"
    disconnect: "Disconnect the line"

    continue: "Continue"
    finish: "Finish"

  item:
    brass_token:
      name: "Brass Token"
      description: "A heavy brass token engraved with an unfamiliar symbol."

    operator_badge:
      name: "Operator Badge"
      description: "A tarnished badge bearing the switchboard insignia."

    torn_photograph:
      name: "Torn Photograph"
      description: "A half-burned photograph of two figures near the switchboard."

    ritual_diagram:
      name: "Ritual Diagram"
      description: "A geometric pattern drawn in fading ink."

    basement_key:
      name: "Basement Key"
      description: "A cold iron key labeled only with a scratched B."

    black_candle:
      name: "Black Candle"
      description: "A thick candle that absorbs more light than it reflects."`,Mi=`rules:
  systems:
    randomness: true
    inventory: true
    statistics: false
    combat: false

  state_visibility:
    default: visible`,Pi=`scene:
  id: basement_chamber

  nodes:

    - id: chamber
      text:
        - key: midnight.basement.chamber_intro
        - key: midnight.basement.chamber_description
        - key: midnight.basement.corruption_display
        - if:
            gt:
              var: corruption
              value: 2
          then:
            key: midnight.basement.symbols_pulse
      choices:

        - id: prepare_ritual
          text: midnight.choice.prepare_ritual
          if:
            all:
              - has_item:
                  id: ritual_diagram
              - has_item:
                  id: black_candle
          goto:
            scene: basement_chamber
            node: ritual_ready

        - id: search_room
          text: midnight.choice.search_room
          if:
            not:
              has_item:
                id: black_candle
          effects:
            - add_item:
                id: black_candle
            - add:
                var: anxiety
                value: 1
          goto:
            scene: basement_chamber
            node: chamber

        - id: retreat
          text: midnight.choice.retreat
          goto:
            scene: basement_stairs
            node: stairs


    - id: ritual_ready
      text:
        - key: midnight.basement.ritual_ready
        - if:
            eq:
              var: ritual_unlocked
              value: true
          then:
            key: midnight.basement.pattern_memory
      choices:

        - id: ignite_candle
          text: midnight.choice.ignite_candle
          effects:
            - add:
                var: corruption
                value: 2
          goto:
            scene: basement_chamber
            node: ritual_complete

        - id: abort_ritual
          text: midnight.choice.abort_ritual
          effects:
            - add:
                var: anxiety
                value: 1
          goto:
            scene: basement_chamber
            node: chamber


    - id: ritual_complete
      text:
        - key: midnight.basement.ritual_complete
        - key: midnight.basement.corruption_surge
        - if:
            gte:
              var: corruption
              value: 4
          then:
            key: midnight.basement.air_tears
      choices:

        - id: face_consequence
          text: midnight.choice.face_consequence
          goto:
            scene: ending
            node: ritual_outcome`,Bi=`scene:
  id: basement_stairs

  nodes:

    - id: stairs
      text:
        - key: midnight.basement.stairs_intro
        - key: midnight.basement.status_line
        - if:
            gt:
              var: anxiety
              value: 2
          then:
            key: midnight.basement.hands_tremble
        - if:
            gt:
              var: corruption
              value: 1
          then:
            key: midnight.basement.shift_below
      effects:
        - set:
            var: in_switchboard_room
            value: false
        - set:
            var: in_basement
            value: true
      choices:

        - id: descend_fully
          text: midnight.choice.descend_fully
          goto:
            scene: basement_chamber
            node: chamber

        - id: hesitate
          text: midnight.choice.hesitate
          effects:
            - add:
                var: anxiety
                value: 1
          goto:
            scene: basement_stairs
            node: stairs

        - id: retreat_upstairs
          text: midnight.choice.retreat
          effects:
            - set:
                var: in_switchboard_room
                value: true
            - set:
                var: in_basement
                value: false
          goto:
            scene: switchboard_room
            node: main`,Fi=`scene:
  id: ending

  nodes:

    - id: ritual_outcome
      text:
        - key: midnight.ending.ritual_outcome
        - key: midnight.ending.corruption_level
        - if:
            gte:
              var: corruption
              value: 4
          then:
            key: midnight.ending.veil_split
      effects:
        - set:
            var: ending_triggered
            value: true
      choices:

        - id: ritual_good
          text: midnight.choice.continue
          if:
            lt:
              var: corruption
              value: 4
          goto:
            scene: ending
            node: sealed

        - id: ritual_bad
          text: midnight.choice.continue
          if:
            gte:
              var: corruption
              value: 4
          goto:
            scene: ending
            node: consumed


    - id: reconciliation
      text:
        - key: midnight.ending.reconciliation
      effects:
        - set:
            var: ending_triggered
            value: true
      choices:
        - id: end_reconciliation
          text: midnight.choice.finish
          goto:
            scene: ending
            node: closed


    - id: collapse
      text:
        - key: midnight.ending.collapse
      effects:
        - set:
            var: ending_triggered
            value: true
      choices:
        - id: end_collapse
          text: midnight.choice.finish
          goto:
            scene: ending
            node: consumed


    - id: revelation_outcome
      text:
        - key: midnight.ending.revelation
        - if:
            gt:
              var: corruption
              value: 3
          then:
            key: midnight.ending.never_alone
      effects:
        - set:
            var: ending_triggered
            value: true
      choices:
        - id: end_revelation
          text: midnight.choice.finish
          goto:
            scene: ending
            node: open


    - id: sealed
      text:
        - key: midnight.ending.sealed
      choices: []

    - id: consumed
      text:
        - key: midnight.ending.consumed
      choices: []

    - id: closed
      text:
        - key: midnight.ending.closed
      choices: []

    - id: open
      text:
        - key: midnight.ending.open
      choices: []`,ji=`scene:
  id: operator_line

  nodes:

    - id: line_active
      text:
        - key: midnight.operator.line_active
        - key: midnight.operator.status_line
        - if:
            gt:
              var: corruption
              value: 2
          then:
            key: midnight.operator.layered_voice
      choices:

        - id: speak_name
          text: midnight.choice.speak_name
          if:
            eq:
              var: knows_operator_name
              value: true
          effects:
            - add:
                var: operator_trust
                value: 1
          goto:
            scene: operator_line
            node: trust_shift

        - id: accuse
          text: midnight.choice.accuse
          effects:
            - add:
                var: anxiety
                value: 1
            - add:
                var: operator_trust
                value: -1
          goto:
            scene: operator_line
            node: tension

        - id: listen_silently
          text: midnight.choice.listen_silently
          effects:
            - add:
                var: corruption
                value:
                  random: "1/2"
          goto:
            scene: operator_line
            node: revelation

        - id: hang_up_line
          text: midnight.choice.hang_up
          goto:
            scene: switchboard_room
            node: main


    - id: trust_shift
      text:
        - key: midnight.operator.trust_shift
        - if:
            gte:
              var: operator_trust
              value: 2
          then:
            key: midnight.operator.voice_softens
      choices:

        - id: accept_truth
          text: midnight.choice.accept_truth
          if:
            gte:
              var: operator_trust
              value: 2
          goto:
            scene: ending
            node: reconciliation

        - id: doubt_again
          text: midnight.choice.doubt_again
          goto:
            scene: operator_line
            node: tension


    - id: tension
      text:
        - key: midnight.operator.tension
        - if:
            gt:
              var: anxiety
              value: 3
          then:
            key: midnight.operator.receiver_hot
      choices:

        - id: escalate
          text: midnight.choice.escalate
          effects:
            - add:
                var: corruption
                value: 1
          goto:
            scene: ending
            node: collapse

        - id: withdraw
          text: midnight.choice.withdraw
          goto:
            scene: switchboard_room
            node: main


    - id: revelation
      text:
        - key: midnight.operator.revelation
        - if:
            gt:
              var: corruption
              value: 3
          then:
            key: midnight.operator.truth_inhuman
      choices:

        - id: pursue_truth
          text: midnight.choice.pursue_truth
          goto:
            scene: ending
            node: revelation_outcome

        - id: disconnect
          text: midnight.choice.disconnect
          goto:
            scene: switchboard_room
            node: main`,Ki=`scene:
  id: prologue

  nodes:

    - id: desk
      text:
        - key: midnight.prologue.desk_intro
        - key: midnight.prologue.clock
        - key: midnight.prologue.anxiety_status
        - if:
            eq:
              var: call_answered
              value: true
          then:
            key: midnight.prologue.line_open
      choices:
        - id: answer_call
          text: midnight.choice.answer_call
          if:
            eq:
              var: call_answered
              value: false
          effects:
            - set:
                var: call_answered
                value: true
            - add:
                var: anxiety
                value:
                  random: "1/2"
          goto:
            scene: prologue
            node: lift_receiver

        - id: ignore_call
          text: midnight.choice.ignore_call
          if:
            eq:
              var: call_answered
              value: false
          effects:
            - add:
                var: anxiety
                value: 1
          goto:
            scene: prologue
            node: call_rings_again

        - id: proceed_room
          text: midnight.choice.leave_desk
          if:
            eq:
              var: call_answered
              value: true
          goto:
            scene: switchboard_room
            node: main


    - id: lift_receiver
      text:
        - key: midnight.prologue.lift_receiver
        - if:
            gte:
              var: anxiety
              value: 1
          then:
            key: midnight.prologue.receiver_warm
        - key: midnight.prologue.ringing_stops
      choices:
        - id: continue_answer
          text: midnight.choice.answer_call
          goto:
            scene: prologue
            node: call_active


    - id: call_active
      text:
        - key: midnight.prologue.call_active
        - key: midnight.prologue.breathing_stops
        - if:
            gte:
              var: anxiety
              value: 1
          then:
            key: midnight.prologue.feel_watched
        - if:
            gte:
              var: corruption
              value: 1
          then:
            key: midnight.prologue.memory_echo
      choices:
        - id: speak
          text: midnight.choice.speak
          effects:
            - add:
                var: operator_trust
                value: 1
          goto:
            scene: switchboard_room
            node: main

        - id: hang_up
          text: midnight.choice.hang_up
          effects:
            - add:
                var: anxiety
                value: 1
          goto:
            scene: switchboard_room
            node: main

        - id: trace_call
          text: midnight.choice.trace_call
          effects:
            - add:
                var: anxiety
                value: 1
          goto:
            scene: prologue
            node: static_response


    - id: static_response
      text:
        - key: midnight.prologue.trace_attempt
        - key: midnight.prologue.board_flicker
        - if:
            gte:
              var: corruption
              value: 1
          then:
            key: midnight.prologue.signal_internal
      choices:
        - id: abandon_trace
          text: midnight.choice.back
          goto:
            scene: prologue
            node: call_active


    - id: call_rings_again
      text:
        - key: midnight.prologue.call_rings_again
        - key: midnight.prologue.ringing_louder
        - key: midnight.prologue.anxiety_display
        - if:
            gte:
              var: anxiety
              value: 2
          then:
            key: midnight.prologue.ringing_drill
      choices:
        - id: answer_after_delay
          text: midnight.choice.answer_after_delay
          effects:
            - set:
                var: call_answered
                value: true
            - add:
                var: corruption
                value: 1
          goto:
            scene: prologue
            node: lift_receiver`,qi=`scene:
  id: records_room

  nodes:

    - id: archive
      text:
        - key: midnight.records.archive_intro
        - key: midnight.records.dust_air
        - if:
            gt:
              var: corruption
              value: 1
          then:
            key: midnight.records.drawers_ajar
      choices:

        - id: search_files
          text: midnight.choice.search_files
          goto:
            scene: records_room
            node: files

        - id: return_switchboard
          text: midnight.choice.return_switchboard
          goto:
            scene: switchboard_room
            node: main


    - id: files
      text:
        - key: midnight.records.files
        - if:
            not:
              has_item:
                id: ritual_diagram
          then:
            key: midnight.records.diagram_visible
      choices:

        - id: take_diagram
          text: midnight.choice.take_diagram
          if:
            not:
              has_item:
                id: ritual_diagram
          effects:
            - add_item:
                id: ritual_diagram
            - set:
                var: ritual_unlocked
                value: true
            - add:
                var: corruption
                value: 1
          goto:
            scene: records_room
            node: diagram_reaction

        - id: disturb_stack
          text: midnight.choice.disturb_stack
          effects:
            - add:
                var: anxiety
                value:
                  random: "1/2"
          goto:
            scene: records_room
            node: archive

        - id: back_archive
          text: midnight.choice.back
          goto:
            scene: records_room
            node: archive


    - id: diagram_reaction
      text:
        - key: midnight.records.diagram_reaction
        - key: midnight.records.corruption_display
        - if:
            gte:
              var: corruption
              value: 2
          then:
            key: midnight.records.whisper_floor
      choices:

        - id: steady_self
          text: midnight.choice.steady_self
          effects:
            - add:
                var: anxiety
                value: -1
          goto:
            scene: records_room
            node: archive

        - id: return_with_diagram
          text: midnight.choice.return_switchboard
          goto:
            scene: switchboard_room
            node: main`,Ri=`scene:
  id: switchboard_room

  nodes:

    - id: main
      text:
        - key: midnight.switchboard.main_intro
        - key: midnight.switchboard.status_line
        - if:
            gt:
              var: anxiety
              value: 2
          then:
            key: midnight.switchboard.light_flicker
        - if:
            gte:
              var: corruption
              value: 2
          then:
            key: midnight.switchboard.cable_sway
        - if:
            gte:
              var: operator_trust
              value: 2
          then:
            key: midnight.switchboard.board_familiar
      choices:
        - id: inspect_desk
          text: midnight.choice.inspect_desk
          goto:
            scene: switchboard_room
            node: desk

        - id: inspect_panel
          text: midnight.choice.inspect_panel
          goto:
            scene: switchboard_room
            node: panel

        - id: inspect_cabinet
          text: midnight.choice.inspect_cabinet
          goto:
            scene: switchboard_room
            node: cabinet

        - id: listen_room
          text: midnight.choice.listen_room
          goto:
            scene: switchboard_room
            node: ambience

        - id: go_records
          text: midnight.choice.go_records
          goto:
            scene: records_room
            node: archive

        - id: go_operator_line
          text: midnight.choice.open_operator_line
          if:
            gt:
              var: operator_trust
              value: 0
          goto:
            scene: operator_line
            node: line_active

        - id: go_basement
          text: midnight.choice.descend_basement
          if:
            has_item:
              id: basement_key
          goto:
            scene: basement_stairs
            node: stairs


    - id: ambience
      text:
        - key: midnight.switchboard.listen_still
        - if:
            lt:
              var: corruption
              value: 2
          then:
            key: midnight.switchboard.listen_normal
        - if:
            gte:
              var: corruption
              value: 2
          then:
            key: midnight.switchboard.listen_other
      choices:
        - id: return_from_listen
          text: midnight.choice.back
          goto:
            scene: switchboard_room
            node: main


    - id: desk
      text:
        - key: midnight.switchboard.desk
        - if:
            not:
              has_item:
                id: brass_token
          then:
            key: midnight.switchboard.token_visible
      choices:
        - id: take_token
          text: midnight.choice.take_token
          if:
            not:
              has_item:
                id: brass_token
          effects:
            - add_item:
                id: brass_token
          goto:
            scene: switchboard_room
            node: desk

        - id: open_drawer
          text: midnight.choice.open_drawer
          goto:
            scene: switchboard_room
            node: drawer

        - id: back_main
          text: midnight.choice.back
          goto:
            scene: switchboard_room
            node: main


    - id: drawer
      text:
        - key: midnight.switchboard.drawer_open
        - if:
            not:
              has_item:
                id: operator_badge
          then:
            key: midnight.switchboard.badge_present
        - if:
            has_item:
              id: operator_badge
          then:
            key: midnight.switchboard.badge_indent
      choices:
        - id: take_badge
          text: midnight.choice.take_badge
          if:
            not:
              has_item:
                id: operator_badge
          effects:
            - add_item:
                id: operator_badge
            - add:
                var: operator_trust
                value: 1
          goto:
            scene: switchboard_room
            node: drawer

        - id: close_drawer
          text: midnight.choice.back
          goto:
            scene: switchboard_room
            node: desk


    - id: panel
      text:
        - key: midnight.switchboard.panel
        - if:
            eq:
              var: knows_operator_name
              value: false
          then:
            key: midnight.switchboard.faded_initial
        - if:
            has_item:
              id: operator_badge
          then:
            key: midnight.switchboard.badge_match
      choices:
        - id: study_label
          text: midnight.choice.study_label
          if:
            eq:
              var: knows_operator_name
              value: false
          effects:
            - set:
                var: knows_operator_name
                value: true
            - add:
                var: operator_trust
                value: 1
          goto:
            scene: switchboard_room
            node: panel

        - id: back_main_panel
          text: midnight.choice.back
          goto:
            scene: switchboard_room
            node: main


    - id: cabinet
      text:
        - key: midnight.switchboard.cabinet
        - if:
            not:
              has_item:
                id: torn_photograph
          then:
            key: midnight.switchboard.photo_visible
        - if:
            gte:
              var: corruption
              value: 1
          then:
            key: midnight.switchboard.photo_shift
      choices:
        - id: take_photo
          text: midnight.choice.take_photo
          if:
            not:
              has_item:
                id: torn_photograph
          effects:
            - add_item:
                id: torn_photograph
            - add:
                var: anxiety
                value: 1
          goto:
            scene: switchboard_room
            node: cabinet

        - id: find_key
          text: midnight.choice.search_deeper
          if:
            all:
              - has_item:
                  id: torn_photograph
              - not:
                  has_item:
                    id: basement_key
          effects:
            - add_item:
                id: basement_key
          goto:
            scene: switchboard_room
            node: cabinet

        - id: back_main_cabinet
          text: midnight.choice.back
          goto:
            scene: switchboard_room
            node: main`,Ui=`state:
  variables:

    # Narrative progression flags
    call_answered:
      type: boolean
      initial: false
      visible: true

    knows_operator_name:
      type: boolean
      initial: false
      visible: true

    ritual_unlocked:
      type: boolean
      initial: false
      visible: true

    ending_triggered:
      type: boolean
      initial: false
      visible: false

    # Psychological pressure system
    anxiety:
      type: number
      initial: 0
      visible: true

    # Corruption escalation counter
    corruption:
      type: number
      initial: 0
      visible: true

    # Trust variable affecting dialogue paths
    operator_trust:
      type: number
      initial: 0
      visible: true

    # Location awareness
    in_switchboard_room:
      type: boolean
      initial: true
      visible: true

    in_basement:
      type: boolean
      initial: false
      visible: true`,Sn=Symbol.for("yaml.alias"),pn=Symbol.for("yaml.document"),Fe=Symbol.for("yaml.map"),Ns=Symbol.for("yaml.pair"),Ae=Symbol.for("yaml.scalar"),lt=Symbol.for("yaml.seq"),ke=Symbol.for("yaml.node.type"),He=n=>!!n&&typeof n=="object"&&n[ke]===Sn,zt=n=>!!n&&typeof n=="object"&&n[ke]===pn,St=n=>!!n&&typeof n=="object"&&n[ke]===Fe,Z=n=>!!n&&typeof n=="object"&&n[ke]===Ns,V=n=>!!n&&typeof n=="object"&&n[ke]===Ae,Nt=n=>!!n&&typeof n=="object"&&n[ke]===lt;function W(n){if(n&&typeof n=="object")switch(n[ke]){case Fe:case lt:return!0}return!1}function Q(n){if(n&&typeof n=="object")switch(n[ke]){case Sn:case Fe:case Ae:case lt:return!0}return!1}const Is=n=>(V(n)||W(n))&&!!n.anchor,Re=Symbol("break visit"),Vi=Symbol("skip children"),pt=Symbol("remove node");function ct(n,e){const t=xi(e);zt(n)?et(null,n.contents,t,Object.freeze([n]))===pt&&(n.contents=null):et(null,n,t,Object.freeze([]))}ct.BREAK=Re;ct.SKIP=Vi;ct.REMOVE=pt;function et(n,e,t,s){const i=Yi(n,e,t,s);if(Q(i)||Z(i))return Gi(n,s,i),et(n,i,t,s);if(typeof i!="symbol"){if(W(e)){s=Object.freeze(s.concat(e));for(let o=0;o<e.items.length;++o){const r=et(o,e.items[o],t,s);if(typeof r=="number")o=r-1;else{if(r===Re)return Re;r===pt&&(e.items.splice(o,1),o-=1)}}}else if(Z(e)){s=Object.freeze(s.concat(e));const o=et("key",e.key,t,s);if(o===Re)return Re;o===pt&&(e.key=null);const r=et("value",e.value,t,s);if(r===Re)return Re;r===pt&&(e.value=null)}}return i}function xi(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function Yi(n,e,t,s){var i,o,r,a,l;if(typeof t=="function")return t(n,e,s);if(St(e))return(i=t.Map)==null?void 0:i.call(t,n,e,s);if(Nt(e))return(o=t.Seq)==null?void 0:o.call(t,n,e,s);if(Z(e))return(r=t.Pair)==null?void 0:r.call(t,n,e,s);if(V(e))return(a=t.Scalar)==null?void 0:a.call(t,n,e,s);if(He(e))return(l=t.Alias)==null?void 0:l.call(t,n,e,s)}function Gi(n,e,t){const s=e[e.length-1];if(W(s))s.items[n]=t;else if(Z(s))n==="key"?s.key=t:s.value=t;else if(zt(s))s.contents=t;else{const i=He(s)?"alias":"scalar";throw new Error(`Cannot replace node with ${i} parent`)}}const Hi={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Ji=n=>n.replace(/[!,[\]{}]/g,e=>Hi[e]);class fe{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},fe.defaultYaml,e),this.tags=Object.assign({},fe.defaultTags,t)}clone(){const e=new fe(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new fe(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:fe.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},fe.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:fe.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},fe.defaultTags),this.atNextDocument=!1);const s=e.trim().split(/[ \t]+/),i=s.shift();switch(i){case"%TAG":{if(s.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),s.length<2))return!1;const[o,r]=s;return this.tags[o]=r,!0}case"%YAML":{if(this.yaml.explicit=!0,s.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[o]=s;if(o==="1.1"||o==="1.2")return this.yaml.version=o,!0;{const r=/^\d+\.\d+$/.test(o);return t(6,`Unsupported YAML version ${o}`,r),!1}}default:return t(0,`Unknown directive ${i}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const r=e.slice(2,-1);return r==="!"||r==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),r)}const[,s,i]=e.match(/^(.*!)([^!]*)$/s);i||t(`The ${e} tag has no suffix`);const o=this.tags[s];if(o)try{return o+decodeURIComponent(i)}catch(r){return t(String(r)),null}return s==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,s]of Object.entries(this.tags))if(e.startsWith(s))return t+Ji(e.substring(s.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],s=Object.entries(this.tags);let i;if(e&&s.length>0&&Q(e.contents)){const o={};ct(e.contents,(r,a)=>{Q(a)&&a.tag&&(o[a.tag]=!0)}),i=Object.keys(o)}else i=[];for(const[o,r]of s)o==="!!"&&r==="tag:yaml.org,2002:"||(!e||i.some(a=>a.startsWith(r)))&&t.push(`%TAG ${o} ${r}`);return t.join(`
`)}}fe.defaultYaml={explicit:!1,version:"1.2"};fe.defaultTags={"!!":"tag:yaml.org,2002:"};function Es(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function Ts(n){const e=new Set;return ct(n,{Value(t,s){s.anchor&&e.add(s.anchor)}}),e}function Os(n,e){for(let t=1;;++t){const s=`${n}${t}`;if(!e.has(s))return s}}function zi(n,e){const t=[],s=new Map;let i=null;return{onAnchor:o=>{t.push(o),i??(i=Ts(n));const r=Os(e,i);return i.add(r),r},setAnchors:()=>{for(const o of t){const r=s.get(o);if(typeof r=="object"&&r.anchor&&(V(r.node)||W(r.node)))r.node.anchor=r.anchor;else{const a=new Error("Failed to resolve repeated object (this should not happen)");throw a.source=o,a}}},sourceObjects:s}}function tt(n,e,t,s){if(s&&typeof s=="object")if(Array.isArray(s))for(let i=0,o=s.length;i<o;++i){const r=s[i],a=tt(n,s,String(i),r);a===void 0?delete s[i]:a!==r&&(s[i]=a)}else if(s instanceof Map)for(const i of Array.from(s.keys())){const o=s.get(i),r=tt(n,s,i,o);r===void 0?s.delete(i):r!==o&&s.set(i,r)}else if(s instanceof Set)for(const i of Array.from(s)){const o=tt(n,s,i,i);o===void 0?s.delete(i):o!==i&&(s.delete(i),s.add(o))}else for(const[i,o]of Object.entries(s)){const r=tt(n,s,i,o);r===void 0?delete s[i]:r!==o&&(s[i]=r)}return n.call(e,t,s)}function ve(n,e,t){if(Array.isArray(n))return n.map((s,i)=>ve(s,String(i),t));if(n&&typeof n.toJSON=="function"){if(!t||!Is(n))return n.toJSON(e,t);const s={aliasCount:0,count:1,res:void 0};t.anchors.set(n,s),t.onCreate=o=>{s.res=o,delete t.onCreate};const i=n.toJSON(e,t);return t.onCreate&&t.onCreate(i),i}return typeof n=="bigint"&&!(t!=null&&t.keep)?Number(n):n}class Nn{constructor(e){Object.defineProperty(this,ke,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:s,onAnchor:i,reviver:o}={}){if(!zt(e))throw new TypeError("A document argument is required");const r={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},a=ve(this,"",r);if(typeof i=="function")for(const{count:l,res:c}of r.anchors.values())i(c,l);return typeof o=="function"?tt(o,{"":a},"",a):a}}class In extends Nn{constructor(e){super(Sn),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){let s;t!=null&&t.aliasResolveCache?s=t.aliasResolveCache:(s=[],ct(e,{Node:(o,r)=>{(He(r)||Is(r))&&s.push(r)}}),t&&(t.aliasResolveCache=s));let i;for(const o of s){if(o===this)break;o.anchor===this.source&&(i=o)}return i}toJSON(e,t){if(!t)return{source:this.source};const{anchors:s,doc:i,maxAliasCount:o}=t,r=this.resolve(i,t);if(!r){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let a=s.get(r);if(a||(ve(r,null,t),a=s.get(r)),(a==null?void 0:a.res)===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(o>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=Ft(i,r,s)),a.count*a.aliasCount>o)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return a.res}toString(e,t,s){const i=`*${this.source}`;if(e){if(Es(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const o=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(o)}if(e.implicitKey)return`${i} `}return i}}function Ft(n,e,t){if(He(e)){const s=e.resolve(n),i=t&&s&&t.get(s);return i?i.count*i.aliasCount:0}else if(W(e)){let s=0;for(const i of e.items){const o=Ft(n,i,t);o>s&&(s=o)}return s}else if(Z(e)){const s=Ft(n,e.key,t),i=Ft(n,e.value,t);return Math.max(s,i)}return 1}const As=n=>!n||typeof n!="function"&&typeof n!="object";class D extends Nn{constructor(e){super(Ae),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:ve(this.value,e,t)}toString(){return String(this.value)}}D.BLOCK_FOLDED="BLOCK_FOLDED";D.BLOCK_LITERAL="BLOCK_LITERAL";D.PLAIN="PLAIN";D.QUOTE_DOUBLE="QUOTE_DOUBLE";D.QUOTE_SINGLE="QUOTE_SINGLE";const Wi="tag:yaml.org,2002:";function Qi(n,e,t){if(e){const s=t.filter(o=>o.tag===e),i=s.find(o=>!o.format)??s[0];if(!i)throw new Error(`Tag ${e} not found`);return i}return t.find(s=>{var i;return((i=s.identify)==null?void 0:i.call(s,n))&&!s.format})}function bt(n,e,t){var f,h,d;if(zt(n)&&(n=n.contents),Q(n))return n;if(Z(n)){const y=(h=(f=t.schema[Fe]).createNode)==null?void 0:h.call(f,t.schema,null,t);return y.items.push(n),y}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:s,onAnchor:i,onTagObj:o,schema:r,sourceObjects:a}=t;let l;if(s&&n&&typeof n=="object"){if(l=a.get(n),l)return l.anchor??(l.anchor=i(n)),new In(l.anchor);l={anchor:null,node:null},a.set(n,l)}e!=null&&e.startsWith("!!")&&(e=Wi+e.slice(2));let c=Qi(n,e,r.tags);if(!c){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const y=new D(n);return l&&(l.node=y),y}c=n instanceof Map?r[Fe]:Symbol.iterator in Object(n)?r[lt]:r[Fe]}o&&(o(c),delete t.onTagObj);const u=c!=null&&c.createNode?c.createNode(t.schema,n,t):typeof((d=c==null?void 0:c.nodeClass)==null?void 0:d.from)=="function"?c.nodeClass.from(t.schema,n,t):new D(n);return e?u.tag=e:c.default||(u.tag=c.tag),l&&(l.node=u),u}function Ut(n,e,t){let s=t;for(let i=e.length-1;i>=0;--i){const o=e[i];if(typeof o=="number"&&Number.isInteger(o)&&o>=0){const r=[];r[o]=s,s=r}else s=new Map([[o,s]])}return bt(s,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const dt=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class $s extends Nn{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(s=>Q(s)||Z(s)?s.clone(e):s),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(dt(e))this.add(t);else{const[s,...i]=e,o=this.get(s,!0);if(W(o))o.addIn(i,t);else if(o===void 0&&this.schema)this.set(s,Ut(this.schema,i,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`)}}deleteIn(e){const[t,...s]=e;if(s.length===0)return this.delete(t);const i=this.get(t,!0);if(W(i))return i.deleteIn(s);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${s}`)}getIn(e,t){const[s,...i]=e,o=this.get(s,!0);return i.length===0?!t&&V(o)?o.value:o:W(o)?o.getIn(i,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!Z(t))return!1;const s=t.value;return s==null||e&&V(s)&&s.value==null&&!s.commentBefore&&!s.comment&&!s.tag})}hasIn(e){const[t,...s]=e;if(s.length===0)return this.has(t);const i=this.get(t,!0);return W(i)?i.hasIn(s):!1}setIn(e,t){const[s,...i]=e;if(i.length===0)this.set(s,t);else{const o=this.get(s,!0);if(W(o))o.setIn(i,t);else if(o===void 0&&this.schema)this.set(s,Ut(this.schema,i,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`)}}}const Xi=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function Le(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const Ve=(n,e,t)=>n.endsWith(`
`)?Le(t,e):t.includes(`
`)?`
`+Le(t,e):(n.endsWith(" ")?"":" ")+t,Ls="flow",yn="block",jt="quoted";function Wt(n,e,t="flow",{indentAtStart:s,lineWidth:i=80,minContentWidth:o=20,onFold:r,onOverflow:a}={}){if(!i||i<0)return n;i<o&&(o=0);const l=Math.max(1+o,1+i-e.length);if(n.length<=l)return n;const c=[],u={};let f=i-e.length;typeof s=="number"&&(s>i-Math.max(2,o)?c.push(0):f=i-s);let h,d,y=!1,m=-1,g=-1,_=-1;t===yn&&(m=xn(n,m,e.length),m!==-1&&(f=m+l));for(let N;N=n[m+=1];){if(t===jt&&N==="\\"){switch(g=m,n[m+1]){case"x":m+=3;break;case"u":m+=5;break;case"U":m+=9;break;default:m+=1}_=m}if(N===`
`)t===yn&&(m=xn(n,m,e.length)),f=m+e.length+l,h=void 0;else{if(N===" "&&d&&d!==" "&&d!==`
`&&d!=="	"){const S=n[m+1];S&&S!==" "&&S!==`
`&&S!=="	"&&(h=m)}if(m>=f)if(h)c.push(h),f=h+l,h=void 0;else if(t===jt){for(;d===" "||d==="	";)d=N,N=n[m+=1],y=!0;const S=m>_+1?m-2:g-1;if(u[S])return n;c.push(S),u[S]=!0,f=S+l,h=void 0}else y=!0}d=N}if(y&&a&&a(),c.length===0)return n;r&&r();let v=n.slice(0,c[0]);for(let N=0;N<c.length;++N){const S=c[N],E=c[N+1]||n.length;S===0?v=`
${e}${n.slice(0,E)}`:(t===jt&&u[S]&&(v+=`${n[S]}\\`),v+=`
${e}${n.slice(S+1,E)}`)}return v}function xn(n,e,t){let s=e,i=e+1,o=n[i];for(;o===" "||o==="	";)if(e<i+t)o=n[++e];else{do o=n[++e];while(o&&o!==`
`);s=e,i=e+1,o=n[i]}return s}const Qt=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),Xt=n=>/^(%|---|\.\.\.)/m.test(n);function Zi(n,e,t){if(!e||e<0)return!1;const s=e-t,i=n.length;if(i<=s)return!1;for(let o=0,r=0;o<i;++o)if(n[o]===`
`){if(o-r>s)return!0;if(r=o+1,i-r<=s)return!1}return!0}function yt(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:s}=e,i=e.options.doubleQuotedMinMultiLineLength,o=e.indent||(Xt(n)?"  ":"");let r="",a=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(r+=t.slice(a,l)+"\\ ",l+=1,a=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{r+=t.slice(a,l);const u=t.substr(l+2,4);switch(u){case"0000":r+="\\0";break;case"0007":r+="\\a";break;case"000b":r+="\\v";break;case"001b":r+="\\e";break;case"0085":r+="\\N";break;case"00a0":r+="\\_";break;case"2028":r+="\\L";break;case"2029":r+="\\P";break;default:u.substr(0,2)==="00"?r+="\\x"+u.substr(2):r+=t.substr(l,6)}l+=5,a=l+1}break;case"n":if(s||t[l+2]==='"'||t.length<i)l+=1;else{for(r+=t.slice(a,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)r+=`
`,l+=2;r+=o,t[l+2]===" "&&(r+="\\"),l+=1,a=l+1}break;default:l+=1}return r=a?r+t.slice(a):t,s?r:Wt(r,o,jt,Qt(e,!1))}function _n(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return yt(n,e);const t=e.indent||(Xt(n)?"  ":""),s="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?s:Wt(s,t,Ls,Qt(e,!1))}function nt(n,e){const{singleQuote:t}=e.options;let s;if(t===!1)s=yt;else{const i=n.includes('"'),o=n.includes("'");i&&!o?s=_n:o&&!i?s=yt:s=t?_n:yt}return s(n,e)}let bn;try{bn=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{bn=/\n+(?!\n|$)/g}function Kt({comment:n,type:e,value:t},s,i,o){const{blockQuote:r,commentString:a,lineWidth:l}=s.options;if(!r||/\n[\t ]+$/.test(t))return nt(t,s);const c=s.indent||(s.forceBlockIndent||Xt(t)?"  ":""),u=r==="literal"?!0:r==="folded"||e===D.BLOCK_FOLDED?!1:e===D.BLOCK_LITERAL?!0:!Zi(t,l,c.length);if(!t)return u?`|
`:`>
`;let f,h;for(h=t.length;h>0;--h){const E=t[h-1];if(E!==`
`&&E!=="	"&&E!==" ")break}let d=t.substring(h);const y=d.indexOf(`
`);y===-1?f="-":t===d||y!==d.length-1?(f="+",o&&o()):f="",d&&(t=t.slice(0,-d.length),d[d.length-1]===`
`&&(d=d.slice(0,-1)),d=d.replace(bn,`$&${c}`));let m=!1,g,_=-1;for(g=0;g<t.length;++g){const E=t[g];if(E===" ")m=!0;else if(E===`
`)_=g;else break}let v=t.substring(0,_<g?_+1:g);v&&(t=t.substring(v.length),v=v.replace(/\n+/g,`$&${c}`));let S=(m?c?"2":"1":"")+f;if(n&&(S+=" "+a(n.replace(/ ?[\r\n]+/g," ")),i&&i()),!u){const E=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let T=!1;const b=Qt(s,!0);r!=="folded"&&e!==D.BLOCK_FOLDED&&(b.onOverflow=()=>{T=!0});const w=Wt(`${v}${E}${d}`,c,yn,b);if(!T)return`>${S}
${c}${w}`}return t=t.replace(/\n+/g,`$&${c}`),`|${S}
${c}${v}${t}${d}`}function eo(n,e,t,s){const{type:i,value:o}=n,{actualString:r,implicitKey:a,indent:l,indentStep:c,inFlow:u}=e;if(a&&o.includes(`
`)||u&&/[[\]{},]/.test(o))return nt(o,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(o))return a||u||!o.includes(`
`)?nt(o,e):Kt(n,e,t,s);if(!a&&!u&&i!==D.PLAIN&&o.includes(`
`))return Kt(n,e,t,s);if(Xt(o)){if(l==="")return e.forceBlockIndent=!0,Kt(n,e,t,s);if(a&&l===c)return nt(o,e)}const f=o.replace(/\n+/g,`$&
${l}`);if(r){const h=m=>{var g;return m.default&&m.tag!=="tag:yaml.org,2002:str"&&((g=m.test)==null?void 0:g.test(f))},{compat:d,tags:y}=e.doc.schema;if(y.some(h)||d!=null&&d.some(h))return nt(o,e)}return a?f:Wt(f,l,Ls,Qt(e,!1))}function En(n,e,t,s){const{implicitKey:i,inFlow:o}=e,r=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:a}=n;a!==D.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(r.value)&&(a=D.QUOTE_DOUBLE);const l=u=>{switch(u){case D.BLOCK_FOLDED:case D.BLOCK_LITERAL:return i||o?nt(r.value,e):Kt(r,e,t,s);case D.QUOTE_DOUBLE:return yt(r.value,e);case D.QUOTE_SINGLE:return _n(r.value,e);case D.PLAIN:return eo(r,e,t,s);default:return null}};let c=l(a);if(c===null){const{defaultKeyType:u,defaultStringType:f}=e.options,h=i&&u||f;if(c=l(h),c===null)throw new Error(`Unsupported default string type ${h}`)}return c}function Cs(n,e){const t=Object.assign({blockQuote:!0,commentString:Xi,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let s;switch(t.collectionStyle){case"block":s=!1;break;case"flow":s=!0;break;default:s=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:s,options:t}}function to(n,e){var i;if(e.tag){const o=n.filter(r=>r.tag===e.tag);if(o.length>0)return o.find(r=>r.format===e.format)??o[0]}let t,s;if(V(e)){s=e.value;let o=n.filter(r=>{var a;return(a=r.identify)==null?void 0:a.call(r,s)});if(o.length>1){const r=o.filter(a=>a.test);r.length>0&&(o=r)}t=o.find(r=>r.format===e.format)??o.find(r=>!r.format)}else s=e,t=n.find(o=>o.nodeClass&&s instanceof o.nodeClass);if(!t){const o=((i=s==null?void 0:s.constructor)==null?void 0:i.name)??(s===null?"null":typeof s);throw new Error(`Tag not resolved for ${o} value`)}return t}function no(n,e,{anchors:t,doc:s}){if(!s.directives)return"";const i=[],o=(V(n)||W(n))&&n.anchor;o&&Es(o)&&(t.add(o),i.push(`&${o}`));const r=n.tag??(e.default?null:e.tag);return r&&i.push(s.directives.tagString(r)),i.join(" ")}function rt(n,e,t,s){var l;if(Z(n))return n.toString(e,t,s);if(He(n)){if(e.doc.directives)return n.toString(e);if((l=e.resolvedAliases)!=null&&l.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let i;const o=Q(n)?n:e.doc.createNode(n,{onTagObj:c=>i=c});i??(i=to(e.doc.schema.tags,o));const r=no(o,i,e);r.length>0&&(e.indentAtStart=(e.indentAtStart??0)+r.length+1);const a=typeof i.stringify=="function"?i.stringify(o,e,t,s):V(o)?En(o,e,t,s):o.toString(e,t,s);return r?V(o)||a[0]==="{"||a[0]==="["?`${r} ${a}`:`${r}
${e.indent}${a}`:a}function so({key:n,value:e},t,s,i){const{allNullValues:o,doc:r,indent:a,indentStep:l,options:{commentString:c,indentSeq:u,simpleKeys:f}}=t;let h=Q(n)&&n.comment||null;if(f){if(h)throw new Error("With simple keys, key nodes cannot have comments");if(W(n)||!Q(n)&&typeof n=="object"){const b="With simple keys, collection cannot be used as a key value";throw new Error(b)}}let d=!f&&(!n||h&&e==null&&!t.inFlow||W(n)||(V(n)?n.type===D.BLOCK_FOLDED||n.type===D.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!d&&(f||!o),indent:a+l});let y=!1,m=!1,g=rt(n,t,()=>y=!0,()=>m=!0);if(!d&&!t.inFlow&&g.length>1024){if(f)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");d=!0}if(t.inFlow){if(o||e==null)return y&&s&&s(),g===""?"?":d?`? ${g}`:g}else if(o&&!f||e==null&&d)return g=`? ${g}`,h&&!y?g+=Ve(g,t.indent,c(h)):m&&i&&i(),g;y&&(h=null),d?(h&&(g+=Ve(g,t.indent,c(h))),g=`? ${g}
${a}:`):(g=`${g}:`,h&&(g+=Ve(g,t.indent,c(h))));let _,v,N;Q(e)?(_=!!e.spaceBefore,v=e.commentBefore,N=e.comment):(_=!1,v=null,N=null,e&&typeof e=="object"&&(e=r.createNode(e))),t.implicitKey=!1,!d&&!h&&V(e)&&(t.indentAtStart=g.length+1),m=!1,!u&&l.length>=2&&!t.inFlow&&!d&&Nt(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let S=!1;const E=rt(e,t,()=>S=!0,()=>m=!0);let T=" ";if(h||_||v){if(T=_?`
`:"",v){const b=c(v);T+=`
${Le(b,t.indent)}`}E===""&&!t.inFlow?T===`
`&&N&&(T=`

`):T+=`
${t.indent}`}else if(!d&&W(e)){const b=E[0],w=E.indexOf(`
`),A=w!==-1,B=t.inFlow??e.flow??e.items.length===0;if(A||!B){let q=!1;if(A&&(b==="&"||b==="!")){let x=E.indexOf(" ");b==="&"&&x!==-1&&x<w&&E[x+1]==="!"&&(x=E.indexOf(" ",x+1)),(x===-1||w<x)&&(q=!0)}q||(T=`
${t.indent}`)}}else(E===""||E[0]===`
`)&&(T="");return g+=T+E,t.inFlow?S&&s&&s():N&&!S?g+=Ve(g,t.indent,c(N)):m&&i&&i(),g}function Ds(n,e){(n==="debug"||n==="warn")&&console.warn(e)}const Ot="<<",Ce={identify:n=>n===Ot||typeof n=="symbol"&&n.description===Ot,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new D(Symbol(Ot)),{addToJSMap:Ms}),stringify:()=>Ot},io=(n,e)=>(Ce.identify(e)||V(e)&&(!e.type||e.type===D.PLAIN)&&Ce.identify(e.value))&&(n==null?void 0:n.doc.schema.tags.some(t=>t.tag===Ce.tag&&t.default));function Ms(n,e,t){if(t=n&&He(t)?t.resolve(n.doc):t,Nt(t))for(const s of t.items)an(n,e,s);else if(Array.isArray(t))for(const s of t)an(n,e,s);else an(n,e,t)}function an(n,e,t){const s=n&&He(t)?t.resolve(n.doc):t;if(!St(s))throw new Error("Merge sources must be maps or map aliases");const i=s.toJSON(null,n,Map);for(const[o,r]of i)e instanceof Map?e.has(o)||e.set(o,r):e instanceof Set?e.add(o):Object.prototype.hasOwnProperty.call(e,o)||Object.defineProperty(e,o,{value:r,writable:!0,enumerable:!0,configurable:!0});return e}function Ps(n,e,{key:t,value:s}){if(Q(t)&&t.addToJSMap)t.addToJSMap(n,e,s);else if(io(n,t))Ms(n,e,s);else{const i=ve(t,"",n);if(e instanceof Map)e.set(i,ve(s,i,n));else if(e instanceof Set)e.add(i);else{const o=oo(t,i,n),r=ve(s,o,n);o in e?Object.defineProperty(e,o,{value:r,writable:!0,enumerable:!0,configurable:!0}):e[o]=r}}return e}function oo(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(Q(n)&&(t!=null&&t.doc)){const s=Cs(t.doc,{});s.anchors=new Set;for(const o of t.anchors.keys())s.anchors.add(o.anchor);s.inFlow=!0,s.inStringifyKey=!0;const i=n.toString(s);if(!t.mapKeyWarned){let o=JSON.stringify(i);o.length>40&&(o=o.substring(0,36)+'..."'),Ds(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${o}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return i}return JSON.stringify(e)}function Tn(n,e,t){const s=bt(n,void 0,t),i=bt(e,void 0,t);return new ue(s,i)}class ue{constructor(e,t=null){Object.defineProperty(this,ke,{value:Ns}),this.key=e,this.value=t}clone(e){let{key:t,value:s}=this;return Q(t)&&(t=t.clone(e)),Q(s)&&(s=s.clone(e)),new ue(t,s)}toJSON(e,t){const s=t!=null&&t.mapAsMap?new Map:{};return Ps(t,s,this)}toString(e,t,s){return e!=null&&e.doc?so(this,e,t,s):JSON.stringify(this)}}function Bs(n,e,t){return(e.inFlow??n.flow?ao:ro)(n,e,t)}function ro({comment:n,items:e},t,{blockItemPrefix:s,flowChars:i,itemIndent:o,onChompKeep:r,onComment:a}){const{indent:l,options:{commentString:c}}=t,u=Object.assign({},t,{indent:o,type:null});let f=!1;const h=[];for(let y=0;y<e.length;++y){const m=e[y];let g=null;if(Q(m))!f&&m.spaceBefore&&h.push(""),Vt(t,h,m.commentBefore,f),m.comment&&(g=m.comment);else if(Z(m)){const v=Q(m.key)?m.key:null;v&&(!f&&v.spaceBefore&&h.push(""),Vt(t,h,v.commentBefore,f))}f=!1;let _=rt(m,u,()=>g=null,()=>f=!0);g&&(_+=Ve(_,o,c(g))),f&&g&&(f=!1),h.push(s+_)}let d;if(h.length===0)d=i.start+i.end;else{d=h[0];for(let y=1;y<h.length;++y){const m=h[y];d+=m?`
${l}${m}`:`
`}}return n?(d+=`
`+Le(c(n),l),a&&a()):f&&r&&r(),d}function ao({items:n},e,{flowChars:t,itemIndent:s}){const{indent:i,indentStep:o,flowCollectionPadding:r,options:{commentString:a}}=e;s+=o;const l=Object.assign({},e,{indent:s,inFlow:!0,type:null});let c=!1,u=0;const f=[];for(let y=0;y<n.length;++y){const m=n[y];let g=null;if(Q(m))m.spaceBefore&&f.push(""),Vt(e,f,m.commentBefore,!1),m.comment&&(g=m.comment);else if(Z(m)){const v=Q(m.key)?m.key:null;v&&(v.spaceBefore&&f.push(""),Vt(e,f,v.commentBefore,!1),v.comment&&(c=!0));const N=Q(m.value)?m.value:null;N?(N.comment&&(g=N.comment),N.commentBefore&&(c=!0)):m.value==null&&(v!=null&&v.comment)&&(g=v.comment)}g&&(c=!0);let _=rt(m,l,()=>g=null);y<n.length-1&&(_+=","),g&&(_+=Ve(_,s,a(g))),!c&&(f.length>u||_.includes(`
`))&&(c=!0),f.push(_),u=f.length}const{start:h,end:d}=t;if(f.length===0)return h+d;if(!c){const y=f.reduce((m,g)=>m+g.length+2,2);c=e.options.lineWidth>0&&y>e.options.lineWidth}if(c){let y=h;for(const m of f)y+=m?`
${o}${i}${m}`:`
`;return`${y}
${i}${d}`}else return`${h}${r}${f.join(" ")}${r}${d}`}function Vt({indent:n,options:{commentString:e}},t,s,i){if(s&&i&&(s=s.replace(/^\n+/,"")),s){const o=Le(e(s),n);t.push(o.trimStart())}}function xe(n,e){const t=V(e)?e.value:e;for(const s of n)if(Z(s)&&(s.key===e||s.key===t||V(s.key)&&s.key.value===t))return s}class be extends $s{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Fe,e),this.items=[]}static from(e,t,s){const{keepUndefined:i,replacer:o}=s,r=new this(e),a=(l,c)=>{if(typeof o=="function")c=o.call(t,l,c);else if(Array.isArray(o)&&!o.includes(l))return;(c!==void 0||i)&&r.items.push(Tn(l,c,s))};if(t instanceof Map)for(const[l,c]of t)a(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))a(l,t[l]);return typeof e.sortMapEntries=="function"&&r.items.sort(e.sortMapEntries),r}add(e,t){var r;let s;Z(e)?s=e:!e||typeof e!="object"||!("key"in e)?s=new ue(e,e==null?void 0:e.value):s=new ue(e.key,e.value);const i=xe(this.items,s.key),o=(r=this.schema)==null?void 0:r.sortMapEntries;if(i){if(!t)throw new Error(`Key ${s.key} already set`);V(i.value)&&As(s.value)?i.value.value=s.value:i.value=s.value}else if(o){const a=this.items.findIndex(l=>o(s,l)<0);a===-1?this.items.push(s):this.items.splice(a,0,s)}else this.items.push(s)}delete(e){const t=xe(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const s=xe(this.items,e),i=s==null?void 0:s.value;return(!t&&V(i)?i.value:i)??void 0}has(e){return!!xe(this.items,e)}set(e,t){this.add(new ue(e,t),!0)}toJSON(e,t,s){const i=s?new s:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(i);for(const o of this.items)Ps(t,i,o);return i}toString(e,t,s){if(!e)return JSON.stringify(this);for(const i of this.items)if(!Z(i))throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Bs(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:s,onComment:t})}}const ft={collection:"map",default:!0,nodeClass:be,tag:"tag:yaml.org,2002:map",resolve(n,e){return St(n)||e("Expected a mapping for this tag"),n},createNode:(n,e,t)=>be.from(n,e,t)};class Ge extends $s{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(lt,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=At(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const s=At(e);if(typeof s!="number")return;const i=this.items[s];return!t&&V(i)?i.value:i}has(e){const t=At(e);return typeof t=="number"&&t<this.items.length}set(e,t){const s=At(e);if(typeof s!="number")throw new Error(`Expected a valid index, not ${e}.`);const i=this.items[s];V(i)&&As(t)?i.value=t:this.items[s]=t}toJSON(e,t){const s=[];t!=null&&t.onCreate&&t.onCreate(s);let i=0;for(const o of this.items)s.push(ve(o,String(i++),t));return s}toString(e,t,s){return e?Bs(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:s,onComment:t}):JSON.stringify(this)}static from(e,t,s){const{replacer:i}=s,o=new this(e);if(t&&Symbol.iterator in Object(t)){let r=0;for(let a of t){if(typeof i=="function"){const l=t instanceof Set?a:String(r++);a=i.call(t,l,a)}o.items.push(bt(a,void 0,s))}}return o}}function At(n){let e=V(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const ut={collection:"seq",default:!0,nodeClass:Ge,tag:"tag:yaml.org,2002:seq",resolve(n,e){return Nt(n)||e("Expected a sequence for this tag"),n},createNode:(n,e,t)=>Ge.from(n,e,t)},Zt={identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify(n,e,t,s){return e=Object.assign({actualString:!0},e),En(n,e,t,s)}},en={identify:n=>n==null,createNode:()=>new D(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new D(null),stringify:({source:n},e)=>typeof n=="string"&&en.test.test(n)?n:e.options.nullStr},On={identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:n=>new D(n[0]==="t"||n[0]==="T"),stringify({source:n,value:e},t){if(n&&On.test.test(n)){const s=n[0]==="t"||n[0]==="T";if(e===s)return n}return e?t.options.trueStr:t.options.falseStr}};function Ee({format:n,minFractionDigits:e,tag:t,value:s}){if(typeof s=="bigint")return String(s);const i=typeof s=="number"?s:Number(s);if(!isFinite(i))return isNaN(i)?".nan":i<0?"-.inf":".inf";let o=Object.is(s,-0)?"-0":JSON.stringify(s);if(!n&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^\d/.test(o)){let r=o.indexOf(".");r<0&&(r=o.length,o+=".");let a=e-(o.length-r-1);for(;a-- >0;)o+="0"}return o}const Fs={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Ee},js={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():Ee(n)}},Ks={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(n){const e=new D(parseFloat(n)),t=n.indexOf(".");return t!==-1&&n[n.length-1]==="0"&&(e.minFractionDigits=n.length-t-1),e},stringify:Ee},tn=n=>typeof n=="bigint"||Number.isInteger(n),An=(n,e,t,{intAsBigInt:s})=>s?BigInt(n):parseInt(n.substring(e),t);function qs(n,e,t){const{value:s}=n;return tn(s)&&s>=0?t+s.toString(e):Ee(n)}const Rs={identify:n=>tn(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(n,e,t)=>An(n,2,8,t),stringify:n=>qs(n,8,"0o")},Us={identify:tn,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(n,e,t)=>An(n,0,10,t),stringify:Ee},Vs={identify:n=>tn(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(n,e,t)=>An(n,2,16,t),stringify:n=>qs(n,16,"0x")},lo=[ft,ut,Zt,en,On,Rs,Us,Vs,Fs,js,Ks];function Yn(n){return typeof n=="bigint"||Number.isInteger(n)}const $t=({value:n})=>JSON.stringify(n),co=[{identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify:$t},{identify:n=>n==null,createNode:()=>new D(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:$t},{identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:n=>n==="true",stringify:$t},{identify:Yn,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(n,e,{intAsBigInt:t})=>t?BigInt(n):parseInt(n,10),stringify:({value:n})=>Yn(n)?n.toString():JSON.stringify(n)},{identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:n=>parseFloat(n),stringify:$t}],fo={default:!0,tag:"",test:/^/,resolve(n,e){return e(`Unresolved plain scalar ${JSON.stringify(n)}`),n}},uo=[ft,ut].concat(co,fo),$n={identify:n=>n instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(n,e){if(typeof atob=="function"){const t=atob(n.replace(/[\n\r]/g,"")),s=new Uint8Array(t.length);for(let i=0;i<t.length;++i)s[i]=t.charCodeAt(i);return s}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),n},stringify({comment:n,type:e,value:t},s,i,o){if(!t)return"";const r=t;let a;if(typeof btoa=="function"){let l="";for(let c=0;c<r.length;++c)l+=String.fromCharCode(r[c]);a=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=D.BLOCK_LITERAL),e!==D.QUOTE_DOUBLE){const l=Math.max(s.options.lineWidth-s.indent.length,s.options.minContentWidth),c=Math.ceil(a.length/l),u=new Array(c);for(let f=0,h=0;f<c;++f,h+=l)u[f]=a.substr(h,l);a=u.join(e===D.BLOCK_LITERAL?`
`:" ")}return En({comment:n,type:e,value:a},s,i,o)}};function xs(n,e){if(Nt(n))for(let t=0;t<n.items.length;++t){let s=n.items[t];if(!Z(s)){if(St(s)){s.items.length>1&&e("Each pair must have its own sequence indicator");const i=s.items[0]||new ue(new D(null));if(s.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${s.commentBefore}
${i.key.commentBefore}`:s.commentBefore),s.comment){const o=i.value??i.key;o.comment=o.comment?`${s.comment}
${o.comment}`:s.comment}s=i}n.items[t]=Z(s)?s:new ue(s)}}else e("Expected a sequence for this tag");return n}function Ys(n,e,t){const{replacer:s}=t,i=new Ge(n);i.tag="tag:yaml.org,2002:pairs";let o=0;if(e&&Symbol.iterator in Object(e))for(let r of e){typeof s=="function"&&(r=s.call(e,String(o++),r));let a,l;if(Array.isArray(r))if(r.length===2)a=r[0],l=r[1];else throw new TypeError(`Expected [key, value] tuple: ${r}`);else if(r&&r instanceof Object){const c=Object.keys(r);if(c.length===1)a=c[0],l=r[a];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else a=r;i.items.push(Tn(a,l,t))}return i}const Ln={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:xs,createNode:Ys};class it extends Ge{constructor(){super(),this.add=be.prototype.add.bind(this),this.delete=be.prototype.delete.bind(this),this.get=be.prototype.get.bind(this),this.has=be.prototype.has.bind(this),this.set=be.prototype.set.bind(this),this.tag=it.tag}toJSON(e,t){if(!t)return super.toJSON(e);const s=new Map;t!=null&&t.onCreate&&t.onCreate(s);for(const i of this.items){let o,r;if(Z(i)?(o=ve(i.key,"",t),r=ve(i.value,o,t)):o=ve(i,"",t),s.has(o))throw new Error("Ordered maps must not include duplicate keys");s.set(o,r)}return s}static from(e,t,s){const i=Ys(e,t,s),o=new this;return o.items=i.items,o}}it.tag="tag:yaml.org,2002:omap";const Cn={collection:"seq",identify:n=>n instanceof Map,nodeClass:it,default:!1,tag:"tag:yaml.org,2002:omap",resolve(n,e){const t=xs(n,e),s=[];for(const{key:i}of t.items)V(i)&&(s.includes(i.value)?e(`Ordered maps must not include duplicate keys: ${i.value}`):s.push(i.value));return Object.assign(new it,t)},createNode:(n,e,t)=>it.from(n,e,t)};function Gs({value:n,source:e},t){return e&&(n?Hs:Js).test.test(e)?e:n?t.options.trueStr:t.options.falseStr}const Hs={identify:n=>n===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new D(!0),stringify:Gs},Js={identify:n=>n===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new D(!1),stringify:Gs},ho={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Ee},mo={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n.replace(/_/g,"")),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():Ee(n)}},go={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(n){const e=new D(parseFloat(n.replace(/_/g,""))),t=n.indexOf(".");if(t!==-1){const s=n.substring(t+1).replace(/_/g,"");s[s.length-1]==="0"&&(e.minFractionDigits=s.length)}return e},stringify:Ee},It=n=>typeof n=="bigint"||Number.isInteger(n);function nn(n,e,t,{intAsBigInt:s}){const i=n[0];if((i==="-"||i==="+")&&(e+=1),n=n.substring(e).replace(/_/g,""),s){switch(t){case 2:n=`0b${n}`;break;case 8:n=`0o${n}`;break;case 16:n=`0x${n}`;break}const r=BigInt(n);return i==="-"?BigInt(-1)*r:r}const o=parseInt(n,t);return i==="-"?-1*o:o}function Dn(n,e,t){const{value:s}=n;if(It(s)){const i=s.toString(e);return s<0?"-"+t+i.substr(1):t+i}return Ee(n)}const po={identify:It,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(n,e,t)=>nn(n,2,2,t),stringify:n=>Dn(n,2,"0b")},yo={identify:It,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(n,e,t)=>nn(n,1,8,t),stringify:n=>Dn(n,8,"0")},_o={identify:It,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(n,e,t)=>nn(n,0,10,t),stringify:Ee},bo={identify:It,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(n,e,t)=>nn(n,2,16,t),stringify:n=>Dn(n,16,"0x")};class ot extends be{constructor(e){super(e),this.tag=ot.tag}add(e){let t;Z(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new ue(e.key,null):t=new ue(e,null),xe(this.items,t.key)||this.items.push(t)}get(e,t){const s=xe(this.items,e);return!t&&Z(s)?V(s.key)?s.key.value:s.key:s}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const s=xe(this.items,e);s&&!t?this.items.splice(this.items.indexOf(s),1):!s&&t&&this.items.push(new ue(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,s){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,s);throw new Error("Set items must all have null values")}static from(e,t,s){const{replacer:i}=s,o=new this(e);if(t&&Symbol.iterator in Object(t))for(let r of t)typeof i=="function"&&(r=i.call(t,r,r)),o.items.push(Tn(r,null,s));return o}}ot.tag="tag:yaml.org,2002:set";const Mn={collection:"map",identify:n=>n instanceof Set,nodeClass:ot,default:!1,tag:"tag:yaml.org,2002:set",createNode:(n,e,t)=>ot.from(n,e,t),resolve(n,e){if(St(n)){if(n.hasAllNullValues(!0))return Object.assign(new ot,n);e("Set items must all have null values")}else e("Expected a mapping for this tag");return n}};function Pn(n,e){const t=n[0],s=t==="-"||t==="+"?n.substring(1):n,i=r=>e?BigInt(r):Number(r),o=s.replace(/_/g,"").split(":").reduce((r,a)=>r*i(60)+i(a),i(0));return t==="-"?i(-1)*o:o}function zs(n){let{value:e}=n,t=r=>r;if(typeof e=="bigint")t=r=>BigInt(r);else if(isNaN(e)||!isFinite(e))return Ee(n);let s="";e<0&&(s="-",e*=t(-1));const i=t(60),o=[e%i];return e<60?o.unshift(0):(e=(e-o[0])/i,o.unshift(e%i),e>=60&&(e=(e-o[0])/i,o.unshift(e))),s+o.map(r=>String(r).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Ws={identify:n=>typeof n=="bigint"||Number.isInteger(n),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(n,e,{intAsBigInt:t})=>Pn(n,t),stringify:zs},Qs={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:n=>Pn(n,!1),stringify:zs},sn={identify:n=>n instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(n){const e=n.match(sn.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,s,i,o,r,a]=e.map(Number),l=e[7]?Number((e[7]+"00").substr(1,3)):0;let c=Date.UTC(t,s-1,i,o||0,r||0,a||0,l);const u=e[8];if(u&&u!=="Z"){let f=Pn(u,!1);Math.abs(f)<30&&(f*=60),c-=6e4*f}return new Date(c)},stringify:({value:n})=>(n==null?void 0:n.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},Gn=[ft,ut,Zt,en,Hs,Js,po,yo,_o,bo,ho,mo,go,$n,Ce,Cn,Ln,Mn,Ws,Qs,sn],Hn=new Map([["core",lo],["failsafe",[ft,ut,Zt]],["json",uo],["yaml11",Gn],["yaml-1.1",Gn]]),Jn={binary:$n,bool:On,float:Ks,floatExp:js,floatNaN:Fs,floatTime:Qs,int:Us,intHex:Vs,intOct:Rs,intTime:Ws,map:ft,merge:Ce,null:en,omap:Cn,pairs:Ln,seq:ut,set:Mn,timestamp:sn},wo={"tag:yaml.org,2002:binary":$n,"tag:yaml.org,2002:merge":Ce,"tag:yaml.org,2002:omap":Cn,"tag:yaml.org,2002:pairs":Ln,"tag:yaml.org,2002:set":Mn,"tag:yaml.org,2002:timestamp":sn};function ln(n,e,t){const s=Hn.get(e);if(s&&!n)return t&&!s.includes(Ce)?s.concat(Ce):s.slice();let i=s;if(!i)if(Array.isArray(n))i=[];else{const o=Array.from(Hn.keys()).filter(r=>r!=="yaml11").map(r=>JSON.stringify(r)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${o} or define customTags array`)}if(Array.isArray(n))for(const o of n)i=i.concat(o);else typeof n=="function"&&(i=n(i.slice()));return t&&(i=i.concat(Ce)),i.reduce((o,r)=>{const a=typeof r=="string"?Jn[r]:r;if(!a){const l=JSON.stringify(r),c=Object.keys(Jn).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return o.includes(a)||o.push(a),o},[])}const vo=(n,e)=>n.key<e.key?-1:n.key>e.key?1:0;class Bn{constructor({compat:e,customTags:t,merge:s,resolveKnownTags:i,schema:o,sortMapEntries:r,toStringDefaults:a}){this.compat=Array.isArray(e)?ln(e,"compat"):e?ln(null,e):null,this.name=typeof o=="string"&&o||"core",this.knownTags=i?wo:{},this.tags=ln(t,this.name,s),this.toStringOptions=a??null,Object.defineProperty(this,Fe,{value:ft}),Object.defineProperty(this,Ae,{value:Zt}),Object.defineProperty(this,lt,{value:ut}),this.sortMapEntries=typeof r=="function"?r:r===!0?vo:null}clone(){const e=Object.create(Bn.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function ko(n,e){var l;const t=[];let s=e.directives===!0;if(e.directives!==!1&&n.directives){const c=n.directives.toString(n);c?(t.push(c),s=!0):n.directives.docStart&&(s=!0)}s&&t.push("---");const i=Cs(n,e),{commentString:o}=i.options;if(n.commentBefore){t.length!==1&&t.unshift("");const c=o(n.commentBefore);t.unshift(Le(c,""))}let r=!1,a=null;if(n.contents){if(Q(n.contents)){if(n.contents.spaceBefore&&s&&t.push(""),n.contents.commentBefore){const f=o(n.contents.commentBefore);t.push(Le(f,""))}i.forceBlockIndent=!!n.comment,a=n.contents.comment}const c=a?void 0:()=>r=!0;let u=rt(n.contents,i,()=>a=null,c);a&&(u+=Ve(u,"",o(a))),(u[0]==="|"||u[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${u}`:t.push(u)}else t.push(rt(n.contents,i));if((l=n.directives)!=null&&l.docEnd)if(n.comment){const c=o(n.comment);c.includes(`
`)?(t.push("..."),t.push(Le(c,""))):t.push(`... ${c}`)}else t.push("...");else{let c=n.comment;c&&r&&(c=c.replace(/^\n+/,"")),c&&((!r||a)&&t[t.length-1]!==""&&t.push(""),t.push(Le(o(c),"")))}return t.join(`
`)+`
`}class on{constructor(e,t,s){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,ke,{value:pn});let i=null;typeof t=="function"||Array.isArray(t)?i=t:s===void 0&&t&&(s=t,t=void 0);const o=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},s);this.options=o;let{version:r}=o;s!=null&&s._directives?(this.directives=s._directives.atDocument(),this.directives.yaml.explicit&&(r=this.directives.yaml.version)):this.directives=new fe({version:r}),this.setSchema(r,s),this.contents=e===void 0?null:this.createNode(e,i,s)}clone(){const e=Object.create(on.prototype,{[ke]:{value:pn}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=Q(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){We(this.contents)&&this.contents.add(e)}addIn(e,t){We(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const s=Ts(this);e.anchor=!t||s.has(t)?Os(t||"a",s):t}return new In(e.anchor)}createNode(e,t,s){let i;if(typeof t=="function")e=t.call({"":e},"",e),i=t;else if(Array.isArray(t)){const g=v=>typeof v=="number"||v instanceof String||v instanceof Number,_=t.filter(g).map(String);_.length>0&&(t=t.concat(_)),i=t}else s===void 0&&t&&(s=t,t=void 0);const{aliasDuplicateObjects:o,anchorPrefix:r,flow:a,keepUndefined:l,onTagObj:c,tag:u}=s??{},{onAnchor:f,setAnchors:h,sourceObjects:d}=zi(this,r||"a"),y={aliasDuplicateObjects:o??!0,keepUndefined:l??!1,onAnchor:f,onTagObj:c,replacer:i,schema:this.schema,sourceObjects:d},m=bt(e,u,y);return a&&W(m)&&(m.flow=!0),h(),m}createPair(e,t,s={}){const i=this.createNode(e,null,s),o=this.createNode(t,null,s);return new ue(i,o)}delete(e){return We(this.contents)?this.contents.delete(e):!1}deleteIn(e){return dt(e)?this.contents==null?!1:(this.contents=null,!0):We(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return W(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return dt(e)?!t&&V(this.contents)?this.contents.value:this.contents:W(this.contents)?this.contents.getIn(e,t):void 0}has(e){return W(this.contents)?this.contents.has(e):!1}hasIn(e){return dt(e)?this.contents!==void 0:W(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Ut(this.schema,[e],t):We(this.contents)&&this.contents.set(e,t)}setIn(e,t){dt(e)?this.contents=t:this.contents==null?this.contents=Ut(this.schema,Array.from(e),t):We(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let s;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new fe({version:"1.1"}),s={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new fe({version:e}),s={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,s=null;break;default:{const i=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(s)this.schema=new Bn(Object.assign(s,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:s,maxAliasCount:i,onAnchor:o,reviver:r}={}){const a={anchors:new Map,doc:this,keep:!e,mapAsMap:s===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},l=ve(this.contents,t??"",a);if(typeof o=="function")for(const{count:c,res:u}of a.anchors.values())o(u,c);return typeof r=="function"?tt(r,{"":l},"",l):l}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return ko(this,e)}}function We(n){if(W(n))return!0;throw new Error("Expected a YAML collection as document contents")}class Xs extends Error{constructor(e,t,s,i){super(),this.name=e,this.code=s,this.message=i,this.pos=t}}class mt extends Xs{constructor(e,t,s){super("YAMLParseError",e,t,s)}}class So extends Xs{constructor(e,t,s){super("YAMLWarning",e,t,s)}}const zn=(n,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(a=>e.linePos(a));const{line:s,col:i}=t.linePos[0];t.message+=` at line ${s}, column ${i}`;let o=i-1,r=n.substring(e.lineStarts[s-1],e.lineStarts[s]).replace(/[\n\r]+$/,"");if(o>=60&&r.length>80){const a=Math.min(o-39,r.length-79);r="…"+r.substring(a),o-=a-1}if(r.length>80&&(r=r.substring(0,79)+"…"),s>1&&/^ *$/.test(r.substring(0,o))){let a=n.substring(e.lineStarts[s-2],e.lineStarts[s-1]);a.length>80&&(a=a.substring(0,79)+`…
`),r=a+r}if(/[^ ]/.test(r)){let a=1;const l=t.linePos[1];(l==null?void 0:l.line)===s&&l.col>i&&(a=Math.max(1,Math.min(l.col-i,80-o)));const c=" ".repeat(o)+"^".repeat(a);t.message+=`:

${r}
${c}
`}};function at(n,{flow:e,indicator:t,next:s,offset:i,onError:o,parentIndent:r,startOnNewline:a}){let l=!1,c=a,u=a,f="",h="",d=!1,y=!1,m=null,g=null,_=null,v=null,N=null,S=null,E=null;for(const w of n)switch(y&&(w.type!=="space"&&w.type!=="newline"&&w.type!=="comma"&&o(w.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),y=!1),m&&(c&&w.type!=="comment"&&w.type!=="newline"&&o(m,"TAB_AS_INDENT","Tabs are not allowed as indentation"),m=null),w.type){case"space":!e&&(t!=="doc-start"||(s==null?void 0:s.type)!=="flow-collection")&&w.source.includes("	")&&(m=w),u=!0;break;case"comment":{u||o(w,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const A=w.source.substring(1)||" ";f?f+=h+A:f=A,h="",c=!1;break}case"newline":c?f?f+=w.source:(!S||t!=="seq-item-ind")&&(l=!0):h+=w.source,c=!0,d=!0,(g||_)&&(v=w),u=!0;break;case"anchor":g&&o(w,"MULTIPLE_ANCHORS","A node can have at most one anchor"),w.source.endsWith(":")&&o(w.offset+w.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),g=w,E??(E=w.offset),c=!1,u=!1,y=!0;break;case"tag":{_&&o(w,"MULTIPLE_TAGS","A node can have at most one tag"),_=w,E??(E=w.offset),c=!1,u=!1,y=!0;break}case t:(g||_)&&o(w,"BAD_PROP_ORDER",`Anchors and tags must be after the ${w.source} indicator`),S&&o(w,"UNEXPECTED_TOKEN",`Unexpected ${w.source} in ${e??"collection"}`),S=w,c=t==="seq-item-ind"||t==="explicit-key-ind",u=!1;break;case"comma":if(e){N&&o(w,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),N=w,c=!1,u=!1;break}default:o(w,"UNEXPECTED_TOKEN",`Unexpected ${w.type} token`),c=!1,u=!1}const T=n[n.length-1],b=T?T.offset+T.source.length:i;return y&&s&&s.type!=="space"&&s.type!=="newline"&&s.type!=="comma"&&(s.type!=="scalar"||s.source!=="")&&o(s.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),m&&(c&&m.indent<=r||(s==null?void 0:s.type)==="block-map"||(s==null?void 0:s.type)==="block-seq")&&o(m,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:N,found:S,spaceBefore:l,comment:f,hasNewline:d,anchor:g,tag:_,newlineAfterProp:v,end:b,start:E??b}}function wt(n){if(!n)return null;switch(n.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(n.source.includes(`
`))return!0;if(n.end){for(const e of n.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of n.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(wt(e.key)||wt(e.value))return!0}return!1;default:return!0}}function wn(n,e,t){if((e==null?void 0:e.type)==="flow-collection"){const s=e.end[0];s.indent===n&&(s.source==="]"||s.source==="}")&&wt(e)&&t(s,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Zs(n,e,t){const{uniqueKeys:s}=n.options;if(s===!1)return!1;const i=typeof s=="function"?s:(o,r)=>o===r||V(o)&&V(r)&&o.value===r.value;return e.some(o=>i(o.key,t))}const Wn="All mapping items must start at the same column";function No({composeNode:n,composeEmptyNode:e},t,s,i,o){var u;const r=(o==null?void 0:o.nodeClass)??be,a=new r(t.schema);t.atRoot&&(t.atRoot=!1);let l=s.offset,c=null;for(const f of s.items){const{start:h,key:d,sep:y,value:m}=f,g=at(h,{indicator:"explicit-key-ind",next:d??(y==null?void 0:y[0]),offset:l,onError:i,parentIndent:s.indent,startOnNewline:!0}),_=!g.found;if(_){if(d&&(d.type==="block-seq"?i(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in d&&d.indent!==s.indent&&i(l,"BAD_INDENT",Wn)),!g.anchor&&!g.tag&&!y){c=g.end,g.comment&&(a.comment?a.comment+=`
`+g.comment:a.comment=g.comment);continue}(g.newlineAfterProp||wt(d))&&i(d??h[h.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=g.found)==null?void 0:u.indent)!==s.indent&&i(l,"BAD_INDENT",Wn);t.atKey=!0;const v=g.end,N=d?n(t,d,g,i):e(t,v,h,null,g,i);t.schema.compat&&wn(s.indent,d,i),t.atKey=!1,Zs(t,a.items,N)&&i(v,"DUPLICATE_KEY","Map keys must be unique");const S=at(y??[],{indicator:"map-value-ind",next:m,offset:N.range[2],onError:i,parentIndent:s.indent,startOnNewline:!d||d.type==="block-scalar"});if(l=S.end,S.found){_&&((m==null?void 0:m.type)==="block-map"&&!S.hasNewline&&i(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&g.start<S.found.offset-1024&&i(N.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const E=m?n(t,m,S,i):e(t,l,y,null,S,i);t.schema.compat&&wn(s.indent,m,i),l=E.range[2];const T=new ue(N,E);t.options.keepSourceTokens&&(T.srcToken=f),a.items.push(T)}else{_&&i(N.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),S.comment&&(N.comment?N.comment+=`
`+S.comment:N.comment=S.comment);const E=new ue(N);t.options.keepSourceTokens&&(E.srcToken=f),a.items.push(E)}}return c&&c<l&&i(c,"IMPOSSIBLE","Map comment with trailing content"),a.range=[s.offset,l,c??l],a}function Io({composeNode:n,composeEmptyNode:e},t,s,i,o){const r=(o==null?void 0:o.nodeClass)??Ge,a=new r(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let l=s.offset,c=null;for(const{start:u,value:f}of s.items){const h=at(u,{indicator:"seq-item-ind",next:f,offset:l,onError:i,parentIndent:s.indent,startOnNewline:!0});if(!h.found)if(h.anchor||h.tag||f)(f==null?void 0:f.type)==="block-seq"?i(h.end,"BAD_INDENT","All sequence items must start at the same column"):i(l,"MISSING_CHAR","Sequence item without - indicator");else{c=h.end,h.comment&&(a.comment=h.comment);continue}const d=f?n(t,f,h,i):e(t,h.end,u,null,h,i);t.schema.compat&&wn(s.indent,f,i),l=d.range[2],a.items.push(d)}return a.range=[s.offset,l,c??l],a}function Et(n,e,t,s){let i="";if(n){let o=!1,r="";for(const a of n){const{source:l,type:c}=a;switch(c){case"space":o=!0;break;case"comment":{t&&!o&&s(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=l.substring(1)||" ";i?i+=r+u:i=u,r="";break}case"newline":i&&(r+=l),o=!0;break;default:s(a,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}e+=l.length}}return{comment:i,offset:e}}const cn="Block collections are not allowed within flow collections",fn=n=>n&&(n.type==="block-map"||n.type==="block-seq");function Eo({composeNode:n,composeEmptyNode:e},t,s,i,o){var g;const r=s.start.source==="{",a=r?"flow map":"flow sequence",l=(o==null?void 0:o.nodeClass)??(r?be:Ge),c=new l(t.schema);c.flow=!0;const u=t.atRoot;u&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let f=s.offset+s.start.source.length;for(let _=0;_<s.items.length;++_){const v=s.items[_],{start:N,key:S,sep:E,value:T}=v,b=at(N,{flow:a,indicator:"explicit-key-ind",next:S??(E==null?void 0:E[0]),offset:f,onError:i,parentIndent:s.indent,startOnNewline:!1});if(!b.found){if(!b.anchor&&!b.tag&&!E&&!T){_===0&&b.comma?i(b.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):_<s.items.length-1&&i(b.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),b.comment&&(c.comment?c.comment+=`
`+b.comment:c.comment=b.comment),f=b.end;continue}!r&&t.options.strict&&wt(S)&&i(S,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(_===0)b.comma&&i(b.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(b.comma||i(b.start,"MISSING_CHAR",`Missing , between ${a} items`),b.comment){let w="";e:for(const A of N)switch(A.type){case"comma":case"space":break;case"comment":w=A.source.substring(1);break e;default:break e}if(w){let A=c.items[c.items.length-1];Z(A)&&(A=A.value??A.key),A.comment?A.comment+=`
`+w:A.comment=w,b.comment=b.comment.substring(w.length+1)}}if(!r&&!E&&!b.found){const w=T?n(t,T,b,i):e(t,b.end,E,null,b,i);c.items.push(w),f=w.range[2],fn(T)&&i(w.range,"BLOCK_IN_FLOW",cn)}else{t.atKey=!0;const w=b.end,A=S?n(t,S,b,i):e(t,w,N,null,b,i);fn(S)&&i(A.range,"BLOCK_IN_FLOW",cn),t.atKey=!1;const B=at(E??[],{flow:a,indicator:"map-value-ind",next:T,offset:A.range[2],onError:i,parentIndent:s.indent,startOnNewline:!1});if(B.found){if(!r&&!b.found&&t.options.strict){if(E)for(const U of E){if(U===B.found)break;if(U.type==="newline"){i(U,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}b.start<B.found.offset-1024&&i(B.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else T&&("source"in T&&((g=T.source)==null?void 0:g[0])===":"?i(T,"MISSING_CHAR",`Missing space after : in ${a}`):i(B.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const q=T?n(t,T,B,i):B.found?e(t,B.end,E,null,B,i):null;q?fn(T)&&i(q.range,"BLOCK_IN_FLOW",cn):B.comment&&(A.comment?A.comment+=`
`+B.comment:A.comment=B.comment);const x=new ue(A,q);if(t.options.keepSourceTokens&&(x.srcToken=v),r){const U=c;Zs(t,U.items,A)&&i(w,"DUPLICATE_KEY","Map keys must be unique"),U.items.push(x)}else{const U=new be(t.schema);U.flow=!0,U.items.push(x);const ee=(q??A).range;U.range=[A.range[0],ee[1],ee[2]],c.items.push(U)}f=q?q.range[2]:B.end}}const h=r?"}":"]",[d,...y]=s.end;let m=f;if((d==null?void 0:d.source)===h)m=d.offset+d.source.length;else{const _=a[0].toUpperCase()+a.substring(1),v=u?`${_} must end with a ${h}`:`${_} in block collection must be sufficiently indented and end with a ${h}`;i(f,u?"MISSING_CHAR":"BAD_INDENT",v),d&&d.source.length!==1&&y.unshift(d)}if(y.length>0){const _=Et(y,m,t.options.strict,i);_.comment&&(c.comment?c.comment+=`
`+_.comment:c.comment=_.comment),c.range=[s.offset,m,_.offset]}else c.range=[s.offset,m,m];return c}function un(n,e,t,s,i,o){const r=t.type==="block-map"?No(n,e,t,s,o):t.type==="block-seq"?Io(n,e,t,s,o):Eo(n,e,t,s,o),a=r.constructor;return i==="!"||i===a.tagName?(r.tag=a.tagName,r):(i&&(r.tag=i),r)}function To(n,e,t,s,i){var h;const o=s.tag,r=o?e.directives.tagName(o.source,d=>i(o,"TAG_RESOLVE_FAILED",d)):null;if(t.type==="block-seq"){const{anchor:d,newlineAfterProp:y}=s,m=d&&o?d.offset>o.offset?d:o:d??o;m&&(!y||y.offset<m.offset)&&i(m,"MISSING_CHAR","Missing newline after block sequence props")}const a=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!o||!r||r==="!"||r===be.tagName&&a==="map"||r===Ge.tagName&&a==="seq")return un(n,e,t,i,r);let l=e.schema.tags.find(d=>d.tag===r&&d.collection===a);if(!l){const d=e.schema.knownTags[r];if((d==null?void 0:d.collection)===a)e.schema.tags.push(Object.assign({},d,{default:!1})),l=d;else return d?i(o,"BAD_COLLECTION_TYPE",`${d.tag} used for ${a} collection, but expects ${d.collection??"scalar"}`,!0):i(o,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,!0),un(n,e,t,i,r)}const c=un(n,e,t,i,r,l),u=((h=l.resolve)==null?void 0:h.call(l,c,d=>i(o,"TAG_RESOLVE_FAILED",d),e.options))??c,f=Q(u)?u:new D(u);return f.range=c.range,f.tag=r,l!=null&&l.format&&(f.format=l.format),f}function Oo(n,e,t){const s=e.offset,i=Ao(e,n.options.strict,t);if(!i)return{value:"",type:null,comment:"",range:[s,s,s]};const o=i.mode===">"?D.BLOCK_FOLDED:D.BLOCK_LITERAL,r=e.source?$o(e.source):[];let a=r.length;for(let m=r.length-1;m>=0;--m){const g=r[m][1];if(g===""||g==="\r")a=m;else break}if(a===0){const m=i.chomp==="+"&&r.length>0?`
`.repeat(Math.max(1,r.length-1)):"";let g=s+i.length;return e.source&&(g+=e.source.length),{value:m,type:o,comment:i.comment,range:[s,g,g]}}let l=e.indent+i.indent,c=e.offset+i.length,u=0;for(let m=0;m<a;++m){const[g,_]=r[m];if(_===""||_==="\r")i.indent===0&&g.length>l&&(l=g.length);else{g.length<l&&t(c+g.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),i.indent===0&&(l=g.length),u=m,l===0&&!n.atRoot&&t(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=g.length+_.length+1}for(let m=r.length-1;m>=a;--m)r[m][0].length>l&&(a=m+1);let f="",h="",d=!1;for(let m=0;m<u;++m)f+=r[m][0].slice(l)+`
`;for(let m=u;m<a;++m){let[g,_]=r[m];c+=g.length+_.length+1;const v=_[_.length-1]==="\r";if(v&&(_=_.slice(0,-1)),_&&g.length<l){const S=`Block scalar lines must not be less indented than their ${i.indent?"explicit indentation indicator":"first line"}`;t(c-_.length-(v?2:1),"BAD_INDENT",S),g=""}o===D.BLOCK_LITERAL?(f+=h+g.slice(l)+_,h=`
`):g.length>l||_[0]==="	"?(h===" "?h=`
`:!d&&h===`
`&&(h=`

`),f+=h+g.slice(l)+_,h=`
`,d=!0):_===""?h===`
`?f+=`
`:h=`
`:(f+=h+_,h=" ",d=!1)}switch(i.chomp){case"-":break;case"+":for(let m=a;m<r.length;++m)f+=`
`+r[m][0].slice(l);f[f.length-1]!==`
`&&(f+=`
`);break;default:f+=`
`}const y=s+i.length+e.source.length;return{value:f,type:o,comment:i.comment,range:[s,y,y]}}function Ao({offset:n,props:e},t,s){if(e[0].type!=="block-scalar-header")return s(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:i}=e[0],o=i[0];let r=0,a="",l=-1;for(let h=1;h<i.length;++h){const d=i[h];if(!a&&(d==="-"||d==="+"))a=d;else{const y=Number(d);!r&&y?r=y:l===-1&&(l=n+h)}}l!==-1&&s(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${i}`);let c=!1,u="",f=i.length;for(let h=1;h<e.length;++h){const d=e[h];switch(d.type){case"space":c=!0;case"newline":f+=d.source.length;break;case"comment":t&&!c&&s(d,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),f+=d.source.length,u=d.source.substring(1);break;case"error":s(d,"UNEXPECTED_TOKEN",d.message),f+=d.source.length;break;default:{const y=`Unexpected token in block scalar header: ${d.type}`;s(d,"UNEXPECTED_TOKEN",y);const m=d.source;m&&typeof m=="string"&&(f+=m.length)}}}return{mode:o,indent:r,chomp:a,comment:u,length:f}}function $o(n){const e=n.split(/\n( *)/),t=e[0],s=t.match(/^( *)/),o=[s!=null&&s[1]?[s[1],t.slice(s[1].length)]:["",t]];for(let r=1;r<e.length;r+=2)o.push([e[r],e[r+1]]);return o}function Lo(n,e,t){const{offset:s,type:i,source:o,end:r}=n;let a,l;const c=(h,d,y)=>t(s+h,d,y);switch(i){case"scalar":a=D.PLAIN,l=Co(o,c);break;case"single-quoted-scalar":a=D.QUOTE_SINGLE,l=Do(o,c);break;case"double-quoted-scalar":a=D.QUOTE_DOUBLE,l=Mo(o,c);break;default:return t(n,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${i}`),{value:"",type:null,comment:"",range:[s,s+o.length,s+o.length]}}const u=s+o.length,f=Et(r,u,e,t);return{value:l,type:a,comment:f.comment,range:[s,u,f.offset]}}function Co(n,e){let t="";switch(n[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${n[0]}`;break}case"@":case"`":{t=`reserved character ${n[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),ei(n)}function Do(n,e){return(n[n.length-1]!=="'"||n.length===1)&&e(n.length,"MISSING_CHAR","Missing closing 'quote"),ei(n.slice(1,-1)).replace(/''/g,"'")}function ei(n){let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let s=e.exec(n);if(!s)return n;let i=s[1],o=" ",r=e.lastIndex;for(t.lastIndex=r;s=t.exec(n);)s[1]===""?o===`
`?i+=o:o=`
`:(i+=o+s[1],o=" "),r=t.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=r,s=a.exec(n),i+o+((s==null?void 0:s[1])??"")}function Mo(n,e){let t="";for(let s=1;s<n.length-1;++s){const i=n[s];if(!(i==="\r"&&n[s+1]===`
`))if(i===`
`){const{fold:o,offset:r}=Po(n,s);t+=o,s=r}else if(i==="\\"){let o=n[++s];const r=Bo[o];if(r)t+=r;else if(o===`
`)for(o=n[s+1];o===" "||o==="	";)o=n[++s+1];else if(o==="\r"&&n[s+1]===`
`)for(o=n[++s+1];o===" "||o==="	";)o=n[++s+1];else if(o==="x"||o==="u"||o==="U"){const a={x:2,u:4,U:8}[o];t+=Fo(n,s+1,a,e),s+=a}else{const a=n.substr(s-1,2);e(s-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),t+=a}}else if(i===" "||i==="	"){const o=s;let r=n[s+1];for(;r===" "||r==="	";)r=n[++s+1];r!==`
`&&!(r==="\r"&&n[s+2]===`
`)&&(t+=s>o?n.slice(o,s+1):i)}else t+=i}return(n[n.length-1]!=='"'||n.length===1)&&e(n.length,"MISSING_CHAR",'Missing closing "quote'),t}function Po(n,e){let t="",s=n[e+1];for(;(s===" "||s==="	"||s===`
`||s==="\r")&&!(s==="\r"&&n[e+2]!==`
`);)s===`
`&&(t+=`
`),e+=1,s=n[e+1];return t||(t=" "),{fold:t,offset:e}}const Bo={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Fo(n,e,t,s){const i=n.substr(e,t),r=i.length===t&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;if(isNaN(r)){const a=n.substr(e-2,t+2);return s(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),a}return String.fromCodePoint(r)}function ti(n,e,t,s){const{value:i,type:o,comment:r,range:a}=e.type==="block-scalar"?Oo(n,e,s):Lo(e,n.options.strict,s),l=t?n.directives.tagName(t.source,f=>s(t,"TAG_RESOLVE_FAILED",f)):null;let c;n.options.stringKeys&&n.atKey?c=n.schema[Ae]:l?c=jo(n.schema,i,l,t,s):e.type==="scalar"?c=Ko(n,i,e,s):c=n.schema[Ae];let u;try{const f=c.resolve(i,h=>s(t??e,"TAG_RESOLVE_FAILED",h),n.options);u=V(f)?f:new D(f)}catch(f){const h=f instanceof Error?f.message:String(f);s(t??e,"TAG_RESOLVE_FAILED",h),u=new D(i)}return u.range=a,u.source=i,o&&(u.type=o),l&&(u.tag=l),c.format&&(u.format=c.format),r&&(u.comment=r),u}function jo(n,e,t,s,i){var a;if(t==="!")return n[Ae];const o=[];for(const l of n.tags)if(!l.collection&&l.tag===t)if(l.default&&l.test)o.push(l);else return l;for(const l of o)if((a=l.test)!=null&&a.test(e))return l;const r=n.knownTags[t];return r&&!r.collection?(n.tags.push(Object.assign({},r,{default:!1,test:void 0})),r):(i(s,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),n[Ae])}function Ko({atKey:n,directives:e,schema:t},s,i,o){const r=t.tags.find(a=>{var l;return(a.default===!0||n&&a.default==="key")&&((l=a.test)==null?void 0:l.test(s))})||t[Ae];if(t.compat){const a=t.compat.find(l=>{var c;return l.default&&((c=l.test)==null?void 0:c.test(s))})??t[Ae];if(r.tag!==a.tag){const l=e.tagString(r.tag),c=e.tagString(a.tag),u=`Value may be parsed as either ${l} or ${c}`;o(i,"TAG_RESOLVE_FAILED",u,!0)}}return r}function qo(n,e,t){if(e){t??(t=e.length);for(let s=t-1;s>=0;--s){let i=e[s];switch(i.type){case"space":case"comment":case"newline":n-=i.source.length;continue}for(i=e[++s];(i==null?void 0:i.type)==="space";)n+=i.source.length,i=e[++s];break}}return n}const Ro={composeNode:ni,composeEmptyNode:Fn};function ni(n,e,t,s){const i=n.atKey,{spaceBefore:o,comment:r,anchor:a,tag:l}=t;let c,u=!0;switch(e.type){case"alias":c=Uo(n,e,s),(a||l)&&s(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=ti(n,e,l,s),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=To(Ro,n,e,t,s),a&&(c.anchor=a.source.substring(1));break;default:{const f=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;s(e,"UNEXPECTED_TOKEN",f),c=Fn(n,e.offset,void 0,null,t,s),u=!1}}return a&&c.anchor===""&&s(a,"BAD_ALIAS","Anchor cannot be an empty string"),i&&n.options.stringKeys&&(!V(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&s(l??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),o&&(c.spaceBefore=!0),r&&(e.type==="scalar"&&e.source===""?c.comment=r:c.commentBefore=r),n.options.keepSourceTokens&&u&&(c.srcToken=e),c}function Fn(n,e,t,s,{spaceBefore:i,comment:o,anchor:r,tag:a,end:l},c){const u={type:"scalar",offset:qo(e,t,s),indent:-1,source:""},f=ti(n,u,a,c);return r&&(f.anchor=r.source.substring(1),f.anchor===""&&c(r,"BAD_ALIAS","Anchor cannot be an empty string")),i&&(f.spaceBefore=!0),o&&(f.comment=o,f.range[2]=l),f}function Uo({options:n},{offset:e,source:t,end:s},i){const o=new In(t.substring(1));o.source===""&&i(e,"BAD_ALIAS","Alias cannot be an empty string"),o.source.endsWith(":")&&i(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const r=e+t.length,a=Et(s,r,n.strict,i);return o.range=[e,r,a.offset],a.comment&&(o.comment=a.comment),o}function Vo(n,e,{offset:t,start:s,value:i,end:o},r){const a=Object.assign({_directives:e},n),l=new on(void 0,a),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},u=at(s,{indicator:"doc-start",next:i??(o==null?void 0:o[0]),offset:t,onError:r,parentIndent:0,startOnNewline:!0});u.found&&(l.directives.docStart=!0,i&&(i.type==="block-map"||i.type==="block-seq")&&!u.hasNewline&&r(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=i?ni(c,i,u,r):Fn(c,u.end,s,null,u,r);const f=l.contents.range[2],h=Et(o,f,!1,r);return h.comment&&(l.comment=h.comment),l.range=[t,f,h.offset],l}function ht(n){if(typeof n=="number")return[n,n+1];if(Array.isArray(n))return n.length===2?n:[n[0],n[1]];const{offset:e,source:t}=n;return[e,e+(typeof t=="string"?t.length:1)]}function Qn(n){var i;let e="",t=!1,s=!1;for(let o=0;o<n.length;++o){const r=n[o];switch(r[0]){case"#":e+=(e===""?"":s?`

`:`
`)+(r.substring(1)||" "),t=!0,s=!1;break;case"%":((i=n[o+1])==null?void 0:i[0])!=="#"&&(o+=1),t=!1;break;default:t||(s=!0),t=!1}}return{comment:e,afterEmptyLine:s}}class xo{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,s,i,o)=>{const r=ht(t);o?this.warnings.push(new So(r,s,i)):this.errors.push(new mt(r,s,i))},this.directives=new fe({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:s,afterEmptyLine:i}=Qn(this.prelude);if(s){const o=e.contents;if(t)e.comment=e.comment?`${e.comment}
${s}`:s;else if(i||e.directives.docStart||!o)e.commentBefore=s;else if(W(o)&&!o.flow&&o.items.length>0){let r=o.items[0];Z(r)&&(r=r.key);const a=r.commentBefore;r.commentBefore=a?`${s}
${a}`:s}else{const r=o.commentBefore;o.commentBefore=r?`${s}
${r}`:s}}t?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Qn(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,s=-1){for(const i of e)yield*this.next(i);yield*this.end(t,s)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,s,i)=>{const o=ht(e);o[0]+=t,this.onError(o,"BAD_DIRECTIVE",s,i)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=Vo(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,s=new mt(ht(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(s):this.doc.errors.push(s);break}case"doc-end":{if(!this.doc){const s="Unexpected doc-end without preceding document";this.errors.push(new mt(ht(e),"UNEXPECTED_TOKEN",s));break}this.doc.directives.docEnd=!0;const t=Et(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const s=this.doc.comment;this.doc.comment=s?`${s}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new mt(ht(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const s=Object.assign({_directives:this.directives},this.options),i=new on(void 0,s);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,t,t],this.decorate(i,!1),yield i}}}const si="\uFEFF",ii="",oi="",vn="";function Yo(n){switch(n){case si:return"byte-order-mark";case ii:return"doc-mode";case oi:return"flow-error-end";case vn:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(n[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function Ne(n){switch(n){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Xn=new Set("0123456789ABCDEFabcdef"),Go=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Lt=new Set(",[]{}"),Ho=new Set(` ,[]{}
\r	`),hn=n=>!n||Ho.has(n);class Jo{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let s=this.next??"stream";for(;s&&(t||this.hasChars(1));)s=yield*this.parseNext(s)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let s=0;for(;t===" ";)t=this.buffer[++s+e];if(t==="\r"){const i=this.buffer[s+e+1];if(i===`
`||!i&&!this.atEnd)return e+s+1}return t===`
`||s>=this.indentNext||!t&&!this.atEnd?e+s:-1}if(t==="-"||t==="."){const s=this.buffer.substr(e,3);if((s==="---"||s==="...")&&Ne(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===si&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,s=e.indexOf("#");for(;s!==-1;){const o=e[s-1];if(o===" "||o==="	"){t=s-1;break}else s=e.indexOf("#",s+1)}for(;;){const o=e[t-1];if(o===" "||o==="	")t-=1;else break}const i=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-i),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield ii,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&Ne(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Ne(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&Ne(t)){const s=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=s,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(hn),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,s=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=s=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const i=this.getLine();if(i===null)return this.setNext("flow");if((s!==-1&&s<this.indentNext&&i[0]!=="#"||s===0&&(i.startsWith("---")||i.startsWith("..."))&&Ne(i[3]))&&!(s===this.indentNext-1&&this.flowLevel===1&&(i[0]==="]"||i[0]==="}")))return this.flowLevel=0,yield oi,yield*this.parseLineStart();let o=0;for(;i[o]===",";)o+=yield*this.pushCount(1),o+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(o+=yield*this.pushIndicators(),i[o]){case void 0:return"flow";case"#":return yield*this.pushCount(i.length-o),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(hn),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const r=this.charAt(1);if(this.flowKey||Ne(r)||r===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let o=0;for(;this.buffer[t-1-o]==="\\";)o+=1;if(o%2===0)break;t=this.buffer.indexOf('"',t+1)}const s=this.buffer.substring(0,t);let i=s.indexOf(`
`,this.pos);if(i!==-1){for(;i!==-1;){const o=this.continueScalar(i+1);if(o===-1)break;i=s.indexOf(`
`,o)}i!==-1&&(t=i-(s[i-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>Ne(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,s;e:for(let o=this.pos;s=this.buffer[o];++o)switch(s){case" ":t+=1;break;case`
`:e=o,t=0;break;case"\r":{const r=this.buffer[o+1];if(!r&&!this.atEnd)return this.setNext("block-scalar");if(r===`
`)break}default:break e}if(!s&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const o=this.continueScalar(e+1);if(o===-1)break;e=this.buffer.indexOf(`
`,o)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let i=e+1;for(s=this.buffer[i];s===" ";)s=this.buffer[++i];if(s==="	"){for(;s==="	"||s===" "||s==="\r"||s===`
`;)s=this.buffer[++i];e=i-1}else if(!this.blockScalarKeep)do{let o=e-1,r=this.buffer[o];r==="\r"&&(r=this.buffer[--o]);const a=o;for(;r===" ";)r=this.buffer[--o];if(r===`
`&&o>=this.pos&&o+1+t>a)e=o;else break}while(!0);return yield vn,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,s=this.pos-1,i;for(;i=this.buffer[++s];)if(i===":"){const o=this.buffer[s+1];if(Ne(o)||e&&Lt.has(o))break;t=s}else if(Ne(i)){let o=this.buffer[s+1];if(i==="\r"&&(o===`
`?(s+=1,i=`
`,o=this.buffer[s+1]):t=s),o==="#"||e&&Lt.has(o))break;if(i===`
`){const r=this.continueScalar(s+1);if(r===-1)break;s=Math.max(s,r-2)}}else{if(e&&Lt.has(i))break;t=s}return!i&&!this.atEnd?this.setNext("plain-scalar"):(yield vn,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const s=this.buffer.slice(this.pos,e);return s?(yield s,this.pos+=s.length,s.length):(t&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(hn))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const e=this.flowLevel>0,t=this.charAt(1);if(Ne(t)||e&&Lt.has(t))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!Ne(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(Go.has(t))t=this.buffer[++e];else if(t==="%"&&Xn.has(this.buffer[e+1])&&Xn.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,s;do s=this.buffer[++t];while(s===" "||e&&s==="	");const i=t-this.pos;return i>0&&(yield this.buffer.substr(this.pos,i),this.pos=t),i}*pushUntil(e){let t=this.pos,s=this.buffer[t];for(;!e(s);)s=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class zo{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,s=this.lineStarts.length;for(;t<s;){const o=t+s>>1;this.lineStarts[o]<e?t=o+1:s=o}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const i=this.lineStarts[t-1];return{line:t,col:e-i+1}}}}function Be(n,e){for(let t=0;t<n.length;++t)if(n[t].type===e)return!0;return!1}function Zn(n){for(let e=0;e<n.length;++e)switch(n[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function ri(n){switch(n==null?void 0:n.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Ct(n){switch(n.type){case"document":return n.start;case"block-map":{const e=n.items[n.items.length-1];return e.sep??e.start}case"block-seq":return n.items[n.items.length-1].start;default:return[]}}function Qe(n){var t;if(n.length===0)return[];let e=n.length;e:for(;--e>=0;)switch(n[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=n[++e])==null?void 0:t.type)==="space";);return n.splice(e,n.length)}function es(n){if(n.start.type==="flow-seq-start")for(const e of n.items)e.sep&&!e.value&&!Be(e.start,"explicit-key-ind")&&!Be(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,ri(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}class Wo{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Jo,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const s of this.lexer.lex(e,t))yield*this.next(s);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=Yo(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const s=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:s,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(e==null?void 0:e.type)!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const s=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in s?s.indent:0:t.type==="flow-collection"&&s.type==="document"&&(t.indent=0),t.type==="flow-collection"&&es(t),s.type){case"document":s.value=t;break;case"block-scalar":s.props.push(t);break;case"block-map":{const i=s.items[s.items.length-1];if(i.value){s.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(i.sep)i.value=t;else{Object.assign(i,{key:t,sep:[]}),this.onKeyLine=!i.explicitKey;return}break}case"block-seq":{const i=s.items[s.items.length-1];i.value?s.items.push({start:[],value:t}):i.value=t;break}case"flow-collection":{const i=s.items[s.items.length-1];!i||i.value?s.items.push({start:[],key:t,sep:[]}):i.sep?i.value=t:Object.assign(i,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((s.type==="document"||s.type==="block-map"||s.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const i=t.items[t.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&Zn(i.start)===-1&&(t.indent===0||i.start.every(o=>o.type!=="comment"||o.indent<t.indent))&&(s.type==="document"?s.end=i.start:s.items.push({start:i.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{Zn(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=Ct(this.peek(2)),s=Qe(t);let i;e.end?(i=e.end,i.push(this.sourceToken),delete e.end):i=[this.sourceToken];const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:s,key:e,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var s;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const i="end"in t.value?t.value.end:void 0,o=Array.isArray(i)?i[i.length-1]:void 0;(o==null?void 0:o.type)==="comment"?i==null||i.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2],o=(s=i==null?void 0:i.value)==null?void 0:s.end;if(Array.isArray(o)){Array.prototype.push.apply(o,t.start),o.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const i=!this.onKeyLine&&this.indent===e.indent,o=i&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let r=[];if(o&&t.sep&&!t.value){const a=[];for(let l=0;l<t.sep.length;++l){const c=t.sep[l];switch(c.type){case"newline":a.push(l);break;case"space":break;case"comment":c.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(r=t.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":o||t.value?(r.push(this.sourceToken),e.items.push({start:r}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):o||t.value?(r.push(this.sourceToken),e.items.push({start:r,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Be(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]});else if(ri(t.key)&&!Be(t.sep,"newline")){const a=Qe(t.start),l=t.key,c=t.sep;c.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:l,sep:c}]})}else r.length>0?t.sep=t.sep.concat(r,this.sourceToken):t.sep.push(this.sourceToken);else if(Be(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const a=Qe(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||o?e.items.push({start:r,key:null,sep:[this.sourceToken]}):Be(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);o||t.value?(e.items.push({start:r,key:a,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(a):(Object.assign(t,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){if(a.type==="block-seq"){if(!t.explicitKey&&t.sep&&!Be(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else i&&e.items.push({start:r});this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var s;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const i="end"in t.value?t.value.end:void 0,o=Array.isArray(i)?i[i.length-1]:void 0;(o==null?void 0:o.type)==="comment"?i==null||i.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2],o=(s=i==null?void 0:i.value)==null?void 0:s.end;if(Array.isArray(o)){Array.prototype.push.apply(o,t.start),o.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||Be(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const i=this.startBlockValue(e);if(i){this.stack.push(i);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let s;do yield*this.pop(),s=this.peek(1);while((s==null?void 0:s.type)==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:i,sep:[]}):t.sep?this.stack.push(i):Object.assign(t,{key:i,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const s=this.startBlockValue(e);s?this.stack.push(s):(yield*this.pop(),yield*this.step())}else{const s=this.peek(2);if(s.type==="block-map"&&(this.type==="map-value-ind"&&s.indent===e.indent||this.type==="newline"&&!s.items[s.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&s.type!=="flow-collection"){const i=Ct(s),o=Qe(i);es(e);const r=e.end.splice(1,e.end.length);r.push(this.sourceToken);const a={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:o,key:e,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=Ct(e),s=Qe(t);return s.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=Ct(e),s=Qe(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(s=>s.type==="newline"||s.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function Qo(n){const e=n.prettyErrors!==!1;return{lineCounter:n.lineCounter||e&&new zo||null,prettyErrors:e}}function Xo(n,e={}){const{lineCounter:t,prettyErrors:s}=Qo(e),i=new Wo(t==null?void 0:t.addNewLine),o=new xo(e);let r=null;for(const a of o.compose(i.parse(n),!0,n.length))if(!r)r=a;else if(r.options.logLevel!=="silent"){r.errors.push(new mt(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return s&&t&&(r.errors.forEach(zn(n,t)),r.warnings.forEach(zn(n,t))),r}function Zo(n,e,t){let s;const i=Xo(n,t);if(!i)return null;if(i.warnings.forEach(o=>Ds(i.options.logLevel,o)),i.errors.length>0){if(i.options.logLevel!=="silent")throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:s},t))}function Pe(n,e){try{const t=Zo(n);if(t==null)throw new Error("YAML file is empty or invalid");return{value:t,source:e}}catch(t){const s=t instanceof Error?t.message:"Unknown YAML parse error";throw new Error(`YAML parse error in ${e}: ${s}`)}}function er(){const n=Object.assign({"/src/games/boiler_7/game.yaml":vi,"/src/games/boiler_7/items.yaml":ki,"/src/games/boiler_7/localization/en.yaml":Si,"/src/games/boiler_7/rules.yaml":Ni,"/src/games/boiler_7/scenes/arrival.yaml":Ii,"/src/games/boiler_7/scenes/boiler_floor.yaml":Ei,"/src/games/boiler_7/scenes/conclusion.yaml":Ti,"/src/games/boiler_7/scenes/control_room.yaml":Oi,"/src/games/boiler_7/scenes/lower_chamber.yaml":Ai,"/src/games/boiler_7/state.yaml":$i,"/src/games/midnight_switchboard/game.yaml":Li,"/src/games/midnight_switchboard/items.yaml":Ci,"/src/games/midnight_switchboard/localization/en.yaml":Di,"/src/games/midnight_switchboard/rules.yaml":Mi,"/src/games/midnight_switchboard/scenes/basement_chamber.yaml":Pi,"/src/games/midnight_switchboard/scenes/basement_stairs.yaml":Bi,"/src/games/midnight_switchboard/scenes/ending.yaml":Fi,"/src/games/midnight_switchboard/scenes/operator_line.yaml":ji,"/src/games/midnight_switchboard/scenes/prologue.yaml":Ki,"/src/games/midnight_switchboard/scenes/records_room.yaml":qi,"/src/games/midnight_switchboard/scenes/switchboard_room.yaml":Ri,"/src/games/midnight_switchboard/state.yaml":Ui}),e={};for(const[t,s]of Object.entries(n)){const i=t.split("/src/games/")[1].split("/"),o=i[0],r=i.slice(1).join("/");e[o]||(e[o]={id:o,title:o,raw:{game:"",rules:"",state:"",items:"",scenes:{},localization:{}}});const a=e[o];if(r==="game.yaml"){a.raw.game=s;try{const l=Pe(s,"game.yaml").value;a.title=l.game.title}catch{}}else if(r==="rules.yaml")a.raw.rules=s;else if(r==="state.yaml")a.raw.state=s;else if(r==="items.yaml")a.raw.items=s;else if(r.startsWith("scenes/")){const l=r.replace("scenes/","");a.raw.scenes[l]=s}else if(r.startsWith("localization/")){const l=r.replace("localization/","");a.raw.localization[l]=s}}return e}class k extends Error{constructor(t,s,i){super(s);ae(this,"code");ae(this,"file");ae(this,"path");this.code=t,this.file=i==null?void 0:i.file,this.path=i==null?void 0:i.path}toString(){let t=`[${this.code}] ${this.message}`;return this.file&&(t+=`
File: ${this.file}`),this.path&&(t+=`
Path: ${this.path}`),t}}function tr(n){sr(n),ir(n),or(n),rr(n),ar(n),fr(n)}function xt(n,e){const t=Object.keys(n);if(t.length!==1)throw new k("E_CONDITION_INVALID",`Condition must contain exactly one operator at ${e}`);const s=t[0],i=n[s];if(s==="all"||s==="any"){if(!Array.isArray(i)||i.length===0)throw new k("E_CONDITION_INVALID",`"${s}" must be a non-empty array at ${e}`);i.forEach((o,r)=>xt(o,`${e}.${s}[${r}]`));return}if(s==="not"){if(!i)throw new k("E_CONDITION_INVALID",`"not" condition missing value at ${e}`);xt(i,`${e}.not`);return}if(s==="eq"||s==="neq"||s==="gt"||s==="gte"||s==="lt"||s==="lte"){if(typeof i!="object"||i===null||typeof i.var!="string"||!("value"in i))throw new k("E_CONDITION_INVALID",`Invalid payload for operator "${s}" at ${e}`);return}if(typeof i!="object"||i===null)throw new k("E_CONDITION_INVALID",`Invalid payload for operator "${s}" at ${e}`)}function nr(n,e,t){n&&n.forEach((s,i)=>{const o=Object.keys(s);if(o.length!==1)throw new k("E_EFFECT_INVALID",`Effect must contain exactly one operator at ${e}[${i}]`);const r=o[0],a=s[r];if(r==="set"&&!a.var)throw new k("E_EFFECT_INVALID",`Set effect missing var at ${e}[${i}]`);if(r==="add"){if(!a.var)throw new k("E_EFFECT_INVALID",`Add effect missing var at ${e}[${i}]`);if(typeof a.value=="object"&&"random"in a.value&&!/^\d+\/\d+$/.test(a.value.random))throw new k("E_EFFECT_INVALID",`Invalid random format at ${e}[${i}]`)}if(r==="add_item"||r==="remove_item"){if(!a||typeof a.id!="string")throw new k("E_EFFECT_INVALID",`${r} requires { id: string } at ${e}[${i}]`);if(!t.items.items[a.id])throw new k("E_REF_NOT_FOUND",`Unknown item "${a.id}" at ${e}[${i}]`,{file:"items.yaml",path:`items.${a.id}`})}})}function sr(n){const e=n.manifest.game;if(!e.id||!e.title||!e.version)throw new k("E_SCHEMA_MISSING_FIELD","Missing required game metadata fields",{file:"game.yaml"})}function ir(n){if(!n.rules.rules.systems)throw new k("E_SCHEMA_MISSING_FIELD","rules.systems is required",{file:"rules.yaml"})}function or(n){const e=n.state.state.variables,t=n.rules.rules.systems;for(const[s,i]of Object.entries(e)){if(i.requires&&!t[i.requires])throw new k("E_SYSTEM_DISABLED_USAGE",`State variable "${s}" requires disabled system "${i.requires}"`,{file:"state.yaml",path:`state.variables.${s}`});if(typeof i.initial!==i.type)throw new k("E_STATE_TYPE_MISMATCH",`Initial value of "${s}" does not match declared type "${i.type}"`,{file:"state.yaml",path:`state.variables.${s}.initial`})}}function rr(n){const e=n.items.items;for(const[t,s]of Object.entries(e))if(!s.name)throw new k("E_SCHEMA_MISSING_FIELD",`Item "${t}" missing name`,{file:"items.yaml",path:`items.${t}.name`})}function ar(n){const e=new Set;for(const[t,s]of Object.entries(n.scenes)){const i=s.scene;if(e.has(i.id))throw new k("E_DUPLICATE_ID",`Duplicate scene id "${i.id}"`,{file:`scenes/${t}`,path:"scene.id"});e.add(i.id),lr(s,t,n)}}function lr(n,e,t){const s=new Set;for(const i of n.scene.nodes){if(s.has(i.id))throw new k("E_DUPLICATE_ID",`Duplicate node id "${i.id}" in scene "${n.scene.id}"`,{file:`scenes/${e}`,path:"scene.nodes[].id"});s.add(i.id),i.text.forEach((o,r)=>{typeof o!="string"&&"if"in o&&xt(o.if,`scene.${n.scene.id}.node.${i.id}.text[${r}].if`)}),cr(i,n.scene.id,e,t)}}function cr(n,e,t,s){for(const i of n.choices){if(!i.goto)throw new k("E_SCHEMA_MISSING_FIELD",`Choice "${i.id}" is missing goto`,{file:`scenes/${t}`,path:`node.${n.id}.choices.${i.id}`});i.if&&xt(i.if,`scene.${e}.node.${n.id}.choice.${i.id}.if`),nr(i.effects,`scene.${e}.node.${n.id}.choice.${i.id}.effects`,s)}}function fr(n){const{scene:e,node:t}=n.manifest.game.start,s=Object.values(n.scenes).find(o=>o.scene.id===e);if(!s)throw new k("E_REF_NOT_FOUND_SCENE",`Start scene "${e}" not found`,{file:"game.yaml",path:"game.start.scene"});if(!s.scene.nodes.find(o=>o.id===t))throw new k("E_REF_NOT_FOUND_NODE",`Start node "${t}" not found in scene "${e}"`,{file:"game.yaml",path:"game.start.node"})}function ur(n){return{manifest:n.manifest.game,rules:n.rules.rules,state:hr(n),items:dr(n),scenes:mr(n),localization:n.localization,language:"en"}}function hr(n){const e=n.rules.rules.state_visibility.default==="visible",t=new Map;for(const[s,i]of Object.entries(n.state.state.variables))t.set(s,{type:i.type,value:i.initial,visible:i.visible!==void 0?i.visible:e});return{variables:t}}function dr(n){const e=new Map;for(const[t,s]of Object.entries(n.items.items))e.set(t,s);return e}function mr(n){const e=new Map;for(const t of Object.values(n.scenes)){const s=t.scene.id;e.set(s,{id:s,nodes:gr(t)})}return e}function gr(n){const e=new Map;for(const t of n.scene.nodes)e.set(t.id,{id:t.id,text:t.text,choices:t.choices});return e}class pr{constructor(e){ae(this,"_at");ae(this,"_state");ae(this,"_history",[]);ae(this,"_rng");ae(this,"_inventory",new Set);const t=e.manifest.start;this._at={scene:t.scene,node:t.node},this._state=yr(e.state)}get at(){return this._at}get history(){return this._history}get rng(){return this._rng}get inventory(){return this._inventory}getVar(e){const t=this._state.variables.get(e);if(!t)throw new k("E_STATE_VAR_UNDECLARED",`Unknown state var "${e}"`,{path:`state.variables.${e}`});return t.value}setVar(e,t){const s=this._state.variables.get(e);if(!s)throw new k("E_STATE_VAR_UNDECLARED",`Unknown state var "${e}"`,{path:`state.variables.${e}`});s.value=t}getVisibleState(){const e={};for(const[t,s]of this._state.variables.entries())s.visible&&(e[t]=s.value);return e}move(e,t,s){this._at=e,this._history.push({from:s,to:e,choiceId:t,ts:Date.now()})}save(){const e={};for(const[t,s]of this._state.variables.entries())e[t]=s.value;return{version:"0.1",at:{...this._at},state:e,history:[...this._history],rng:this._rng?{...this._rng}:void 0,inventory:[...this._inventory]}}load(e){if(e.version!=="0.1")throw new k("E_SCHEMA_INVALID_TYPE",`Unsupported save version "${e.version}"`);this._at={...e.at},this._history=[...e.history];for(const[t,s]of Object.entries(e.state)){const i=this._state.variables.get(t);if(!i)throw new k("E_STATE_VAR_UNDECLARED",`Save contains unknown var "${t}"`);i.value=s}e.rng&&(this._rng={...e.rng}),e.inventory&&(this._inventory=new Set(e.inventory))}initializeRng(e){this._rng||(this._rng={seed:e,counter:0})}addItem(e){this._inventory.add(e)}removeItem(e){this._inventory.delete(e)}hasItem(e){return this._inventory.has(e)}}function yr(n){const e=new Map(n.variables);for(const[t,s]of e.entries())e.set(t,{...s});return{variables:e}}function Ye(n,e,t,s){return wr(n)?br(n,e,t,s):_r(n,e,t,s)}function _r(n,e,t,s){const i=Object.keys(n);if(i.length!==1)throw new k("E_CONDITION_INVALID","Operator condition must contain exactly one operator");const o=i[0],r=n[o],a=s.findConditionHandler(o);if(!a)throw new k("E_CONDITION_INVALID",`Unknown condition operator "${o}"`);try{return a(r,e,t)}catch(l){throw l instanceof k?l:new k("E_CONDITION_INVALID",`Condition operator "${o}" threw an error`)}}function br(n,e,t,s){if(n.all){if(!Array.isArray(n.all)||n.all.length===0)throw new k("E_CONDITION_INVALID",'"all" must be a non-empty array');return n.all.every(i=>Ye(i,e,t,s))}if(n.any){if(!Array.isArray(n.any)||n.any.length===0)throw new k("E_CONDITION_INVALID",'"any" must be a non-empty array');return n.any.some(i=>Ye(i,e,t,s))}if(n.not)return!Ye(n.not,e,t,s);throw new k("E_CONDITION_INVALID","Empty logical condition")}function wr(n){return typeof n=="object"&&("all"in n||"any"in n||"not"in n)}function vr(n,e,t,s){if(!(!n||n.length===0))for(const i of n){const o=Object.keys(i)[0],r=s.findEffectHandler(o);if(!r)throw new k("E_EFFECT_INVALID",`Unknown effect operator "${o}"`);r(i[o],e,t)}}function dn(n,e,t,s){const i=[];for(const o of n){if(typeof o=="string"){i.push(Dt(o,e,t,s));continue}if(Sr(o)){const r=ts(o.key,t);i.push(Dt(r,e,t,s));continue}if("if"in o){if(Ye(o.if,e,t,s)){const r=o.then;if(typeof r=="string")i.push(Dt(r,e,t,s));else{const a=ts(r.key,t);i.push(Dt(a,e,t,s))}}continue}throw new k("E_SCHEMA_INVALID_TYPE","Unknown text fragment structure")}return i}function ts(n,e){const t=e.language,s=e.localization[t];if(!s)throw new k("E_LOCALIZATION_KEY_MISSING",`Language "${t}" not loaded`);const i=n.split(".");let o=s;for(const r of i)if(o=o==null?void 0:o[r],o===void 0)throw new k("E_LOCALIZATION_KEY_MISSING",`Localization key "${n}" not found for language "${t}"`);if(typeof o!="string")throw new k("E_LOCALIZATION_KEY_MISSING",`Localization key "${n}" does not resolve to string`);return o}function Dt(n,e,t,s){const i=/\{\{if (.*?)\}\}([\s\S]*?)\{\{\/if\}\}/g;return n=n.replace(i,(o,r,a)=>{const l=kr(r);return Ye(l,e,t,s)?a:""}),n.replace(/\{\{(.*?)\}\}/g,(o,r)=>{const a=r.trim();if(a==="inventory_count")return String(e.inventory.size);if(a==="inventory_list")return e.inventory.size===0?"(none)":Array.from(e.inventory).map(c=>{const u=t.items.get(c);if(!u)throw new k("E_REF_NOT_FOUND",`Inventory contains unknown item "${c}"`);return u.name}).join(", ");if(a.startsWith("has_item:")){const l=a.slice(9).trim();if(!t.items.has(l))throw new k("E_REF_NOT_FOUND",`Interpolation references unknown item "${l}"`);return String(e.hasItem(l))}try{const l=e.getVar(a);return String(l)}catch{throw new k("E_STATE_VAR_UNDECLARED",`Interpolation variable "${a}" not declared`)}})}function kr(n){const e=n.trim().split(/\s+/);if(e.length===0)throw new k("E_CONDITION_INVALID","Empty inline condition");const t=e[0];if(t==="has_item"){if(e.length!==2)throw new k("E_CONDITION_INVALID","has_item requires one argument");return{has_item:{id:e[1]}}}if(e.length!==3)throw new k("E_CONDITION_INVALID",`Invalid inline condition format "${n}"`);const[s,i,o]=e;let r=o;return o==="true"?r=!0:o==="false"?r=!1:isNaN(Number(o))||(r=Number(o)),{[t]:{var:i,value:r}}}function Sr(n){return typeof n=="object"&&n!==null&&"key"in n}class Nr{constructor(){ae(this,"plugins",[]);ae(this,"finalized",!1)}register(e){if(this.finalized)throw new k("E_PLUGIN_REGISTRY_LOCKED","Cannot register plugins after registry is finalized");this.plugins.push(e)}finalize(){const e=new Set;for(const t of this.plugins){if(e.has(t.id))throw new k("E_PLUGIN_DUPLICATE_ID",`Duplicate plugin id "${t.id}"`);e.add(t.id)}for(const t of this.plugins)for(const s of t.dependsOn??[])if(!e.has(s))throw new k("E_PLUGIN_DEPENDENCY_MISSING",`Plugin "${t.id}" depends on missing plugin "${s}"`);this.plugins=Ir(this.plugins),this.finalized=!0}getAll(){return this.plugins}runHook(e,t,s){var i;for(const o of this.plugins){const r=(i=o.hooks)==null?void 0:i[e];r&&r(t,s)}}findConditionHandler(e){var t;for(const s of this.plugins){const i=(t=s.conditions)==null?void 0:t[e];if(i)return i}}findEffectHandler(e){var t;for(const s of this.plugins){const i=(t=s.effects)==null?void 0:t[e];if(i)return i}}}function Ir(n){var a,l;const e=new Map;for(const c of n)e.set(c.id,c);const t=new Map,s=new Map;for(const c of n)t.set(c.id,new Set),s.set(c.id,0);function i(c,u){t.get(c).has(u)||(t.get(c).add(u),s.set(u,(s.get(u)??0)+1))}for(const c of n)for(const u of c.dependsOn??[])i(u,c.id);for(const c of n){for(const u of((a=c.order)==null?void 0:a.after)??[]){if(!e.has(u))throw new k("E_PLUGIN_ORDER_UNKNOWN",`Plugin "${c.id}" orders after unknown plugin "${u}"`);i(u,c.id)}for(const u of((l=c.order)==null?void 0:l.before)??[]){if(!e.has(u))throw new k("E_PLUGIN_ORDER_UNKNOWN",`Plugin "${c.id}" orders before unknown plugin "${u}"`);i(c.id,u)}}const o=[];for(const c of n)(s.get(c.id)??0)===0&&o.push(c.id);const r=[];for(;o.length>0;){const c=o.shift();r.push(e.get(c));for(const u of t.get(c))s.set(u,(s.get(u)??0)-1),(s.get(u)??0)===0&&o.push(u)}if(r.length!==n.length)throw new k("E_PLUGIN_ORDER_CYCLE","Plugin ordering contains a cycle");return r}const Er={id:"core",conditions:{eq(n,e){const{var:t,value:s}=n;return e.getVar(t)===s},neq(n,e){const{var:t,value:s}=n;return e.getVar(t)!==s},gt(n,e){return Mt(n,e,(t,s)=>t>s)},gte(n,e){return Mt(n,e,(t,s)=>t>=s)},lt(n,e){return Mt(n,e,(t,s)=>t<s)},lte(n,e){return Mt(n,e,(t,s)=>t<=s)}},effects:{add(n,e,t){if(!n||typeof n.var!="string")throw new k("E_EFFECT_INVALID","add requires { var: string, value: number | RandomValue }");const s=e.getVar(n.var);if(typeof s!="number")throw new k("E_STATE_TYPE_MISMATCH",`Cannot add to non-number variable "${n.var}"`);let i;if(typeof n.value=="number")i=n.value;else if(typeof n.value=="object"&&n.value&&"random"in n.value){if(!t.rules.systems.randomness)throw new k("E_SYSTEM_DISABLED_USAGE","Randomness system disabled");i=Tr(n.value.random,e)}else throw new k("E_EFFECT_INVALID","Invalid add value");console.log("[Core.add] applying",{var:n.var,current:s,delta:i,next:s+i,payload:n}),e.setVar(n.var,s+i)},set(n,e){const{var:t,value:s}=n,i=e.getVar(t);if(typeof i!=typeof s)throw new k("E_STATE_TYPE_MISMATCH",`Cannot set "${t}" (${typeof i}) to ${typeof s}`);e.setVar(t,s)}}};function Mt(n,e,t){const{var:s,value:i}=n,o=e.getVar(s);if(typeof o!="number"||typeof i!="number")throw new k("E_CONDITION_INVALID","Numeric comparison requires numbers");return t(o,i)}function Tr(n,e){const t=e.rng;if(!t)throw console.error("[Core.add] RNG missing. Did randomness plugin initialize it?"),new k("E_EFFECT_INVALID","Randomness system enabled but RNG state missing");const s=n.split("/");if(s.length!==2)throw new k("E_EFFECT_INVALID",`Invalid random format "${n}"`);const i=Number(s[0]),o=Number(s[1]);if(!Number.isFinite(i)||!Number.isFinite(o)||o<=0)throw new k("E_EFFECT_INVALID",`Invalid random values "${n}"`);const r={seed:t.seed,counter:t.counter},a=t.seed,l=t.counter++,c=Math.abs(Math.sin(a+l)*1e4)%1,u=c<i/o?1:0;return console.log("[Core.add] resolveRandom",{randomString:n,before:r,after:{seed:t.seed,counter:t.counter},rand:c,threshold:i/o,out:u}),c<i/o?1:0}const Or={id:"randomness",order:{after:["core"]},dependsOn:["core"],hooks:{onStart(n){n.initializeRng(Date.now())}}},Ar={id:"inventory",dependsOn:["core"],order:{after:["core"]},conditions:{has_item(n,e,t){if(!n||typeof n.id!="string")throw new k("E_CONDITION_INVALID","has_item requires { id: string }");if(!t.items.has(n.id))throw new k("E_REF_NOT_FOUND",`Unknown item "${n.id}"`);return e.hasItem(n.id)}},effects:{add_item(n,e,t){if(!n||typeof n.id!="string")throw new k("E_EFFECT_INVALID","add_item requires { id: string }");if(!t.items.has(n.id))throw new k("E_REF_NOT_FOUND",`Unknown item "${n.id}"`);e.addItem(n.id)},remove_item(n,e,t){if(!n||typeof n.id!="string")throw new k("E_EFFECT_INVALID","remove_item requires { id: string }");if(!t.items.has(n.id))throw new k("E_REF_NOT_FOUND",`Unknown item "${n.id}"`);e.removeItem(n.id)}}};class $r{constructor(e){ae(this,"model");ae(this,"session");ae(this,"plugins",new Nr);this.model=e,this.session=new pr(e),this.assertNodeExists(this.session.at),this.plugins.register(Er),this.model.rules.systems.randomness&&this.plugins.register(Or),this.model.rules.systems.inventory&&this.plugins.register(Ar),this.plugins.finalize()}start(){return this.plugins.runHook("onStart",this.session,this.model),this.assertNodeExists(this.session.at),this.getViewModel()}getViewModel(){const e=this.session.at,t=this.getNode(e);return{gameTitle:this.model.manifest.title,sceneId:e.scene,nodeId:e.node,text:dn(t.text,this.session,this.model,this.plugins),choices:t.choices.filter(s=>!s.if||Ye(s.if,this.session,this.model,this.plugins)).map(s=>({id:s.id,text:this.resolveChoiceText(s.text),enabled:!0})),visibleState:this.session.getVisibleState(),inventory:Array.from(this.session.inventory).map(s=>{const i=this.model.items.get(s);if(!i)throw new k("E_REF_NOT_FOUND",`Inventory contains unknown item "${s}"`);const o=r=>{if(r)return dn([{key:r}],this.session,this.model,this.plugins)[0]};return{id:s,name:o(i.name)??i.name,description:o(i.description)??i.description}})}}resolveChoiceText(e){if(e.includes("."))try{return dn([{key:e}],this.session,this.model,this.plugins)[0]}catch{return e}return e}choose(e){const t=this.session.at,i=this.getNode(t).choices.find(r=>r.id===e);if(!i)throw new k("E_RUNTIME_ILLEGAL_CHOICE",`Choice "${e}" not found in node "${t.scene}.${t.node}"`);if(console.groupCollapsed(`[Engine] choose("${e}")`),console.log("From:",t),console.log("Choice:",i),console.log("State before:",this.session.getVisibleState()),this.plugins.runHook("beforeChoice",this.session,this.model),i.if&&!Ye(i.if,this.session,this.model,this.plugins))throw console.warn("Choice condition failed at runtime:",i.if),console.log("State at failure:",this.session.getVisibleState()),console.groupEnd(),new k("E_RUNTIME_ILLEGAL_CHOICE",`Choice "${e}" is not currently available`);const o={scene:i.goto.scene,node:i.goto.node};this.assertNodeExists(o);try{this.plugins.runHook("beforeTransition",this.session,this.model),console.log("Applying effects:",i.effects??[]),vr(i.effects,this.session,this.model,this.plugins),console.log("State after effects:",this.session.getVisibleState()),this.session.move(o,e,t),console.log("Moved to:",this.session.at),this.plugins.runHook("afterTransition",this.session,this.model),this.plugins.runHook("afterChoice",this.session,this.model);const r=this.getViewModel();return console.log("VM:",{sceneId:r.sceneId,nodeId:r.nodeId,choices:r.choices.map(a=>a.id)}),console.groupEnd(),r}catch(r){throw console.error("[Engine] choose crashed:",r),console.log("State at crash:",this.session.getVisibleState()),console.log("At crash nodeRef:",this.session.at),console.groupEnd(),r}}save(){return this.session.save()}load(e){return this.session.load(e),this.assertNodeExists(this.session.at),this.getViewModel()}getNode(e){const t=this.model.scenes.get(e.scene);if(!t)throw new k("E_REF_NOT_FOUND_SCENE",`Scene "${e.scene}" not found`);const s=t.nodes.get(e.node);if(!s)throw new k("E_REF_NOT_FOUND_NODE",`Node "${e.node}" not found in scene "${e.scene}"`);return s}assertNodeExists(e){this.getNode(e)}getCurrentNodeRef(){return this.session.at}getFullState(){return this.session.save().state}getHistory(){return this.session.history}getAllScenes(){return this.model.scenes}getInventory(){return Array.from(this.session.inventory).map(e=>{const t=this.model.items.get(e);return{id:e,name:t.name,description:t.description}})}}const Xe=[];function Lr(n,e=te){let t;const s=new Set;function i(a){if(vt(n,a)&&(n=a,t)){const l=!Xe.length;for(const c of s)c[1](),Xe.push(c,n);if(l){for(let c=0;c<Xe.length;c+=2)Xe[c][0](Xe[c+1]);Xe.length=0}}}function o(a){i(a(n))}function r(a,l=te){const c=[a,l];return s.add(c),s.size===1&&(t=e(i,o)||te),a(n),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:i,update:o,subscribe:r}}const Oe=Lr({engine:null,viewModel:null});function ns(n,e,t){const s=n.slice();return s[4]=e[t][0],s[5]=e[t][1],s}function ss(n,e,t){const s=n.slice();return s[8]=e[t],s}function is(n){var De,$e;let e,t,s,i,o,r,a,l=((De=n[1].viewModel)==null?void 0:De.sceneId)+"",c,u,f=(($e=n[1].viewModel)==null?void 0:$e.nodeId)+"",h,d,y,m,g,_,v,N=JSON.stringify(n[1].engine.getFullState(),null,2)+"",S,E,T,b,w,A,B,q=JSON.stringify(n[1].engine.getInventory(),null,2)+"",x,U,ee,he,Se,ie,Y,M=JSON.stringify(n[1].engine.getHistory(),null,2)+"",L,$,K,oe,pe,Ke,me=we(Array.from(n[1].engine.getAllScenes().entries())),H=[];for(let R=0;R<me.length;R+=1)H[R]=rs(ns(n,me,R));return{c(){e=I("div"),t=I("h3"),t.textContent="DEBUG PANEL",s=F(),i=I("section"),o=I("strong"),o.textContent="Current Node:",r=F(),a=I("div"),c=C(l),u=C(`.
        `),h=C(f),d=F(),y=I("section"),m=I("strong"),m.textContent="State:",g=F(),_=I("pre"),v=C(""),S=C(N),E=C(`
      `),T=F(),b=I("section"),w=I("strong"),w.textContent="Inventory:",A=F(),B=I("pre"),x=C(q),U=F(),ee=I("section"),he=I("strong"),he.textContent="History:",Se=F(),ie=I("pre"),Y=C(""),L=C(M),$=C(`
      `),K=F(),oe=I("section"),pe=I("strong"),pe.textContent="Jump To:",Ke=F();for(let R=0;R<H.length;R+=1)H[R].c();j(i,"class","svelte-1lq35cb"),j(y,"class","svelte-1lq35cb"),j(b,"class","svelte-1lq35cb"),j(ee,"class","svelte-1lq35cb"),j(oe,"class","svelte-1lq35cb"),j(e,"class","debug svelte-1lq35cb")},m(R,se){ne(R,e,se),p(e,t),p(e,s),p(e,i),p(i,o),p(i,r),p(i,a),p(a,c),p(a,u),p(a,h),p(e,d),p(e,y),p(y,m),p(y,g),p(y,_),p(_,v),p(_,S),p(_,E),p(e,T),p(e,b),p(b,w),p(b,A),p(b,B),p(B,x),p(e,U),p(e,ee),p(ee,he),p(ee,Se),p(ee,ie),p(ie,Y),p(ie,L),p(ie,$),p(e,K),p(e,oe),p(oe,pe),p(oe,Ke);for(let J=0;J<H.length;J+=1)H[J]&&H[J].m(oe,null)},p(R,se){var J,Me;if(se&2&&l!==(l=((J=R[1].viewModel)==null?void 0:J.sceneId)+"")&&G(c,l),se&2&&f!==(f=((Me=R[1].viewModel)==null?void 0:Me.nodeId)+"")&&G(h,f),se&2&&N!==(N=JSON.stringify(R[1].engine.getFullState(),null,2)+"")&&G(S,N),se&2&&q!==(q=JSON.stringify(R[1].engine.getInventory(),null,2)+"")&&G(x,q),se&2&&M!==(M=JSON.stringify(R[1].engine.getHistory(),null,2)+"")&&G(L,M),se&6){me=we(Array.from(R[1].engine.getAllScenes().entries()));let z;for(z=0;z<me.length;z+=1){const de=ns(R,me,z);H[z]?H[z].p(de,se):(H[z]=rs(de),H[z].c(),H[z].m(oe,null))}for(;z<H.length;z+=1)H[z].d(1);H.length=me.length}},d(R){R&&X(e),kt(H,R)}}}function os(n){let e,t=n[8]+"",s,i,o;function r(){return n[3](n[4],n[8])}return{c(){e=I("button"),s=C(t),j(e,"class","svelte-1lq35cb")},m(a,l){ne(a,e,l),p(e,s),i||(o=_e(e,"click",r),i=!0)},p(a,l){n=a,l&2&&t!==(t=n[8]+"")&&G(s,t)},d(a){a&&X(e),i=!1,o()}}}function rs(n){let e,t,s=n[4]+"",i,o,r,a=we(Array.from(n[5].nodes.keys())),l=[];for(let c=0;c<a.length;c+=1)l[c]=os(ss(n,a,c));return{c(){e=I("div"),t=I("strong"),i=C(s),o=F();for(let c=0;c<l.length;c+=1)l[c].c();r=F()},m(c,u){ne(c,e,u),p(e,t),p(t,i),p(e,o);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null);p(e,r)},p(c,u){if(u&2&&s!==(s=c[4]+"")&&G(i,s),u&6){a=we(Array.from(c[5].nodes.keys()));let f;for(f=0;f<a.length;f+=1){const h=ss(c,a,f);l[f]?l[f].p(h,u):(l[f]=os(h),l[f].c(),l[f].m(e,r))}for(;f<l.length;f+=1)l[f].d(1);l.length=a.length}},d(c){c&&X(e),kt(l,c)}}}function Cr(n){let e,t=n[0]&&n[1].engine&&is(n);return{c(){t&&t.c(),e=vs()},m(s,i){t&&t.m(s,i),ne(s,e,i)},p(s,[i]){s[0]&&s[1].engine?t?t.p(s,i):(t=is(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:te,o:te,d(s){s&&X(e),t&&t.d(s)}}}function Dr(n,e,t){let s;ws(n,Oe,a=>t(1,s=a));let{visible:i=!1}=e;function o(a,l){const c=Pt(Oe);if(!c.engine)return;const u=c.engine.save();u.at={scene:a,node:l};const f=c.engine.load(u);Oe.set({engine:c.engine,viewModel:f})}const r=(a,l)=>o(a,l);return n.$$set=a=>{"visible"in a&&t(0,i=a.visible)},[i,s,o,r]}class Mr extends Jt{constructor(e){super(),Ht(this,e,Dr,Cr,vt,{visible:0})}}function Pr(n){let e,t;return{c(){e=I("span"),t=C(n[0])},m(s,i){ne(s,e,i),p(e,t)},p(s,[i]){i&1&&G(t,s[0])},i:te,o:te,d(s){s&&X(e)}}}function Br(n,e,t){let{text:s}=e,{speed:i=20}=e,{onComplete:o}=e,r="",a=0,l=null,c=!1;ui(()=>{u()}),hi(()=>{c=!0,l&&(clearInterval(l),l=null)});function u(){if(t(0,r=""),a=0,c=!1,i===0){t(0,r=s),o==null||o();return}l=setInterval(()=>{a<s.length?(t(0,r+=s[a]),a++):(l&&(clearInterval(l),l=null),c||o==null||o())},i)}return n.$$set=f=>{"text"in f&&t(1,s=f.text),"speed"in f&&t(2,i=f.speed),"onComplete"in f&&t(3,o=f.onComplete)},[r,s,i,o]}class Fr extends Jt{constructor(e){super(),Ht(this,e,Br,Pr,vt,{text:1,speed:2,onComplete:3})}}function as(n){let e;return{c(){e=C("_")},m(t,s){ne(t,e,s)},d(t){t&&X(e)}}}function jr(n){let e,t=n[0]&&as();return{c(){e=I("span"),t&&t.c(),j(e,"class","cursor svelte-l3cu36")},m(s,i){ne(s,e,i),t&&t.m(e,null)},p(s,[i]){s[0]?t||(t=as(),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:te,o:te,d(s){s&&X(e),t&&t.d()}}}function Kr(n,e,t){let s=!0;return setInterval(()=>{t(0,s=!s)},500),[s]}class qr extends Jt{constructor(e){super(),Ht(this,e,Kr,jr,vt,{})}}function ls(n,e,t){const s=n.slice();return s[36]=e[t],s}function cs(n,e,t){const s=n.slice();return s[39]=e[t],s}function fs(n,e,t){const s=n.slice();return s[42]=e[t],s[44]=t,s}function us(n,e,t){const s=n.slice();return s[33]=e[t],s}function Rr(n){let e,t,s,i,o,r,a,l,c,u,f,h=[],d=new Map,y,m,g,_,v,N,S,E,T,b,w,A,B,q,x,U=n[15][n[11]]+"",ee,he=n[11]===n[12]?" - default value":"",Se,ie,Y,M,L,$,K,oe,pe,Ke,me=n[14]?"ON":"OFF",H,De,$e,R,se,J,Me,z,de=xr(n),qe=we(n[7]);const jn=O=>`${O[1]}-${O[10]}-${O[44]}`;for(let O=0;O<qe.length;O+=1){let P=fs(n,qe,O),ce=jn(P);d.set(ce,h[O]=hs(ce,P))}let re=n[8]&&ds(),Je=we(n[2].viewModel.choices),le=[];for(let O=0;O<Je.length;O+=1)le[O]=ms(cs(n,Je,O));function Kn(O,P){return O[2].viewModel.inventory.length===0?Jr:Hr}let Tt=Kn(n),Te=Tt(n);return se=new Mr({props:{visible:n[4]}}),{c(){e=I("div"),t=I("div"),s=I("div"),i=I("div"),o=I("h1"),r=C(n[6]),a=F(),l=I("button"),l.textContent="[ Eject Disc ]",c=F(),de&&de.c(),u=F(),f=I("div");for(let O=0;O<h.length;O+=1)h[O].c();y=F(),re&&re.c(),m=F(),g=I("div");for(let O=0;O<le.length;O+=1)le[O].c();_=F(),v=I("div"),N=I("h3"),N.textContent="Inventory",S=F(),Te.c(),E=F(),T=I("div"),b=I("h3"),b.textContent="Controls",w=F(),A=I("button"),A.textContent="[ Toggle Debug ]",B=F(),q=I("button"),x=C("[ Toggle Text Speed - "),ee=C(U),Se=C(he),ie=C(" ]"),Y=F(),M=I("button"),L=C("[ Theme: "),$=C(n[13]),K=C(" ]"),oe=F(),pe=I("button"),Ke=C("[ High Contrast: "),H=C(me),De=C(" ]"),R=F(),kn(se.$$.fragment),j(l,"class","eject"),j(i,"class","title-row"),j(s,"class","header"),j(f,"class","content"),j(g,"class","choices"),j(v,"class","inventory"),j(T,"class","controls"),j(t,"class","terminal"),j(e,"class",$e=`terminal-wrapper theme-${n[13]} `+(n[14]?"high-contrast":""))},m(O,P){ne(O,e,P),p(e,t),p(t,s),p(s,i),p(i,o),p(o,r),p(i,a),p(i,l),p(s,c),de&&de.m(s,null),p(t,u),p(t,f);for(let ce=0;ce<h.length;ce+=1)h[ce]&&h[ce].m(f,null);p(f,y),re&&re.m(f,null),p(t,m),p(t,g);for(let ce=0;ce<le.length;ce+=1)le[ce]&&le[ce].m(g,null);p(t,_),p(t,v),p(v,N),p(v,S),Te.m(v,null),p(t,E),p(t,T),p(T,b),p(T,w),p(T,A),p(T,B),p(T,q),p(q,x),p(q,ee),p(q,Se),p(q,ie),p(T,Y),p(T,M),p(M,L),p(M,$),p(M,K),p(T,oe),p(T,pe),p(pe,Ke),p(pe,H),p(pe,De),ne(O,R,P),Yt(se,O,P),J=!0,Me||(z=[_e(l,"click",n[20]),_e(A,"click",n[28]),_e(q,"click",n[29]),_e(M,"click",n[16]),_e(pe,"click",n[17])],Me=!0)},p(O,P){if((!J||P[0]&64)&&G(r,O[6]),de.p(O,P),P[0]&4195971&&(qe=we(O[7]),qt(),h=_i(h,P,jn,1,O,qe,d,f,yi,hs,y,fs),Rt()),O[8]?re?P[0]&256&&ge(re,1):(re=ds(),re.c(),ge(re,1),re.m(f,null)):re&&(qt(),Ie(re,1,1,()=>{re=null}),Rt()),P[0]&2097156){Je=we(O[2].viewModel.choices);let ye;for(ye=0;ye<Je.length;ye+=1){const qn=cs(O,Je,ye);le[ye]?le[ye].p(qn,P):(le[ye]=ms(qn),le[ye].c(),le[ye].m(g,null))}for(;ye<le.length;ye+=1)le[ye].d(1);le.length=Je.length}Tt===(Tt=Kn(O))&&Te?Te.p(O,P):(Te.d(1),Te=Tt(O),Te&&(Te.c(),Te.m(v,null))),(!J||P[0]&2048)&&U!==(U=O[15][O[11]]+"")&&G(ee,U),(!J||P[0]&6144)&&he!==(he=O[11]===O[12]?" - default value":"")&&G(Se,he),(!J||P[0]&8192)&&G($,O[13]),(!J||P[0]&16384)&&me!==(me=O[14]?"ON":"OFF")&&G(H,me),(!J||P[0]&24576&&$e!==($e=`terminal-wrapper theme-${O[13]} `+(O[14]?"high-contrast":"")))&&j(e,"class",$e);const ce={};P[0]&16&&(ce.visible=O[4]),se.$set(ce)},i(O){if(!J){for(let P=0;P<qe.length;P+=1)ge(h[P]);ge(re),ge(se.$$.fragment,O),J=!0}},o(O){for(let P=0;P<h.length;P+=1)Ie(h[P]);Ie(re),Ie(se.$$.fragment,O),J=!1},d(O){O&&(X(e),X(R)),de&&de.d();for(let P=0;P<h.length;P+=1)h[P].d();re&&re.d(),kt(le,O),Te.d(),Gt(se,O),Me=!1,je(z)}}}function Ur(n){let e,t,s,i,o,r,a,l,c,u,f,h,d,y=n[15][n[11]]+"",m,g=n[11]===n[12]?" - default value":"",_,v,N,S,E,T,b,w,A,B,q=n[14]?"ON":"OFF",x,U,ee,he,Se,ie=we(n[18]),Y=[];for(let M=0;M<ie.length;M+=1)Y[M]=ps(us(n,ie,M));return{c(){e=I("div"),t=I("div"),s=I("h1"),s.textContent="Insert Game Disc",i=F(),o=I("div");for(let M=0;M<Y.length;M+=1)Y[M].c();r=F(),a=I("div"),l=I("h3"),l.textContent="Controls",c=F(),u=I("button"),u.textContent="[ Toggle Debug ]",f=F(),h=I("button"),d=C("[ Toggle Text Speed - "),m=C(y),_=C(g),v=C(" ]"),N=F(),S=I("button"),E=C("[ Theme: "),T=C(n[13]),b=C(" ]"),w=F(),A=I("button"),B=C("[ High Contrast: "),x=C(q),U=C(" ]"),j(o,"class","choices"),j(a,"class","controls"),j(t,"class","terminal"),j(e,"class",ee=`terminal-wrapper theme-${n[13]} `+(n[14]?"high-contrast":""))},m(M,L){ne(M,e,L),p(e,t),p(t,s),p(t,i),p(t,o);for(let $=0;$<Y.length;$+=1)Y[$]&&Y[$].m(o,null);p(t,r),p(t,a),p(a,l),p(a,c),p(a,u),p(a,f),p(a,h),p(h,d),p(h,m),p(h,_),p(h,v),p(a,N),p(a,S),p(S,E),p(S,T),p(S,b),p(a,w),p(a,A),p(A,B),p(A,x),p(A,U),he||(Se=[_e(u,"click",n[25]),_e(h,"click",n[26]),_e(S,"click",n[16]),_e(A,"click",n[17])],he=!0)},p(M,L){if(L[0]&786432){ie=we(M[18]);let $;for($=0;$<ie.length;$+=1){const K=us(M,ie,$);Y[$]?Y[$].p(K,L):(Y[$]=ps(K),Y[$].c(),Y[$].m(o,null))}for(;$<Y.length;$+=1)Y[$].d(1);Y.length=ie.length}L[0]&2048&&y!==(y=M[15][M[11]]+"")&&G(m,y),L[0]&6144&&g!==(g=M[11]===M[12]?" - default value":"")&&G(_,g),L[0]&8192&&G(T,M[13]),L[0]&16384&&q!==(q=M[14]?"ON":"OFF")&&G(x,q),L[0]&24576&&ee!==(ee=`terminal-wrapper theme-${M[13]} `+(M[14]?"high-contrast":""))&&j(e,"class",ee)},i:te,o:te,d(M){M&&X(e),kt(Y,M),he=!1,je(Se)}}}function Vr(n){let e,t,s,i,o;return{c(){e=I("div"),t=I("div"),s=I("pre"),i=C(n[3]),j(s,"class","error"),j(t,"class","terminal"),j(e,"class",o=`terminal-wrapper theme-${n[13]} `+(n[14]?"high-contrast":""))},m(r,a){ne(r,e,a),p(e,t),p(t,s),p(s,i)},p(r,a){a[0]&8&&G(i,r[3]),a[0]&24576&&o!==(o=`terminal-wrapper theme-${r[13]} `+(r[14]?"high-contrast":""))&&j(e,"class",o)},i:te,o:te,d(r){r&&X(e)}}}function xr(n){let e,t,s=n[2].viewModel.sceneId+"",i,o,r=n[2].viewModel.nodeId+"",a;return{c(){e=I("div"),t=I("i"),i=C(s),o=C("."),a=C(r),j(e,"class","node")},m(l,c){ne(l,e,c),p(e,t),p(t,i),p(t,o),p(t,a)},p(l,c){c[0]&4&&s!==(s=l[2].viewModel.sceneId+"")&&G(i,s),c[0]&4&&r!==(r=l[2].viewModel.nodeId+"")&&G(a,r)},d(l){l&&X(e)}}}function Yr(n){let e,t;return e=new Fr({props:{text:n[42],speed:n[9],onComplete:n[44]===n[7].length-1?n[22]:void 0}}),{c(){kn(e.$$.fragment)},m(s,i){Yt(e,s,i),t=!0},p(s,i){const o={};i[0]&128&&(o.text=s[42]),i[0]&512&&(o.speed=s[9]),i[0]&128&&(o.onComplete=s[44]===s[7].length-1?s[22]:void 0),e.$set(o)},i(s){t||(ge(e.$$.fragment,s),t=!0)},o(s){Ie(e.$$.fragment,s),t=!1},d(s){Gt(e,s)}}}function Gr(n){let e,t=n[42]+"",s;return{c(){e=I("span"),s=C(t)},m(i,o){ne(i,e,o),p(e,s)},p(i,o){o[0]&128&&t!==(t=i[42]+"")&&G(s,t)},i:te,o:te,d(i){i&&X(e)}}}function hs(n,e){let t,s,i,o;const r=[Gr,Yr],a=[];function l(c,u){return c[0]?0:1}return s=l(e),i=a[s]=r[s](e),{key:n,first:null,c(){t=I("p"),i.c(),this.first=t},m(c,u){ne(c,t,u),a[s].m(t,null),o=!0},p(c,u){e=c;let f=s;s=l(e),s===f?a[s].p(e,u):(qt(),Ie(a[f],1,1,()=>{a[f]=null}),Rt(),i=a[s],i?i.p(e,u):(i=a[s]=r[s](e),i.c()),ge(i,1),i.m(t,null))},i(c){o||(ge(i),o=!0)},o(c){Ie(i),o=!1},d(c){c&&X(t),a[s].d()}}}function ds(n){let e,t;return e=new qr({}),{c(){kn(e.$$.fragment)},m(s,i){Yt(e,s,i),t=!0},i(s){t||(ge(e.$$.fragment,s),t=!0)},o(s){Ie(e.$$.fragment,s),t=!1},d(s){Gt(e,s)}}}function ms(n){let e,t,s=n[39].text+"",i,o,r,a,l;function c(){return n[27](n[39])}return{c(){e=I("button"),t=C("> "),i=C(s),o=F(),e.disabled=r=!n[39].enabled},m(u,f){ne(u,e,f),p(e,t),p(e,i),p(e,o),a||(l=_e(e,"click",c),a=!0)},p(u,f){n=u,f[0]&4&&s!==(s=n[39].text+"")&&G(i,s),f[0]&4&&r!==(r=!n[39].enabled)&&(e.disabled=r)},d(u){u&&X(e),a=!1,l()}}}function Hr(n){let e,t=we(n[2].viewModel.inventory),s=[];for(let i=0;i<t.length;i+=1)s[i]=gs(ls(n,t,i));return{c(){e=I("ul");for(let i=0;i<s.length;i+=1)s[i].c()},m(i,o){ne(i,e,o);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(e,null)},p(i,o){if(o[0]&4){t=we(i[2].viewModel.inventory);let r;for(r=0;r<t.length;r+=1){const a=ls(i,t,r);s[r]?s[r].p(a,o):(s[r]=gs(a),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=t.length}},d(i){i&&X(e),kt(s,i)}}}function Jr(n){let e;return{c(){e=I("p"),e.textContent="(empty)",j(e,"class","muted")},m(t,s){ne(t,e,s)},p:te,d(t){t&&X(e)}}}function gs(n){let e,t=n[36].name+"",s,i,o;return{c(){e=I("li"),s=C(t),i=F(),j(e,"title",o=n[36].description)},m(r,a){ne(r,e,a),p(e,s),p(e,i)},p(r,a){a[0]&4&&t!==(t=r[36].name+"")&&G(s,t),a[0]&4&&o!==(o=r[36].description)&&j(e,"title",o)},d(r){r&&X(e)}}}function ps(n){let e,t,s;function i(){return n[24](n[33])}return{c(){e=I("button"),e.textContent=`> ${n[33].title} `},m(o,r){ne(o,e,r),t||(s=_e(e,"click",i),t=!0)},p(o,r){n=o},d(o){o&&X(e),t=!1,s()}}}function zr(n){let e,t,s,i;const o=[Vr,Ur,Rr],r=[];function a(l,c){return l[3]?0:l[5]?l[2].viewModel?2:-1:1}return~(e=a(n))&&(t=r[e]=o[e](n)),{c(){t&&t.c(),s=vs()},m(l,c){~e&&r[e].m(l,c),ne(l,s,c),i=!0},p(l,c){let u=e;e=a(l),e===u?~e&&r[e].p(l,c):(t&&(qt(),Ie(r[u],1,1,()=>{r[u]=null}),Rt()),~e?(t=r[e],t?t.p(l,c):(t=r[e]=o[e](l),t.c()),ge(t,1),t.m(s.parentNode,s)):t=null)},i(l){i||(ge(t),i=!0)},o(l){Ie(t),i=!1},d(l){l&&X(s),~e&&r[e].d(l)}}}function Wr(n,e,t){let s;ws(n,Oe,L=>t(2,s=L));let i=null,o=!1,r=null,a=null,l=[],c=0,u=!1,f=10,h=!1,d=null,y=0;const m=["slow","normal","fast","instant"];let g=1,_=1,v="dark",N=!1;function S(){t(13,v=v==="dark"?"light":"dark")}function E(){t(14,N=!N)}const T=er(),b=[];for(const[L,$]of Object.entries(T))try{const K=Pe($.raw.game,"game.yaml").value;b.push({id:L,title:K.game.title})}catch{}function w(L){try{const $=T[L];if(!$)throw new Error(`Game "${L}" not found`);const K=$.raw,oe=Pe(K.game,"game.yaml").value,pe=Pe(K.rules,"rules.yaml").value,Ke=Pe(K.state,"state.yaml").value,me=Pe(K.items,"items.yaml").value,H={};for(const[z,de]of Object.entries(K.scenes))H[z]=Pe(de,`scenes/${z}`).value;x(oe.game.ui.text_speed);const De={};for(const[z,de]of Object.entries(K.localization)){const qe=z.replace(/\.ya?ml$/,"");De[qe]=Pe(de,`localization/${z}`).value}const $e=oe.game.ui.text_speed;t(12,_=m.indexOf($e)),_===-1&&t(12,_=1),t(11,g=_);const R={manifest:oe,rules:pe,state:Ke,items:me,scenes:H,localization:De};tr(R);const se=ur(R),J=new $r(se),Me=J.start();Oe.set({engine:J,viewModel:Me}),t(5,r=L),t(6,a=oe.game.title),t(3,i=null)}catch($){t(3,i=$ instanceof Error?$.toString():String($))}}function A(){t(5,r=null),t(6,a=null),Oe.set({engine:null,viewModel:null})}function B(L){const $=Pt(Oe);if($.engine)try{console.groupCollapsed(`[UI] choose("${L}")`),console.log("Before:",{at:$.engine.getCurrentNodeRef(),visibleState:$.engine.getFullState()});const K=$.engine.choose(L);console.log("After:",{at:$.engine.getCurrentNodeRef(),visibleState:$.engine.getFullState(),vm:{sceneId:K.sceneId,nodeId:K.nodeId,choices:K.choices.map(oe=>oe.id)}}),Oe.set({engine:$.engine,viewModel:K}),t(3,i=null)}catch(K){console.error("[UI] choose failed:",K),t(3,i=K instanceof Error?K.toString():String(K))}finally{console.groupEnd()}}function q(){const L=Pt(Oe).viewModel;!L||`${L.sceneId}:${L.nodeId}`!==d||(c++,c<L.text.length?t(7,l=[...l,L.text[c]]):t(8,u=!1))}function x(L){if(t(0,h=!1),typeof L=="number"){t(9,f=Math.max(0,L)),f===0&&t(0,h=!0);return}switch(L){case"slow":t(9,f=40);break;case"normal":t(9,f=20);break;case"fast":t(9,f=10);break;case"instant":t(9,f=0),t(0,h=!0);break;default:t(9,f=20)}}function U(){t(11,g=(g+1)%m.length);const L=m[g];x(L);const $=Pt(Oe).viewModel;$&&(t(10,y++,y),c=0,h?(t(7,l=[...$.text]),t(8,u=!1)):(t(7,l=$.text.length>0?[$.text[0]]:[]),t(8,u=$.text.length>0)))}const ee=L=>w(L.id),he=()=>t(4,o=!o),Se=()=>U(),ie=L=>B(L.id),Y=()=>t(4,o=!o),M=()=>U();return n.$$.update=()=>{if(n.$$.dirty[0]&7&&s.viewModel){const L=s.viewModel,$=`${L.sceneId}:${L.nodeId}`;if($!==d){t(1,d=$);const K=L.text;t(7,l=[]),c=0,K.length>0?(t(7,l=[K[0]]),t(8,u=!h)):t(8,u=!1)}}},[h,d,s,i,o,r,a,l,u,f,y,g,_,v,N,m,S,E,b,w,A,B,q,U,ee,he,Se,ie,Y,M]}class Qr extends Jt{constructor(e){super(),Ht(this,e,Wr,zr,vt,{},null,[-1,-1])}}new Qr({target:document.getElementById("app")});
