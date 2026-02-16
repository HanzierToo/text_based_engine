var Hs=Object.defineProperty;var Js=(n,e,t)=>e in n?Hs(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var X=(n,e,t)=>Js(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function J(){}function is(n){return n()}function On(){return Object.create(null)}function Le(n){n.forEach(is)}function os(n){return typeof n=="function"}function lt(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function zs(n){return Object.keys(n).length===0}function rs(n,...e){if(n==null){for(const s of e)s(void 0);return J}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Xt(n){let e;return rs(n,t=>e=t)(),e}function as(n,e,t){n.$$.on_destroy.push(rs(e,t))}function b(n,e){n.appendChild(e)}function z(n,e,t){n.insertBefore(e,t||null)}function G(n){n.parentNode&&n.parentNode.removeChild(n)}function ct(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function A(n){return document.createElement(n)}function F(n){return document.createTextNode(n)}function q(){return F(" ")}function ls(){return F("")}function it(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function D(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Ws(n){return Array.from(n.childNodes)}function te(n,e){e=""+e,n.data!==e&&(n.data=e)}let ot;function tt(n){ot=n}function Qs(){if(!ot)throw new Error("Function called outside component initialization");return ot}function Xs(n){Qs().$$.on_mount.push(n)}const je=[],An=[];let Ue=[];const $n=[],Zs=Promise.resolve();let Zt=!1;function ei(){Zt||(Zt=!0,Zs.then(cs))}function en(n){Ue.push(n)}const Vt=new Set;let Me=0;function cs(){if(Me!==0)return;const n=ot;do{try{for(;Me<je.length;){const e=je[Me];Me++,tt(e),ti(e.$$)}}catch(e){throw je.length=0,Me=0,e}for(tt(null),je.length=0,Me=0;An.length;)An.pop()();for(let e=0;e<Ue.length;e+=1){const t=Ue[e];Vt.has(t)||(Vt.add(t),t())}Ue.length=0}while(je.length);for(;$n.length;)$n.pop()();Zt=!1,Vt.clear(),tt(n)}function ti(n){if(n.fragment!==null){n.update(),Le(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(en)}}function ni(n){const e=[],t=[];Ue.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),Ue=e}const vt=new Set;let Ee;function It(){Ee={r:0,c:[],p:Ee}}function Et(){Ee.r||Le(Ee.c),Ee=Ee.p}function ie(n,e){n&&n.i&&(vt.delete(n),n.i(e))}function de(n,e,t,s){if(n&&n.o){if(vt.has(n))return;vt.add(n),Ee.c.push(()=>{vt.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}function ce(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function si(n,e){de(n,1,1,()=>{e.delete(n.key)})}function ii(n,e,t,s,i,o,r,a,c,l,u,f){let m=n.length,h=o.length,y=m;const d={};for(;y--;)d[n[y].key]=y;const g=[],_=new Map,S=new Map,E=[];for(y=h;y--;){const w=f(i,o,y),p=t(w);let k=r.get(p);k?E.push(()=>k.p(w,e)):(k=l(p,w),k.c()),_.set(p,g[y]=k),p in d&&S.set(p,Math.abs(y-d[p]))}const N=new Set,I=new Set;function $(w){ie(w,1),w.m(a,u),r.set(w.key,w),u=w.first,h--}for(;m&&h;){const w=g[h-1],p=n[m-1],k=w.key,O=p.key;w===p?(u=w.first,m--,h--):_.has(O)?!r.has(k)||N.has(k)?$(w):I.has(O)?m--:S.get(k)>S.get(O)?(I.add(k),$(w)):(N.add(O),m--):(c(p,r),m--)}for(;m--;){const w=n[m];_.has(w.key)||c(w,r)}for(;h;)$(g[h-1]);return Le(E),g}function ln(n){n&&n.c()}function $t(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),en(()=>{const o=n.$$.on_mount.map(is).filter(os);n.$$.on_destroy?n.$$.on_destroy.push(...o):Le(o),n.$$.on_mount=[]}),i.forEach(en)}function Lt(n,e){const t=n.$$;t.fragment!==null&&(ni(t.after_update),Le(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function oi(n,e){n.$$.dirty[0]===-1&&(je.push(n),ei(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ct(n,e,t,s,i,o,r=null,a=[-1]){const c=ot;tt(n);const l=n.$$={fragment:null,ctx:[],props:o,update:J,not_equal:i,bound:On(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:On(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let u=!1;if(l.ctx=t?t(n,e.props||{},(f,m,...h)=>{const y=h.length?h[0]:m;return l.ctx&&i(l.ctx[f],l.ctx[f]=y)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](y),u&&oi(n,f)),m}):[],l.update(),u=!0,Le(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const f=Ws(e.target);l.fragment&&l.fragment.l(f),f.forEach(G)}else l.fragment&&l.fragment.c();e.intro&&ie(n.$$.fragment),$t(n,e.target,e.anchor),cs()}tt(c)}class Dt{constructor(){X(this,"$$");X(this,"$$set")}$destroy(){Lt(this,1),this.$destroy=J}$on(e,t){if(!os(t))return J;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!zs(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ri="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ri);const ai=`game:
  id: boiler_7
  title: Boiler 7
  version: "0.1"

  start:
    scene: arrival
    node: dock
  
  ui:
    theme: default
    text_speed: normal`,li=`items:
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
`,ci=`boiler:
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
`,fi=`rules:
  systems:
    randomness: false
    inventory: true
    statistics: false
    combat: false

  state_visibility:
    default: visible`,ui=`scene:
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
            node: main`,hi=`scene:
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
            node: main`,di=`scene:
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
      choices: []`,mi=`scene:
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
            node: main`,gi=`scene:
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
            node: entrance`,pi=`state:
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
      visible: true`,yi=`game:
  id: midnight_switchboard
  title: Midnight Switchboard
  version: "0.1"

  start:
    scene: prologue
    node: desk

  ui:
    theme: default
    text_speed: normal`,_i=`items:

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
    description: midnight.item.black_candle.description`,bi=`midnight:

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
      description: "A thick candle that absorbs more light than it reflects."`,wi=`rules:
  systems:
    randomness: true
    inventory: true
    statistics: false
    combat: false

  state_visibility:
    default: visible`,vi=`scene:
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
            node: ritual_outcome`,ki=`scene:
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
            node: main`,Si=`scene:
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
      choices: []`,Ni=`scene:
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
            node: main`,Ii=`scene:
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
            node: lift_receiver`,Ei=`scene:
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
            node: main`,Ti=`scene:
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
            node: main`,Oi=`state:
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
      visible: true`,cn=Symbol.for("yaml.alias"),tn=Symbol.for("yaml.document"),ke=Symbol.for("yaml.map"),fs=Symbol.for("yaml.pair"),ge=Symbol.for("yaml.scalar"),He=Symbol.for("yaml.seq"),ue=Symbol.for("yaml.node.type"),Ce=n=>!!n&&typeof n=="object"&&n[ue]===cn,Mt=n=>!!n&&typeof n=="object"&&n[ue]===tn,ft=n=>!!n&&typeof n=="object"&&n[ue]===ke,H=n=>!!n&&typeof n=="object"&&n[ue]===fs,M=n=>!!n&&typeof n=="object"&&n[ue]===ge,ut=n=>!!n&&typeof n=="object"&&n[ue]===He;function V(n){if(n&&typeof n=="object")switch(n[ue]){case ke:case He:return!0}return!1}function Y(n){if(n&&typeof n=="object")switch(n[ue]){case cn:case ke:case ge:case He:return!0}return!1}const us=n=>(M(n)||V(n))&&!!n.anchor,Ie=Symbol("break visit"),Ai=Symbol("skip children"),nt=Symbol("remove node");function Je(n,e){const t=$i(e);Mt(n)?Ke(null,n.contents,t,Object.freeze([n]))===nt&&(n.contents=null):Ke(null,n,t,Object.freeze([]))}Je.BREAK=Ie;Je.SKIP=Ai;Je.REMOVE=nt;function Ke(n,e,t,s){const i=Li(n,e,t,s);if(Y(i)||H(i))return Ci(n,s,i),Ke(n,i,t,s);if(typeof i!="symbol"){if(V(e)){s=Object.freeze(s.concat(e));for(let o=0;o<e.items.length;++o){const r=Ke(o,e.items[o],t,s);if(typeof r=="number")o=r-1;else{if(r===Ie)return Ie;r===nt&&(e.items.splice(o,1),o-=1)}}}else if(H(e)){s=Object.freeze(s.concat(e));const o=Ke("key",e.key,t,s);if(o===Ie)return Ie;o===nt&&(e.key=null);const r=Ke("value",e.value,t,s);if(r===Ie)return Ie;r===nt&&(e.value=null)}}return i}function $i(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function Li(n,e,t,s){var i,o,r,a,c;if(typeof t=="function")return t(n,e,s);if(ft(e))return(i=t.Map)==null?void 0:i.call(t,n,e,s);if(ut(e))return(o=t.Seq)==null?void 0:o.call(t,n,e,s);if(H(e))return(r=t.Pair)==null?void 0:r.call(t,n,e,s);if(M(e))return(a=t.Scalar)==null?void 0:a.call(t,n,e,s);if(Ce(e))return(c=t.Alias)==null?void 0:c.call(t,n,e,s)}function Ci(n,e,t){const s=e[e.length-1];if(V(s))s.items[n]=t;else if(H(s))n==="key"?s.key=t:s.value=t;else if(Mt(s))s.contents=t;else{const i=Ce(s)?"alias":"scalar";throw new Error(`Cannot replace node with ${i} parent`)}}const Di={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Mi=n=>n.replace(/[!,[\]{}]/g,e=>Di[e]);class ee{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},ee.defaultYaml,e),this.tags=Object.assign({},ee.defaultTags,t)}clone(){const e=new ee(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new ee(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:ee.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},ee.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:ee.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},ee.defaultTags),this.atNextDocument=!1);const s=e.trim().split(/[ \t]+/),i=s.shift();switch(i){case"%TAG":{if(s.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),s.length<2))return!1;const[o,r]=s;return this.tags[o]=r,!0}case"%YAML":{if(this.yaml.explicit=!0,s.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[o]=s;if(o==="1.1"||o==="1.2")return this.yaml.version=o,!0;{const r=/^\d+\.\d+$/.test(o);return t(6,`Unsupported YAML version ${o}`,r),!1}}default:return t(0,`Unknown directive ${i}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const r=e.slice(2,-1);return r==="!"||r==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),r)}const[,s,i]=e.match(/^(.*!)([^!]*)$/s);i||t(`The ${e} tag has no suffix`);const o=this.tags[s];if(o)try{return o+decodeURIComponent(i)}catch(r){return t(String(r)),null}return s==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,s]of Object.entries(this.tags))if(e.startsWith(s))return t+Mi(e.substring(s.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],s=Object.entries(this.tags);let i;if(e&&s.length>0&&Y(e.contents)){const o={};Je(e.contents,(r,a)=>{Y(a)&&a.tag&&(o[a.tag]=!0)}),i=Object.keys(o)}else i=[];for(const[o,r]of s)o==="!!"&&r==="tag:yaml.org,2002:"||(!e||i.some(a=>a.startsWith(r)))&&t.push(`%TAG ${o} ${r}`);return t.join(`
`)}}ee.defaultYaml={explicit:!1,version:"1.2"};ee.defaultTags={"!!":"tag:yaml.org,2002:"};function hs(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function ds(n){const e=new Set;return Je(n,{Value(t,s){s.anchor&&e.add(s.anchor)}}),e}function ms(n,e){for(let t=1;;++t){const s=`${n}${t}`;if(!e.has(s))return s}}function Pi(n,e){const t=[],s=new Map;let i=null;return{onAnchor:o=>{t.push(o),i??(i=ds(n));const r=ms(e,i);return i.add(r),r},setAnchors:()=>{for(const o of t){const r=s.get(o);if(typeof r=="object"&&r.anchor&&(M(r.node)||V(r.node)))r.node.anchor=r.anchor;else{const a=new Error("Failed to resolve repeated object (this should not happen)");throw a.source=o,a}}},sourceObjects:s}}function qe(n,e,t,s){if(s&&typeof s=="object")if(Array.isArray(s))for(let i=0,o=s.length;i<o;++i){const r=s[i],a=qe(n,s,String(i),r);a===void 0?delete s[i]:a!==r&&(s[i]=a)}else if(s instanceof Map)for(const i of Array.from(s.keys())){const o=s.get(i),r=qe(n,s,i,o);r===void 0?s.delete(i):r!==o&&s.set(i,r)}else if(s instanceof Set)for(const i of Array.from(s)){const o=qe(n,s,i,i);o===void 0?s.delete(i):o!==i&&(s.delete(i),s.add(o))}else for(const[i,o]of Object.entries(s)){const r=qe(n,s,i,o);r===void 0?delete s[i]:r!==o&&(s[i]=r)}return n.call(e,t,s)}function fe(n,e,t){if(Array.isArray(n))return n.map((s,i)=>fe(s,String(i),t));if(n&&typeof n.toJSON=="function"){if(!t||!us(n))return n.toJSON(e,t);const s={aliasCount:0,count:1,res:void 0};t.anchors.set(n,s),t.onCreate=o=>{s.res=o,delete t.onCreate};const i=n.toJSON(e,t);return t.onCreate&&t.onCreate(i),i}return typeof n=="bigint"&&!(t!=null&&t.keep)?Number(n):n}class fn{constructor(e){Object.defineProperty(this,ue,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:s,onAnchor:i,reviver:o}={}){if(!Mt(e))throw new TypeError("A document argument is required");const r={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},a=fe(this,"",r);if(typeof i=="function")for(const{count:c,res:l}of r.anchors.values())i(l,c);return typeof o=="function"?qe(o,{"":a},"",a):a}}class un extends fn{constructor(e){super(cn),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){let s;t!=null&&t.aliasResolveCache?s=t.aliasResolveCache:(s=[],Je(e,{Node:(o,r)=>{(Ce(r)||us(r))&&s.push(r)}}),t&&(t.aliasResolveCache=s));let i;for(const o of s){if(o===this)break;o.anchor===this.source&&(i=o)}return i}toJSON(e,t){if(!t)return{source:this.source};const{anchors:s,doc:i,maxAliasCount:o}=t,r=this.resolve(i,t);if(!r){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(c)}let a=s.get(r);if(a||(fe(r,null,t),a=s.get(r)),(a==null?void 0:a.res)===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(o>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=kt(i,r,s)),a.count*a.aliasCount>o)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}return a.res}toString(e,t,s){const i=`*${this.source}`;if(e){if(hs(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const o=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(o)}if(e.implicitKey)return`${i} `}return i}}function kt(n,e,t){if(Ce(e)){const s=e.resolve(n),i=t&&s&&t.get(s);return i?i.count*i.aliasCount:0}else if(V(e)){let s=0;for(const i of e.items){const o=kt(n,i,t);o>s&&(s=o)}return s}else if(H(e)){const s=kt(n,e.key,t),i=kt(n,e.value,t);return Math.max(s,i)}return 1}const gs=n=>!n||typeof n!="function"&&typeof n!="object";class L extends fn{constructor(e){super(ge),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:fe(this.value,e,t)}toString(){return String(this.value)}}L.BLOCK_FOLDED="BLOCK_FOLDED";L.BLOCK_LITERAL="BLOCK_LITERAL";L.PLAIN="PLAIN";L.QUOTE_DOUBLE="QUOTE_DOUBLE";L.QUOTE_SINGLE="QUOTE_SINGLE";const Bi="tag:yaml.org,2002:";function Fi(n,e,t){if(e){const s=t.filter(o=>o.tag===e),i=s.find(o=>!o.format)??s[0];if(!i)throw new Error(`Tag ${e} not found`);return i}return t.find(s=>{var i;return((i=s.identify)==null?void 0:i.call(s,n))&&!s.format})}function rt(n,e,t){var f,m,h;if(Mt(n)&&(n=n.contents),Y(n))return n;if(H(n)){const y=(m=(f=t.schema[ke]).createNode)==null?void 0:m.call(f,t.schema,null,t);return y.items.push(n),y}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:s,onAnchor:i,onTagObj:o,schema:r,sourceObjects:a}=t;let c;if(s&&n&&typeof n=="object"){if(c=a.get(n),c)return c.anchor??(c.anchor=i(n)),new un(c.anchor);c={anchor:null,node:null},a.set(n,c)}e!=null&&e.startsWith("!!")&&(e=Bi+e.slice(2));let l=Fi(n,e,r.tags);if(!l){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const y=new L(n);return c&&(c.node=y),y}l=n instanceof Map?r[ke]:Symbol.iterator in Object(n)?r[He]:r[ke]}o&&(o(l),delete t.onTagObj);const u=l!=null&&l.createNode?l.createNode(t.schema,n,t):typeof((h=l==null?void 0:l.nodeClass)==null?void 0:h.from)=="function"?l.nodeClass.from(t.schema,n,t):new L(n);return e?u.tag=e:l.default||(u.tag=l.tag),c&&(c.node=u),u}function Tt(n,e,t){let s=t;for(let i=e.length-1;i>=0;--i){const o=e[i];if(typeof o=="number"&&Number.isInteger(o)&&o>=0){const r=[];r[o]=s,s=r}else s=new Map([[o,s]])}return rt(s,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const Ze=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class ps extends fn{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(s=>Y(s)||H(s)?s.clone(e):s),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(Ze(e))this.add(t);else{const[s,...i]=e,o=this.get(s,!0);if(V(o))o.addIn(i,t);else if(o===void 0&&this.schema)this.set(s,Tt(this.schema,i,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`)}}deleteIn(e){const[t,...s]=e;if(s.length===0)return this.delete(t);const i=this.get(t,!0);if(V(i))return i.deleteIn(s);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${s}`)}getIn(e,t){const[s,...i]=e,o=this.get(s,!0);return i.length===0?!t&&M(o)?o.value:o:V(o)?o.getIn(i,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!H(t))return!1;const s=t.value;return s==null||e&&M(s)&&s.value==null&&!s.commentBefore&&!s.comment&&!s.tag})}hasIn(e){const[t,...s]=e;if(s.length===0)return this.has(t);const i=this.get(t,!0);return V(i)?i.hasIn(s):!1}setIn(e,t){const[s,...i]=e;if(i.length===0)this.set(s,t);else{const o=this.get(s,!0);if(V(o))o.setIn(i,t);else if(o===void 0&&this.schema)this.set(s,Tt(this.schema,i,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`)}}}const ji=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function _e(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const Te=(n,e,t)=>n.endsWith(`
`)?_e(t,e):t.includes(`
`)?`
`+_e(t,e):(n.endsWith(" ")?"":" ")+t,ys="flow",nn="block",St="quoted";function Pt(n,e,t="flow",{indentAtStart:s,lineWidth:i=80,minContentWidth:o=20,onFold:r,onOverflow:a}={}){if(!i||i<0)return n;i<o&&(o=0);const c=Math.max(1+o,1+i-e.length);if(n.length<=c)return n;const l=[],u={};let f=i-e.length;typeof s=="number"&&(s>i-Math.max(2,o)?l.push(0):f=i-s);let m,h,y=!1,d=-1,g=-1,_=-1;t===nn&&(d=Ln(n,d,e.length),d!==-1&&(f=d+c));for(let E;E=n[d+=1];){if(t===St&&E==="\\"){switch(g=d,n[d+1]){case"x":d+=3;break;case"u":d+=5;break;case"U":d+=9;break;default:d+=1}_=d}if(E===`
`)t===nn&&(d=Ln(n,d,e.length)),f=d+e.length+c,m=void 0;else{if(E===" "&&h&&h!==" "&&h!==`
`&&h!=="	"){const N=n[d+1];N&&N!==" "&&N!==`
`&&N!=="	"&&(m=d)}if(d>=f)if(m)l.push(m),f=m+c,m=void 0;else if(t===St){for(;h===" "||h==="	";)h=E,E=n[d+=1],y=!0;const N=d>_+1?d-2:g-1;if(u[N])return n;l.push(N),u[N]=!0,f=N+c,m=void 0}else y=!0}h=E}if(y&&a&&a(),l.length===0)return n;r&&r();let S=n.slice(0,l[0]);for(let E=0;E<l.length;++E){const N=l[E],I=l[E+1]||n.length;N===0?S=`
${e}${n.slice(0,I)}`:(t===St&&u[N]&&(S+=`${n[N]}\\`),S+=`
${e}${n.slice(N+1,I)}`)}return S}function Ln(n,e,t){let s=e,i=e+1,o=n[i];for(;o===" "||o==="	";)if(e<i+t)o=n[++e];else{do o=n[++e];while(o&&o!==`
`);s=e,i=e+1,o=n[i]}return s}const Bt=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),Ft=n=>/^(%|---|\.\.\.)/m.test(n);function Ki(n,e,t){if(!e||e<0)return!1;const s=e-t,i=n.length;if(i<=s)return!1;for(let o=0,r=0;o<i;++o)if(n[o]===`
`){if(o-r>s)return!0;if(r=o+1,i-r<=s)return!1}return!0}function st(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:s}=e,i=e.options.doubleQuotedMinMultiLineLength,o=e.indent||(Ft(n)?"  ":"");let r="",a=0;for(let c=0,l=t[c];l;l=t[++c])if(l===" "&&t[c+1]==="\\"&&t[c+2]==="n"&&(r+=t.slice(a,c)+"\\ ",c+=1,a=c,l="\\"),l==="\\")switch(t[c+1]){case"u":{r+=t.slice(a,c);const u=t.substr(c+2,4);switch(u){case"0000":r+="\\0";break;case"0007":r+="\\a";break;case"000b":r+="\\v";break;case"001b":r+="\\e";break;case"0085":r+="\\N";break;case"00a0":r+="\\_";break;case"2028":r+="\\L";break;case"2029":r+="\\P";break;default:u.substr(0,2)==="00"?r+="\\x"+u.substr(2):r+=t.substr(c,6)}c+=5,a=c+1}break;case"n":if(s||t[c+2]==='"'||t.length<i)c+=1;else{for(r+=t.slice(a,c)+`

`;t[c+2]==="\\"&&t[c+3]==="n"&&t[c+4]!=='"';)r+=`
`,c+=2;r+=o,t[c+2]===" "&&(r+="\\"),c+=1,a=c+1}break;default:c+=1}return r=a?r+t.slice(a):t,s?r:Pt(r,o,St,Bt(e,!1))}function sn(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return st(n,e);const t=e.indent||(Ft(n)?"  ":""),s="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?s:Pt(s,t,ys,Bt(e,!1))}function Re(n,e){const{singleQuote:t}=e.options;let s;if(t===!1)s=st;else{const i=n.includes('"'),o=n.includes("'");i&&!o?s=sn:o&&!i?s=st:s=t?sn:st}return s(n,e)}let on;try{on=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{on=/\n+(?!\n|$)/g}function Nt({comment:n,type:e,value:t},s,i,o){const{blockQuote:r,commentString:a,lineWidth:c}=s.options;if(!r||/\n[\t ]+$/.test(t))return Re(t,s);const l=s.indent||(s.forceBlockIndent||Ft(t)?"  ":""),u=r==="literal"?!0:r==="folded"||e===L.BLOCK_FOLDED?!1:e===L.BLOCK_LITERAL?!0:!Ki(t,c,l.length);if(!t)return u?`|
`:`>
`;let f,m;for(m=t.length;m>0;--m){const I=t[m-1];if(I!==`
`&&I!=="	"&&I!==" ")break}let h=t.substring(m);const y=h.indexOf(`
`);y===-1?f="-":t===h||y!==h.length-1?(f="+",o&&o()):f="",h&&(t=t.slice(0,-h.length),h[h.length-1]===`
`&&(h=h.slice(0,-1)),h=h.replace(on,`$&${l}`));let d=!1,g,_=-1;for(g=0;g<t.length;++g){const I=t[g];if(I===" ")d=!0;else if(I===`
`)_=g;else break}let S=t.substring(0,_<g?_+1:g);S&&(t=t.substring(S.length),S=S.replace(/\n+/g,`$&${l}`));let N=(d?l?"2":"1":"")+f;if(n&&(N+=" "+a(n.replace(/ ?[\r\n]+/g," ")),i&&i()),!u){const I=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`);let $=!1;const w=Bt(s,!0);r!=="folded"&&e!==L.BLOCK_FOLDED&&(w.onOverflow=()=>{$=!0});const p=Pt(`${S}${I}${h}`,l,nn,w);if(!$)return`>${N}
${l}${p}`}return t=t.replace(/\n+/g,`$&${l}`),`|${N}
${l}${S}${t}${h}`}function qi(n,e,t,s){const{type:i,value:o}=n,{actualString:r,implicitKey:a,indent:c,indentStep:l,inFlow:u}=e;if(a&&o.includes(`
`)||u&&/[[\]{},]/.test(o))return Re(o,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(o))return a||u||!o.includes(`
`)?Re(o,e):Nt(n,e,t,s);if(!a&&!u&&i!==L.PLAIN&&o.includes(`
`))return Nt(n,e,t,s);if(Ft(o)){if(c==="")return e.forceBlockIndent=!0,Nt(n,e,t,s);if(a&&c===l)return Re(o,e)}const f=o.replace(/\n+/g,`$&
${c}`);if(r){const m=d=>{var g;return d.default&&d.tag!=="tag:yaml.org,2002:str"&&((g=d.test)==null?void 0:g.test(f))},{compat:h,tags:y}=e.doc.schema;if(y.some(m)||h!=null&&h.some(m))return Re(o,e)}return a?f:Pt(f,c,ys,Bt(e,!1))}function hn(n,e,t,s){const{implicitKey:i,inFlow:o}=e,r=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:a}=n;a!==L.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(r.value)&&(a=L.QUOTE_DOUBLE);const c=u=>{switch(u){case L.BLOCK_FOLDED:case L.BLOCK_LITERAL:return i||o?Re(r.value,e):Nt(r,e,t,s);case L.QUOTE_DOUBLE:return st(r.value,e);case L.QUOTE_SINGLE:return sn(r.value,e);case L.PLAIN:return qi(r,e,t,s);default:return null}};let l=c(a);if(l===null){const{defaultKeyType:u,defaultStringType:f}=e.options,m=i&&u||f;if(l=c(m),l===null)throw new Error(`Unsupported default string type ${m}`)}return l}function _s(n,e){const t=Object.assign({blockQuote:!0,commentString:ji,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let s;switch(t.collectionStyle){case"block":s=!1;break;case"flow":s=!0;break;default:s=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:s,options:t}}function Ri(n,e){var i;if(e.tag){const o=n.filter(r=>r.tag===e.tag);if(o.length>0)return o.find(r=>r.format===e.format)??o[0]}let t,s;if(M(e)){s=e.value;let o=n.filter(r=>{var a;return(a=r.identify)==null?void 0:a.call(r,s)});if(o.length>1){const r=o.filter(a=>a.test);r.length>0&&(o=r)}t=o.find(r=>r.format===e.format)??o.find(r=>!r.format)}else s=e,t=n.find(o=>o.nodeClass&&s instanceof o.nodeClass);if(!t){const o=((i=s==null?void 0:s.constructor)==null?void 0:i.name)??(s===null?"null":typeof s);throw new Error(`Tag not resolved for ${o} value`)}return t}function Ui(n,e,{anchors:t,doc:s}){if(!s.directives)return"";const i=[],o=(M(n)||V(n))&&n.anchor;o&&hs(o)&&(t.add(o),i.push(`&${o}`));const r=n.tag??(e.default?null:e.tag);return r&&i.push(s.directives.tagString(r)),i.join(" ")}function Ye(n,e,t,s){var c;if(H(n))return n.toString(e,t,s);if(Ce(n)){if(e.doc.directives)return n.toString(e);if((c=e.resolvedAliases)!=null&&c.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let i;const o=Y(n)?n:e.doc.createNode(n,{onTagObj:l=>i=l});i??(i=Ri(e.doc.schema.tags,o));const r=Ui(o,i,e);r.length>0&&(e.indentAtStart=(e.indentAtStart??0)+r.length+1);const a=typeof i.stringify=="function"?i.stringify(o,e,t,s):M(o)?hn(o,e,t,s):o.toString(e,t,s);return r?M(o)||a[0]==="{"||a[0]==="["?`${r} ${a}`:`${r}
${e.indent}${a}`:a}function xi({key:n,value:e},t,s,i){const{allNullValues:o,doc:r,indent:a,indentStep:c,options:{commentString:l,indentSeq:u,simpleKeys:f}}=t;let m=Y(n)&&n.comment||null;if(f){if(m)throw new Error("With simple keys, key nodes cannot have comments");if(V(n)||!Y(n)&&typeof n=="object"){const w="With simple keys, collection cannot be used as a key value";throw new Error(w)}}let h=!f&&(!n||m&&e==null&&!t.inFlow||V(n)||(M(n)?n.type===L.BLOCK_FOLDED||n.type===L.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!h&&(f||!o),indent:a+c});let y=!1,d=!1,g=Ye(n,t,()=>y=!0,()=>d=!0);if(!h&&!t.inFlow&&g.length>1024){if(f)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");h=!0}if(t.inFlow){if(o||e==null)return y&&s&&s(),g===""?"?":h?`? ${g}`:g}else if(o&&!f||e==null&&h)return g=`? ${g}`,m&&!y?g+=Te(g,t.indent,l(m)):d&&i&&i(),g;y&&(m=null),h?(m&&(g+=Te(g,t.indent,l(m))),g=`? ${g}
${a}:`):(g=`${g}:`,m&&(g+=Te(g,t.indent,l(m))));let _,S,E;Y(e)?(_=!!e.spaceBefore,S=e.commentBefore,E=e.comment):(_=!1,S=null,E=null,e&&typeof e=="object"&&(e=r.createNode(e))),t.implicitKey=!1,!h&&!m&&M(e)&&(t.indentAtStart=g.length+1),d=!1,!u&&c.length>=2&&!t.inFlow&&!h&&ut(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let N=!1;const I=Ye(e,t,()=>N=!0,()=>d=!0);let $=" ";if(m||_||S){if($=_?`
`:"",S){const w=l(S);$+=`
${_e(w,t.indent)}`}I===""&&!t.inFlow?$===`
`&&E&&($=`

`):$+=`
${t.indent}`}else if(!h&&V(e)){const w=I[0],p=I.indexOf(`
`),k=p!==-1,O=t.inFlow??e.flow??e.items.length===0;if(k||!O){let R=!1;if(k&&(w==="&"||w==="!")){let P=I.indexOf(" ");w==="&"&&P!==-1&&P<p&&I[P+1]==="!"&&(P=I.indexOf(" ",P+1)),(P===-1||p<P)&&(R=!0)}R||($=`
${t.indent}`)}}else(I===""||I[0]===`
`)&&($="");return g+=$+I,t.inFlow?N&&s&&s():E&&!N?g+=Te(g,t.indent,l(E)):d&&i&&i(),g}function bs(n,e){(n==="debug"||n==="warn")&&console.warn(e)}const mt="<<",be={identify:n=>n===mt||typeof n=="symbol"&&n.description===mt,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new L(Symbol(mt)),{addToJSMap:ws}),stringify:()=>mt},Vi=(n,e)=>(be.identify(e)||M(e)&&(!e.type||e.type===L.PLAIN)&&be.identify(e.value))&&(n==null?void 0:n.doc.schema.tags.some(t=>t.tag===be.tag&&t.default));function ws(n,e,t){if(t=n&&Ce(t)?t.resolve(n.doc):t,ut(t))for(const s of t.items)Yt(n,e,s);else if(Array.isArray(t))for(const s of t)Yt(n,e,s);else Yt(n,e,t)}function Yt(n,e,t){const s=n&&Ce(t)?t.resolve(n.doc):t;if(!ft(s))throw new Error("Merge sources must be maps or map aliases");const i=s.toJSON(null,n,Map);for(const[o,r]of i)e instanceof Map?e.has(o)||e.set(o,r):e instanceof Set?e.add(o):Object.prototype.hasOwnProperty.call(e,o)||Object.defineProperty(e,o,{value:r,writable:!0,enumerable:!0,configurable:!0});return e}function vs(n,e,{key:t,value:s}){if(Y(t)&&t.addToJSMap)t.addToJSMap(n,e,s);else if(Vi(n,t))ws(n,e,s);else{const i=fe(t,"",n);if(e instanceof Map)e.set(i,fe(s,i,n));else if(e instanceof Set)e.add(i);else{const o=Yi(t,i,n),r=fe(s,o,n);o in e?Object.defineProperty(e,o,{value:r,writable:!0,enumerable:!0,configurable:!0}):e[o]=r}}return e}function Yi(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(Y(n)&&(t!=null&&t.doc)){const s=_s(t.doc,{});s.anchors=new Set;for(const o of t.anchors.keys())s.anchors.add(o.anchor);s.inFlow=!0,s.inStringifyKey=!0;const i=n.toString(s);if(!t.mapKeyWarned){let o=JSON.stringify(i);o.length>40&&(o=o.substring(0,36)+'..."'),bs(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${o}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return i}return JSON.stringify(e)}function dn(n,e,t){const s=rt(n,void 0,t),i=rt(e,void 0,t);return new ne(s,i)}class ne{constructor(e,t=null){Object.defineProperty(this,ue,{value:fs}),this.key=e,this.value=t}clone(e){let{key:t,value:s}=this;return Y(t)&&(t=t.clone(e)),Y(s)&&(s=s.clone(e)),new ne(t,s)}toJSON(e,t){const s=t!=null&&t.mapAsMap?new Map:{};return vs(t,s,this)}toString(e,t,s){return e!=null&&e.doc?xi(this,e,t,s):JSON.stringify(this)}}function ks(n,e,t){return(e.inFlow??n.flow?Hi:Gi)(n,e,t)}function Gi({comment:n,items:e},t,{blockItemPrefix:s,flowChars:i,itemIndent:o,onChompKeep:r,onComment:a}){const{indent:c,options:{commentString:l}}=t,u=Object.assign({},t,{indent:o,type:null});let f=!1;const m=[];for(let y=0;y<e.length;++y){const d=e[y];let g=null;if(Y(d))!f&&d.spaceBefore&&m.push(""),Ot(t,m,d.commentBefore,f),d.comment&&(g=d.comment);else if(H(d)){const S=Y(d.key)?d.key:null;S&&(!f&&S.spaceBefore&&m.push(""),Ot(t,m,S.commentBefore,f))}f=!1;let _=Ye(d,u,()=>g=null,()=>f=!0);g&&(_+=Te(_,o,l(g))),f&&g&&(f=!1),m.push(s+_)}let h;if(m.length===0)h=i.start+i.end;else{h=m[0];for(let y=1;y<m.length;++y){const d=m[y];h+=d?`
${c}${d}`:`
`}}return n?(h+=`
`+_e(l(n),c),a&&a()):f&&r&&r(),h}function Hi({items:n},e,{flowChars:t,itemIndent:s}){const{indent:i,indentStep:o,flowCollectionPadding:r,options:{commentString:a}}=e;s+=o;const c=Object.assign({},e,{indent:s,inFlow:!0,type:null});let l=!1,u=0;const f=[];for(let y=0;y<n.length;++y){const d=n[y];let g=null;if(Y(d))d.spaceBefore&&f.push(""),Ot(e,f,d.commentBefore,!1),d.comment&&(g=d.comment);else if(H(d)){const S=Y(d.key)?d.key:null;S&&(S.spaceBefore&&f.push(""),Ot(e,f,S.commentBefore,!1),S.comment&&(l=!0));const E=Y(d.value)?d.value:null;E?(E.comment&&(g=E.comment),E.commentBefore&&(l=!0)):d.value==null&&(S!=null&&S.comment)&&(g=S.comment)}g&&(l=!0);let _=Ye(d,c,()=>g=null);y<n.length-1&&(_+=","),g&&(_+=Te(_,s,a(g))),!l&&(f.length>u||_.includes(`
`))&&(l=!0),f.push(_),u=f.length}const{start:m,end:h}=t;if(f.length===0)return m+h;if(!l){const y=f.reduce((d,g)=>d+g.length+2,2);l=e.options.lineWidth>0&&y>e.options.lineWidth}if(l){let y=m;for(const d of f)y+=d?`
${o}${i}${d}`:`
`;return`${y}
${i}${h}`}else return`${m}${r}${f.join(" ")}${r}${h}`}function Ot({indent:n,options:{commentString:e}},t,s,i){if(s&&i&&(s=s.replace(/^\n+/,"")),s){const o=_e(e(s),n);t.push(o.trimStart())}}function Oe(n,e){const t=M(e)?e.value:e;for(const s of n)if(H(s)&&(s.key===e||s.key===t||M(s.key)&&s.key.value===t))return s}class le extends ps{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(ke,e),this.items=[]}static from(e,t,s){const{keepUndefined:i,replacer:o}=s,r=new this(e),a=(c,l)=>{if(typeof o=="function")l=o.call(t,c,l);else if(Array.isArray(o)&&!o.includes(c))return;(l!==void 0||i)&&r.items.push(dn(c,l,s))};if(t instanceof Map)for(const[c,l]of t)a(c,l);else if(t&&typeof t=="object")for(const c of Object.keys(t))a(c,t[c]);return typeof e.sortMapEntries=="function"&&r.items.sort(e.sortMapEntries),r}add(e,t){var r;let s;H(e)?s=e:!e||typeof e!="object"||!("key"in e)?s=new ne(e,e==null?void 0:e.value):s=new ne(e.key,e.value);const i=Oe(this.items,s.key),o=(r=this.schema)==null?void 0:r.sortMapEntries;if(i){if(!t)throw new Error(`Key ${s.key} already set`);M(i.value)&&gs(s.value)?i.value.value=s.value:i.value=s.value}else if(o){const a=this.items.findIndex(c=>o(s,c)<0);a===-1?this.items.push(s):this.items.splice(a,0,s)}else this.items.push(s)}delete(e){const t=Oe(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const s=Oe(this.items,e),i=s==null?void 0:s.value;return(!t&&M(i)?i.value:i)??void 0}has(e){return!!Oe(this.items,e)}set(e,t){this.add(new ne(e,t),!0)}toJSON(e,t,s){const i=s?new s:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(i);for(const o of this.items)vs(t,i,o);return i}toString(e,t,s){if(!e)return JSON.stringify(this);for(const i of this.items)if(!H(i))throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),ks(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:s,onComment:t})}}const ze={collection:"map",default:!0,nodeClass:le,tag:"tag:yaml.org,2002:map",resolve(n,e){return ft(n)||e("Expected a mapping for this tag"),n},createNode:(n,e,t)=>le.from(n,e,t)};class $e extends ps{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(He,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=gt(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const s=gt(e);if(typeof s!="number")return;const i=this.items[s];return!t&&M(i)?i.value:i}has(e){const t=gt(e);return typeof t=="number"&&t<this.items.length}set(e,t){const s=gt(e);if(typeof s!="number")throw new Error(`Expected a valid index, not ${e}.`);const i=this.items[s];M(i)&&gs(t)?i.value=t:this.items[s]=t}toJSON(e,t){const s=[];t!=null&&t.onCreate&&t.onCreate(s);let i=0;for(const o of this.items)s.push(fe(o,String(i++),t));return s}toString(e,t,s){return e?ks(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:s,onComment:t}):JSON.stringify(this)}static from(e,t,s){const{replacer:i}=s,o=new this(e);if(t&&Symbol.iterator in Object(t)){let r=0;for(let a of t){if(typeof i=="function"){const c=t instanceof Set?a:String(r++);a=i.call(t,c,a)}o.items.push(rt(a,void 0,s))}}return o}}function gt(n){let e=M(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const We={collection:"seq",default:!0,nodeClass:$e,tag:"tag:yaml.org,2002:seq",resolve(n,e){return ut(n)||e("Expected a sequence for this tag"),n},createNode:(n,e,t)=>$e.from(n,e,t)},jt={identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify(n,e,t,s){return e=Object.assign({actualString:!0},e),hn(n,e,t,s)}},Kt={identify:n=>n==null,createNode:()=>new L(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new L(null),stringify:({source:n},e)=>typeof n=="string"&&Kt.test.test(n)?n:e.options.nullStr},mn={identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:n=>new L(n[0]==="t"||n[0]==="T"),stringify({source:n,value:e},t){if(n&&mn.test.test(n)){const s=n[0]==="t"||n[0]==="T";if(e===s)return n}return e?t.options.trueStr:t.options.falseStr}};function me({format:n,minFractionDigits:e,tag:t,value:s}){if(typeof s=="bigint")return String(s);const i=typeof s=="number"?s:Number(s);if(!isFinite(i))return isNaN(i)?".nan":i<0?"-.inf":".inf";let o=Object.is(s,-0)?"-0":JSON.stringify(s);if(!n&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^\d/.test(o)){let r=o.indexOf(".");r<0&&(r=o.length,o+=".");let a=e-(o.length-r-1);for(;a-- >0;)o+="0"}return o}const Ss={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:me},Ns={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():me(n)}},Is={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(n){const e=new L(parseFloat(n)),t=n.indexOf(".");return t!==-1&&n[n.length-1]==="0"&&(e.minFractionDigits=n.length-t-1),e},stringify:me},qt=n=>typeof n=="bigint"||Number.isInteger(n),gn=(n,e,t,{intAsBigInt:s})=>s?BigInt(n):parseInt(n.substring(e),t);function Es(n,e,t){const{value:s}=n;return qt(s)&&s>=0?t+s.toString(e):me(n)}const Ts={identify:n=>qt(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(n,e,t)=>gn(n,2,8,t),stringify:n=>Es(n,8,"0o")},Os={identify:qt,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(n,e,t)=>gn(n,0,10,t),stringify:me},As={identify:n=>qt(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(n,e,t)=>gn(n,2,16,t),stringify:n=>Es(n,16,"0x")},Ji=[ze,We,jt,Kt,mn,Ts,Os,As,Ss,Ns,Is];function Cn(n){return typeof n=="bigint"||Number.isInteger(n)}const pt=({value:n})=>JSON.stringify(n),zi=[{identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify:pt},{identify:n=>n==null,createNode:()=>new L(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:pt},{identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:n=>n==="true",stringify:pt},{identify:Cn,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(n,e,{intAsBigInt:t})=>t?BigInt(n):parseInt(n,10),stringify:({value:n})=>Cn(n)?n.toString():JSON.stringify(n)},{identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:n=>parseFloat(n),stringify:pt}],Wi={default:!0,tag:"",test:/^/,resolve(n,e){return e(`Unresolved plain scalar ${JSON.stringify(n)}`),n}},Qi=[ze,We].concat(zi,Wi),pn={identify:n=>n instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(n,e){if(typeof atob=="function"){const t=atob(n.replace(/[\n\r]/g,"")),s=new Uint8Array(t.length);for(let i=0;i<t.length;++i)s[i]=t.charCodeAt(i);return s}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),n},stringify({comment:n,type:e,value:t},s,i,o){if(!t)return"";const r=t;let a;if(typeof btoa=="function"){let c="";for(let l=0;l<r.length;++l)c+=String.fromCharCode(r[l]);a=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=L.BLOCK_LITERAL),e!==L.QUOTE_DOUBLE){const c=Math.max(s.options.lineWidth-s.indent.length,s.options.minContentWidth),l=Math.ceil(a.length/c),u=new Array(l);for(let f=0,m=0;f<l;++f,m+=c)u[f]=a.substr(m,c);a=u.join(e===L.BLOCK_LITERAL?`
`:" ")}return hn({comment:n,type:e,value:a},s,i,o)}};function $s(n,e){if(ut(n))for(let t=0;t<n.items.length;++t){let s=n.items[t];if(!H(s)){if(ft(s)){s.items.length>1&&e("Each pair must have its own sequence indicator");const i=s.items[0]||new ne(new L(null));if(s.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${s.commentBefore}
${i.key.commentBefore}`:s.commentBefore),s.comment){const o=i.value??i.key;o.comment=o.comment?`${s.comment}
${o.comment}`:s.comment}s=i}n.items[t]=H(s)?s:new ne(s)}}else e("Expected a sequence for this tag");return n}function Ls(n,e,t){const{replacer:s}=t,i=new $e(n);i.tag="tag:yaml.org,2002:pairs";let o=0;if(e&&Symbol.iterator in Object(e))for(let r of e){typeof s=="function"&&(r=s.call(e,String(o++),r));let a,c;if(Array.isArray(r))if(r.length===2)a=r[0],c=r[1];else throw new TypeError(`Expected [key, value] tuple: ${r}`);else if(r&&r instanceof Object){const l=Object.keys(r);if(l.length===1)a=l[0],c=r[a];else throw new TypeError(`Expected tuple with one key, not ${l.length} keys`)}else a=r;i.items.push(dn(a,c,t))}return i}const yn={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:$s,createNode:Ls};class xe extends $e{constructor(){super(),this.add=le.prototype.add.bind(this),this.delete=le.prototype.delete.bind(this),this.get=le.prototype.get.bind(this),this.has=le.prototype.has.bind(this),this.set=le.prototype.set.bind(this),this.tag=xe.tag}toJSON(e,t){if(!t)return super.toJSON(e);const s=new Map;t!=null&&t.onCreate&&t.onCreate(s);for(const i of this.items){let o,r;if(H(i)?(o=fe(i.key,"",t),r=fe(i.value,o,t)):o=fe(i,"",t),s.has(o))throw new Error("Ordered maps must not include duplicate keys");s.set(o,r)}return s}static from(e,t,s){const i=Ls(e,t,s),o=new this;return o.items=i.items,o}}xe.tag="tag:yaml.org,2002:omap";const _n={collection:"seq",identify:n=>n instanceof Map,nodeClass:xe,default:!1,tag:"tag:yaml.org,2002:omap",resolve(n,e){const t=$s(n,e),s=[];for(const{key:i}of t.items)M(i)&&(s.includes(i.value)?e(`Ordered maps must not include duplicate keys: ${i.value}`):s.push(i.value));return Object.assign(new xe,t)},createNode:(n,e,t)=>xe.from(n,e,t)};function Cs({value:n,source:e},t){return e&&(n?Ds:Ms).test.test(e)?e:n?t.options.trueStr:t.options.falseStr}const Ds={identify:n=>n===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new L(!0),stringify:Cs},Ms={identify:n=>n===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new L(!1),stringify:Cs},Xi={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:me},Zi={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n.replace(/_/g,"")),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():me(n)}},eo={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(n){const e=new L(parseFloat(n.replace(/_/g,""))),t=n.indexOf(".");if(t!==-1){const s=n.substring(t+1).replace(/_/g,"");s[s.length-1]==="0"&&(e.minFractionDigits=s.length)}return e},stringify:me},ht=n=>typeof n=="bigint"||Number.isInteger(n);function Rt(n,e,t,{intAsBigInt:s}){const i=n[0];if((i==="-"||i==="+")&&(e+=1),n=n.substring(e).replace(/_/g,""),s){switch(t){case 2:n=`0b${n}`;break;case 8:n=`0o${n}`;break;case 16:n=`0x${n}`;break}const r=BigInt(n);return i==="-"?BigInt(-1)*r:r}const o=parseInt(n,t);return i==="-"?-1*o:o}function bn(n,e,t){const{value:s}=n;if(ht(s)){const i=s.toString(e);return s<0?"-"+t+i.substr(1):t+i}return me(n)}const to={identify:ht,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(n,e,t)=>Rt(n,2,2,t),stringify:n=>bn(n,2,"0b")},no={identify:ht,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(n,e,t)=>Rt(n,1,8,t),stringify:n=>bn(n,8,"0")},so={identify:ht,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(n,e,t)=>Rt(n,0,10,t),stringify:me},io={identify:ht,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(n,e,t)=>Rt(n,2,16,t),stringify:n=>bn(n,16,"0x")};class Ve extends le{constructor(e){super(e),this.tag=Ve.tag}add(e){let t;H(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new ne(e.key,null):t=new ne(e,null),Oe(this.items,t.key)||this.items.push(t)}get(e,t){const s=Oe(this.items,e);return!t&&H(s)?M(s.key)?s.key.value:s.key:s}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const s=Oe(this.items,e);s&&!t?this.items.splice(this.items.indexOf(s),1):!s&&t&&this.items.push(new ne(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,s){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,s);throw new Error("Set items must all have null values")}static from(e,t,s){const{replacer:i}=s,o=new this(e);if(t&&Symbol.iterator in Object(t))for(let r of t)typeof i=="function"&&(r=i.call(t,r,r)),o.items.push(dn(r,null,s));return o}}Ve.tag="tag:yaml.org,2002:set";const wn={collection:"map",identify:n=>n instanceof Set,nodeClass:Ve,default:!1,tag:"tag:yaml.org,2002:set",createNode:(n,e,t)=>Ve.from(n,e,t),resolve(n,e){if(ft(n)){if(n.hasAllNullValues(!0))return Object.assign(new Ve,n);e("Set items must all have null values")}else e("Expected a mapping for this tag");return n}};function vn(n,e){const t=n[0],s=t==="-"||t==="+"?n.substring(1):n,i=r=>e?BigInt(r):Number(r),o=s.replace(/_/g,"").split(":").reduce((r,a)=>r*i(60)+i(a),i(0));return t==="-"?i(-1)*o:o}function Ps(n){let{value:e}=n,t=r=>r;if(typeof e=="bigint")t=r=>BigInt(r);else if(isNaN(e)||!isFinite(e))return me(n);let s="";e<0&&(s="-",e*=t(-1));const i=t(60),o=[e%i];return e<60?o.unshift(0):(e=(e-o[0])/i,o.unshift(e%i),e>=60&&(e=(e-o[0])/i,o.unshift(e))),s+o.map(r=>String(r).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Bs={identify:n=>typeof n=="bigint"||Number.isInteger(n),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(n,e,{intAsBigInt:t})=>vn(n,t),stringify:Ps},Fs={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:n=>vn(n,!1),stringify:Ps},Ut={identify:n=>n instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(n){const e=n.match(Ut.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,s,i,o,r,a]=e.map(Number),c=e[7]?Number((e[7]+"00").substr(1,3)):0;let l=Date.UTC(t,s-1,i,o||0,r||0,a||0,c);const u=e[8];if(u&&u!=="Z"){let f=vn(u,!1);Math.abs(f)<30&&(f*=60),l-=6e4*f}return new Date(l)},stringify:({value:n})=>(n==null?void 0:n.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},Dn=[ze,We,jt,Kt,Ds,Ms,to,no,so,io,Xi,Zi,eo,pn,be,_n,yn,wn,Bs,Fs,Ut],Mn=new Map([["core",Ji],["failsafe",[ze,We,jt]],["json",Qi],["yaml11",Dn],["yaml-1.1",Dn]]),Pn={binary:pn,bool:mn,float:Is,floatExp:Ns,floatNaN:Ss,floatTime:Fs,int:Os,intHex:As,intOct:Ts,intTime:Bs,map:ze,merge:be,null:Kt,omap:_n,pairs:yn,seq:We,set:wn,timestamp:Ut},oo={"tag:yaml.org,2002:binary":pn,"tag:yaml.org,2002:merge":be,"tag:yaml.org,2002:omap":_n,"tag:yaml.org,2002:pairs":yn,"tag:yaml.org,2002:set":wn,"tag:yaml.org,2002:timestamp":Ut};function Gt(n,e,t){const s=Mn.get(e);if(s&&!n)return t&&!s.includes(be)?s.concat(be):s.slice();let i=s;if(!i)if(Array.isArray(n))i=[];else{const o=Array.from(Mn.keys()).filter(r=>r!=="yaml11").map(r=>JSON.stringify(r)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${o} or define customTags array`)}if(Array.isArray(n))for(const o of n)i=i.concat(o);else typeof n=="function"&&(i=n(i.slice()));return t&&(i=i.concat(be)),i.reduce((o,r)=>{const a=typeof r=="string"?Pn[r]:r;if(!a){const c=JSON.stringify(r),l=Object.keys(Pn).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${c}; use one of ${l}`)}return o.includes(a)||o.push(a),o},[])}const ro=(n,e)=>n.key<e.key?-1:n.key>e.key?1:0;class kn{constructor({compat:e,customTags:t,merge:s,resolveKnownTags:i,schema:o,sortMapEntries:r,toStringDefaults:a}){this.compat=Array.isArray(e)?Gt(e,"compat"):e?Gt(null,e):null,this.name=typeof o=="string"&&o||"core",this.knownTags=i?oo:{},this.tags=Gt(t,this.name,s),this.toStringOptions=a??null,Object.defineProperty(this,ke,{value:ze}),Object.defineProperty(this,ge,{value:jt}),Object.defineProperty(this,He,{value:We}),this.sortMapEntries=typeof r=="function"?r:r===!0?ro:null}clone(){const e=Object.create(kn.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function ao(n,e){var c;const t=[];let s=e.directives===!0;if(e.directives!==!1&&n.directives){const l=n.directives.toString(n);l?(t.push(l),s=!0):n.directives.docStart&&(s=!0)}s&&t.push("---");const i=_s(n,e),{commentString:o}=i.options;if(n.commentBefore){t.length!==1&&t.unshift("");const l=o(n.commentBefore);t.unshift(_e(l,""))}let r=!1,a=null;if(n.contents){if(Y(n.contents)){if(n.contents.spaceBefore&&s&&t.push(""),n.contents.commentBefore){const f=o(n.contents.commentBefore);t.push(_e(f,""))}i.forceBlockIndent=!!n.comment,a=n.contents.comment}const l=a?void 0:()=>r=!0;let u=Ye(n.contents,i,()=>a=null,l);a&&(u+=Te(u,"",o(a))),(u[0]==="|"||u[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${u}`:t.push(u)}else t.push(Ye(n.contents,i));if((c=n.directives)!=null&&c.docEnd)if(n.comment){const l=o(n.comment);l.includes(`
`)?(t.push("..."),t.push(_e(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=n.comment;l&&r&&(l=l.replace(/^\n+/,"")),l&&((!r||a)&&t[t.length-1]!==""&&t.push(""),t.push(_e(o(l),"")))}return t.join(`
`)+`
`}class xt{constructor(e,t,s){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,ue,{value:tn});let i=null;typeof t=="function"||Array.isArray(t)?i=t:s===void 0&&t&&(s=t,t=void 0);const o=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},s);this.options=o;let{version:r}=o;s!=null&&s._directives?(this.directives=s._directives.atDocument(),this.directives.yaml.explicit&&(r=this.directives.yaml.version)):this.directives=new ee({version:r}),this.setSchema(r,s),this.contents=e===void 0?null:this.createNode(e,i,s)}clone(){const e=Object.create(xt.prototype,{[ue]:{value:tn}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=Y(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){Pe(this.contents)&&this.contents.add(e)}addIn(e,t){Pe(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const s=ds(this);e.anchor=!t||s.has(t)?ms(t||"a",s):t}return new un(e.anchor)}createNode(e,t,s){let i;if(typeof t=="function")e=t.call({"":e},"",e),i=t;else if(Array.isArray(t)){const g=S=>typeof S=="number"||S instanceof String||S instanceof Number,_=t.filter(g).map(String);_.length>0&&(t=t.concat(_)),i=t}else s===void 0&&t&&(s=t,t=void 0);const{aliasDuplicateObjects:o,anchorPrefix:r,flow:a,keepUndefined:c,onTagObj:l,tag:u}=s??{},{onAnchor:f,setAnchors:m,sourceObjects:h}=Pi(this,r||"a"),y={aliasDuplicateObjects:o??!0,keepUndefined:c??!1,onAnchor:f,onTagObj:l,replacer:i,schema:this.schema,sourceObjects:h},d=rt(e,u,y);return a&&V(d)&&(d.flow=!0),m(),d}createPair(e,t,s={}){const i=this.createNode(e,null,s),o=this.createNode(t,null,s);return new ne(i,o)}delete(e){return Pe(this.contents)?this.contents.delete(e):!1}deleteIn(e){return Ze(e)?this.contents==null?!1:(this.contents=null,!0):Pe(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return V(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return Ze(e)?!t&&M(this.contents)?this.contents.value:this.contents:V(this.contents)?this.contents.getIn(e,t):void 0}has(e){return V(this.contents)?this.contents.has(e):!1}hasIn(e){return Ze(e)?this.contents!==void 0:V(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Tt(this.schema,[e],t):Pe(this.contents)&&this.contents.set(e,t)}setIn(e,t){Ze(e)?this.contents=t:this.contents==null?this.contents=Tt(this.schema,Array.from(e),t):Pe(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let s;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new ee({version:"1.1"}),s={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new ee({version:e}),s={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,s=null;break;default:{const i=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(s)this.schema=new kn(Object.assign(s,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:s,maxAliasCount:i,onAnchor:o,reviver:r}={}){const a={anchors:new Map,doc:this,keep:!e,mapAsMap:s===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},c=fe(this.contents,t??"",a);if(typeof o=="function")for(const{count:l,res:u}of a.anchors.values())o(u,l);return typeof r=="function"?qe(r,{"":c},"",c):c}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return ao(this,e)}}function Pe(n){if(V(n))return!0;throw new Error("Expected a YAML collection as document contents")}class js extends Error{constructor(e,t,s,i){super(),this.name=e,this.code=s,this.message=i,this.pos=t}}class et extends js{constructor(e,t,s){super("YAMLParseError",e,t,s)}}class lo extends js{constructor(e,t,s){super("YAMLWarning",e,t,s)}}const Bn=(n,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(a=>e.linePos(a));const{line:s,col:i}=t.linePos[0];t.message+=` at line ${s}, column ${i}`;let o=i-1,r=n.substring(e.lineStarts[s-1],e.lineStarts[s]).replace(/[\n\r]+$/,"");if(o>=60&&r.length>80){const a=Math.min(o-39,r.length-79);r="…"+r.substring(a),o-=a-1}if(r.length>80&&(r=r.substring(0,79)+"…"),s>1&&/^ *$/.test(r.substring(0,o))){let a=n.substring(e.lineStarts[s-2],e.lineStarts[s-1]);a.length>80&&(a=a.substring(0,79)+`…
`),r=a+r}if(/[^ ]/.test(r)){let a=1;const c=t.linePos[1];(c==null?void 0:c.line)===s&&c.col>i&&(a=Math.max(1,Math.min(c.col-i,80-o)));const l=" ".repeat(o)+"^".repeat(a);t.message+=`:

${r}
${l}
`}};function Ge(n,{flow:e,indicator:t,next:s,offset:i,onError:o,parentIndent:r,startOnNewline:a}){let c=!1,l=a,u=a,f="",m="",h=!1,y=!1,d=null,g=null,_=null,S=null,E=null,N=null,I=null;for(const p of n)switch(y&&(p.type!=="space"&&p.type!=="newline"&&p.type!=="comma"&&o(p.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),y=!1),d&&(l&&p.type!=="comment"&&p.type!=="newline"&&o(d,"TAB_AS_INDENT","Tabs are not allowed as indentation"),d=null),p.type){case"space":!e&&(t!=="doc-start"||(s==null?void 0:s.type)!=="flow-collection")&&p.source.includes("	")&&(d=p),u=!0;break;case"comment":{u||o(p,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const k=p.source.substring(1)||" ";f?f+=m+k:f=k,m="",l=!1;break}case"newline":l?f?f+=p.source:(!N||t!=="seq-item-ind")&&(c=!0):m+=p.source,l=!0,h=!0,(g||_)&&(S=p),u=!0;break;case"anchor":g&&o(p,"MULTIPLE_ANCHORS","A node can have at most one anchor"),p.source.endsWith(":")&&o(p.offset+p.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),g=p,I??(I=p.offset),l=!1,u=!1,y=!0;break;case"tag":{_&&o(p,"MULTIPLE_TAGS","A node can have at most one tag"),_=p,I??(I=p.offset),l=!1,u=!1,y=!0;break}case t:(g||_)&&o(p,"BAD_PROP_ORDER",`Anchors and tags must be after the ${p.source} indicator`),N&&o(p,"UNEXPECTED_TOKEN",`Unexpected ${p.source} in ${e??"collection"}`),N=p,l=t==="seq-item-ind"||t==="explicit-key-ind",u=!1;break;case"comma":if(e){E&&o(p,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),E=p,l=!1,u=!1;break}default:o(p,"UNEXPECTED_TOKEN",`Unexpected ${p.type} token`),l=!1,u=!1}const $=n[n.length-1],w=$?$.offset+$.source.length:i;return y&&s&&s.type!=="space"&&s.type!=="newline"&&s.type!=="comma"&&(s.type!=="scalar"||s.source!=="")&&o(s.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),d&&(l&&d.indent<=r||(s==null?void 0:s.type)==="block-map"||(s==null?void 0:s.type)==="block-seq")&&o(d,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:E,found:N,spaceBefore:c,comment:f,hasNewline:h,anchor:g,tag:_,newlineAfterProp:S,end:w,start:I??w}}function at(n){if(!n)return null;switch(n.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(n.source.includes(`
`))return!0;if(n.end){for(const e of n.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of n.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(at(e.key)||at(e.value))return!0}return!1;default:return!0}}function rn(n,e,t){if((e==null?void 0:e.type)==="flow-collection"){const s=e.end[0];s.indent===n&&(s.source==="]"||s.source==="}")&&at(e)&&t(s,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Ks(n,e,t){const{uniqueKeys:s}=n.options;if(s===!1)return!1;const i=typeof s=="function"?s:(o,r)=>o===r||M(o)&&M(r)&&o.value===r.value;return e.some(o=>i(o.key,t))}const Fn="All mapping items must start at the same column";function co({composeNode:n,composeEmptyNode:e},t,s,i,o){var u;const r=(o==null?void 0:o.nodeClass)??le,a=new r(t.schema);t.atRoot&&(t.atRoot=!1);let c=s.offset,l=null;for(const f of s.items){const{start:m,key:h,sep:y,value:d}=f,g=Ge(m,{indicator:"explicit-key-ind",next:h??(y==null?void 0:y[0]),offset:c,onError:i,parentIndent:s.indent,startOnNewline:!0}),_=!g.found;if(_){if(h&&(h.type==="block-seq"?i(c,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in h&&h.indent!==s.indent&&i(c,"BAD_INDENT",Fn)),!g.anchor&&!g.tag&&!y){l=g.end,g.comment&&(a.comment?a.comment+=`
`+g.comment:a.comment=g.comment);continue}(g.newlineAfterProp||at(h))&&i(h??m[m.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=g.found)==null?void 0:u.indent)!==s.indent&&i(c,"BAD_INDENT",Fn);t.atKey=!0;const S=g.end,E=h?n(t,h,g,i):e(t,S,m,null,g,i);t.schema.compat&&rn(s.indent,h,i),t.atKey=!1,Ks(t,a.items,E)&&i(S,"DUPLICATE_KEY","Map keys must be unique");const N=Ge(y??[],{indicator:"map-value-ind",next:d,offset:E.range[2],onError:i,parentIndent:s.indent,startOnNewline:!h||h.type==="block-scalar"});if(c=N.end,N.found){_&&((d==null?void 0:d.type)==="block-map"&&!N.hasNewline&&i(c,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&g.start<N.found.offset-1024&&i(E.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const I=d?n(t,d,N,i):e(t,c,y,null,N,i);t.schema.compat&&rn(s.indent,d,i),c=I.range[2];const $=new ne(E,I);t.options.keepSourceTokens&&($.srcToken=f),a.items.push($)}else{_&&i(E.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),N.comment&&(E.comment?E.comment+=`
`+N.comment:E.comment=N.comment);const I=new ne(E);t.options.keepSourceTokens&&(I.srcToken=f),a.items.push(I)}}return l&&l<c&&i(l,"IMPOSSIBLE","Map comment with trailing content"),a.range=[s.offset,c,l??c],a}function fo({composeNode:n,composeEmptyNode:e},t,s,i,o){const r=(o==null?void 0:o.nodeClass)??$e,a=new r(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let c=s.offset,l=null;for(const{start:u,value:f}of s.items){const m=Ge(u,{indicator:"seq-item-ind",next:f,offset:c,onError:i,parentIndent:s.indent,startOnNewline:!0});if(!m.found)if(m.anchor||m.tag||f)(f==null?void 0:f.type)==="block-seq"?i(m.end,"BAD_INDENT","All sequence items must start at the same column"):i(c,"MISSING_CHAR","Sequence item without - indicator");else{l=m.end,m.comment&&(a.comment=m.comment);continue}const h=f?n(t,f,m,i):e(t,m.end,u,null,m,i);t.schema.compat&&rn(s.indent,f,i),c=h.range[2],a.items.push(h)}return a.range=[s.offset,c,l??c],a}function dt(n,e,t,s){let i="";if(n){let o=!1,r="";for(const a of n){const{source:c,type:l}=a;switch(l){case"space":o=!0;break;case"comment":{t&&!o&&s(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=c.substring(1)||" ";i?i+=r+u:i=u,r="";break}case"newline":i&&(r+=c),o=!0;break;default:s(a,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}e+=c.length}}return{comment:i,offset:e}}const Ht="Block collections are not allowed within flow collections",Jt=n=>n&&(n.type==="block-map"||n.type==="block-seq");function uo({composeNode:n,composeEmptyNode:e},t,s,i,o){var g;const r=s.start.source==="{",a=r?"flow map":"flow sequence",c=(o==null?void 0:o.nodeClass)??(r?le:$e),l=new c(t.schema);l.flow=!0;const u=t.atRoot;u&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let f=s.offset+s.start.source.length;for(let _=0;_<s.items.length;++_){const S=s.items[_],{start:E,key:N,sep:I,value:$}=S,w=Ge(E,{flow:a,indicator:"explicit-key-ind",next:N??(I==null?void 0:I[0]),offset:f,onError:i,parentIndent:s.indent,startOnNewline:!1});if(!w.found){if(!w.anchor&&!w.tag&&!I&&!$){_===0&&w.comma?i(w.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):_<s.items.length-1&&i(w.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),w.comment&&(l.comment?l.comment+=`
`+w.comment:l.comment=w.comment),f=w.end;continue}!r&&t.options.strict&&at(N)&&i(N,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(_===0)w.comma&&i(w.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(w.comma||i(w.start,"MISSING_CHAR",`Missing , between ${a} items`),w.comment){let p="";e:for(const k of E)switch(k.type){case"comma":case"space":break;case"comment":p=k.source.substring(1);break e;default:break e}if(p){let k=l.items[l.items.length-1];H(k)&&(k=k.value??k.key),k.comment?k.comment+=`
`+p:k.comment=p,w.comment=w.comment.substring(p.length+1)}}if(!r&&!I&&!w.found){const p=$?n(t,$,w,i):e(t,w.end,I,null,w,i);l.items.push(p),f=p.range[2],Jt($)&&i(p.range,"BLOCK_IN_FLOW",Ht)}else{t.atKey=!0;const p=w.end,k=N?n(t,N,w,i):e(t,p,E,null,w,i);Jt(N)&&i(k.range,"BLOCK_IN_FLOW",Ht),t.atKey=!1;const O=Ge(I??[],{flow:a,indicator:"map-value-ind",next:$,offset:k.range[2],onError:i,parentIndent:s.indent,startOnNewline:!1});if(O.found){if(!r&&!w.found&&t.options.strict){if(I)for(const U of I){if(U===O.found)break;if(U.type==="newline"){i(U,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}w.start<O.found.offset-1024&&i(O.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else $&&("source"in $&&((g=$.source)==null?void 0:g[0])===":"?i($,"MISSING_CHAR",`Missing space after : in ${a}`):i(O.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const R=$?n(t,$,O,i):O.found?e(t,O.end,I,null,O,i):null;R?Jt($)&&i(R.range,"BLOCK_IN_FLOW",Ht):O.comment&&(k.comment?k.comment+=`
`+O.comment:k.comment=O.comment);const P=new ne(k,R);if(t.options.keepSourceTokens&&(P.srcToken=S),r){const U=l;Ks(t,U.items,k)&&i(p,"DUPLICATE_KEY","Map keys must be unique"),U.items.push(P)}else{const U=new le(t.schema);U.flow=!0,U.items.push(P);const se=(R??k).range;U.range=[k.range[0],se[1],se[2]],l.items.push(U)}f=R?R.range[2]:O.end}}const m=r?"}":"]",[h,...y]=s.end;let d=f;if((h==null?void 0:h.source)===m)d=h.offset+h.source.length;else{const _=a[0].toUpperCase()+a.substring(1),S=u?`${_} must end with a ${m}`:`${_} in block collection must be sufficiently indented and end with a ${m}`;i(f,u?"MISSING_CHAR":"BAD_INDENT",S),h&&h.source.length!==1&&y.unshift(h)}if(y.length>0){const _=dt(y,d,t.options.strict,i);_.comment&&(l.comment?l.comment+=`
`+_.comment:l.comment=_.comment),l.range=[s.offset,d,_.offset]}else l.range=[s.offset,d,d];return l}function zt(n,e,t,s,i,o){const r=t.type==="block-map"?co(n,e,t,s,o):t.type==="block-seq"?fo(n,e,t,s,o):uo(n,e,t,s,o),a=r.constructor;return i==="!"||i===a.tagName?(r.tag=a.tagName,r):(i&&(r.tag=i),r)}function ho(n,e,t,s,i){var m;const o=s.tag,r=o?e.directives.tagName(o.source,h=>i(o,"TAG_RESOLVE_FAILED",h)):null;if(t.type==="block-seq"){const{anchor:h,newlineAfterProp:y}=s,d=h&&o?h.offset>o.offset?h:o:h??o;d&&(!y||y.offset<d.offset)&&i(d,"MISSING_CHAR","Missing newline after block sequence props")}const a=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!o||!r||r==="!"||r===le.tagName&&a==="map"||r===$e.tagName&&a==="seq")return zt(n,e,t,i,r);let c=e.schema.tags.find(h=>h.tag===r&&h.collection===a);if(!c){const h=e.schema.knownTags[r];if((h==null?void 0:h.collection)===a)e.schema.tags.push(Object.assign({},h,{default:!1})),c=h;else return h?i(o,"BAD_COLLECTION_TYPE",`${h.tag} used for ${a} collection, but expects ${h.collection??"scalar"}`,!0):i(o,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,!0),zt(n,e,t,i,r)}const l=zt(n,e,t,i,r,c),u=((m=c.resolve)==null?void 0:m.call(c,l,h=>i(o,"TAG_RESOLVE_FAILED",h),e.options))??l,f=Y(u)?u:new L(u);return f.range=l.range,f.tag=r,c!=null&&c.format&&(f.format=c.format),f}function mo(n,e,t){const s=e.offset,i=go(e,n.options.strict,t);if(!i)return{value:"",type:null,comment:"",range:[s,s,s]};const o=i.mode===">"?L.BLOCK_FOLDED:L.BLOCK_LITERAL,r=e.source?po(e.source):[];let a=r.length;for(let d=r.length-1;d>=0;--d){const g=r[d][1];if(g===""||g==="\r")a=d;else break}if(a===0){const d=i.chomp==="+"&&r.length>0?`
`.repeat(Math.max(1,r.length-1)):"";let g=s+i.length;return e.source&&(g+=e.source.length),{value:d,type:o,comment:i.comment,range:[s,g,g]}}let c=e.indent+i.indent,l=e.offset+i.length,u=0;for(let d=0;d<a;++d){const[g,_]=r[d];if(_===""||_==="\r")i.indent===0&&g.length>c&&(c=g.length);else{g.length<c&&t(l+g.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),i.indent===0&&(c=g.length),u=d,c===0&&!n.atRoot&&t(l,"BAD_INDENT","Block scalar values in collections must be indented");break}l+=g.length+_.length+1}for(let d=r.length-1;d>=a;--d)r[d][0].length>c&&(a=d+1);let f="",m="",h=!1;for(let d=0;d<u;++d)f+=r[d][0].slice(c)+`
`;for(let d=u;d<a;++d){let[g,_]=r[d];l+=g.length+_.length+1;const S=_[_.length-1]==="\r";if(S&&(_=_.slice(0,-1)),_&&g.length<c){const N=`Block scalar lines must not be less indented than their ${i.indent?"explicit indentation indicator":"first line"}`;t(l-_.length-(S?2:1),"BAD_INDENT",N),g=""}o===L.BLOCK_LITERAL?(f+=m+g.slice(c)+_,m=`
`):g.length>c||_[0]==="	"?(m===" "?m=`
`:!h&&m===`
`&&(m=`

`),f+=m+g.slice(c)+_,m=`
`,h=!0):_===""?m===`
`?f+=`
`:m=`
`:(f+=m+_,m=" ",h=!1)}switch(i.chomp){case"-":break;case"+":for(let d=a;d<r.length;++d)f+=`
`+r[d][0].slice(c);f[f.length-1]!==`
`&&(f+=`
`);break;default:f+=`
`}const y=s+i.length+e.source.length;return{value:f,type:o,comment:i.comment,range:[s,y,y]}}function go({offset:n,props:e},t,s){if(e[0].type!=="block-scalar-header")return s(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:i}=e[0],o=i[0];let r=0,a="",c=-1;for(let m=1;m<i.length;++m){const h=i[m];if(!a&&(h==="-"||h==="+"))a=h;else{const y=Number(h);!r&&y?r=y:c===-1&&(c=n+m)}}c!==-1&&s(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${i}`);let l=!1,u="",f=i.length;for(let m=1;m<e.length;++m){const h=e[m];switch(h.type){case"space":l=!0;case"newline":f+=h.source.length;break;case"comment":t&&!l&&s(h,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),f+=h.source.length,u=h.source.substring(1);break;case"error":s(h,"UNEXPECTED_TOKEN",h.message),f+=h.source.length;break;default:{const y=`Unexpected token in block scalar header: ${h.type}`;s(h,"UNEXPECTED_TOKEN",y);const d=h.source;d&&typeof d=="string"&&(f+=d.length)}}}return{mode:o,indent:r,chomp:a,comment:u,length:f}}function po(n){const e=n.split(/\n( *)/),t=e[0],s=t.match(/^( *)/),o=[s!=null&&s[1]?[s[1],t.slice(s[1].length)]:["",t]];for(let r=1;r<e.length;r+=2)o.push([e[r],e[r+1]]);return o}function yo(n,e,t){const{offset:s,type:i,source:o,end:r}=n;let a,c;const l=(m,h,y)=>t(s+m,h,y);switch(i){case"scalar":a=L.PLAIN,c=_o(o,l);break;case"single-quoted-scalar":a=L.QUOTE_SINGLE,c=bo(o,l);break;case"double-quoted-scalar":a=L.QUOTE_DOUBLE,c=wo(o,l);break;default:return t(n,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${i}`),{value:"",type:null,comment:"",range:[s,s+o.length,s+o.length]}}const u=s+o.length,f=dt(r,u,e,t);return{value:c,type:a,comment:f.comment,range:[s,u,f.offset]}}function _o(n,e){let t="";switch(n[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${n[0]}`;break}case"@":case"`":{t=`reserved character ${n[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),qs(n)}function bo(n,e){return(n[n.length-1]!=="'"||n.length===1)&&e(n.length,"MISSING_CHAR","Missing closing 'quote"),qs(n.slice(1,-1)).replace(/''/g,"'")}function qs(n){let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let s=e.exec(n);if(!s)return n;let i=s[1],o=" ",r=e.lastIndex;for(t.lastIndex=r;s=t.exec(n);)s[1]===""?o===`
`?i+=o:o=`
`:(i+=o+s[1],o=" "),r=t.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=r,s=a.exec(n),i+o+((s==null?void 0:s[1])??"")}function wo(n,e){let t="";for(let s=1;s<n.length-1;++s){const i=n[s];if(!(i==="\r"&&n[s+1]===`
`))if(i===`
`){const{fold:o,offset:r}=vo(n,s);t+=o,s=r}else if(i==="\\"){let o=n[++s];const r=ko[o];if(r)t+=r;else if(o===`
`)for(o=n[s+1];o===" "||o==="	";)o=n[++s+1];else if(o==="\r"&&n[s+1]===`
`)for(o=n[++s+1];o===" "||o==="	";)o=n[++s+1];else if(o==="x"||o==="u"||o==="U"){const a={x:2,u:4,U:8}[o];t+=So(n,s+1,a,e),s+=a}else{const a=n.substr(s-1,2);e(s-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),t+=a}}else if(i===" "||i==="	"){const o=s;let r=n[s+1];for(;r===" "||r==="	";)r=n[++s+1];r!==`
`&&!(r==="\r"&&n[s+2]===`
`)&&(t+=s>o?n.slice(o,s+1):i)}else t+=i}return(n[n.length-1]!=='"'||n.length===1)&&e(n.length,"MISSING_CHAR",'Missing closing "quote'),t}function vo(n,e){let t="",s=n[e+1];for(;(s===" "||s==="	"||s===`
`||s==="\r")&&!(s==="\r"&&n[e+2]!==`
`);)s===`
`&&(t+=`
`),e+=1,s=n[e+1];return t||(t=" "),{fold:t,offset:e}}const ko={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function So(n,e,t,s){const i=n.substr(e,t),r=i.length===t&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;if(isNaN(r)){const a=n.substr(e-2,t+2);return s(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),a}return String.fromCodePoint(r)}function Rs(n,e,t,s){const{value:i,type:o,comment:r,range:a}=e.type==="block-scalar"?mo(n,e,s):yo(e,n.options.strict,s),c=t?n.directives.tagName(t.source,f=>s(t,"TAG_RESOLVE_FAILED",f)):null;let l;n.options.stringKeys&&n.atKey?l=n.schema[ge]:c?l=No(n.schema,i,c,t,s):e.type==="scalar"?l=Io(n,i,e,s):l=n.schema[ge];let u;try{const f=l.resolve(i,m=>s(t??e,"TAG_RESOLVE_FAILED",m),n.options);u=M(f)?f:new L(f)}catch(f){const m=f instanceof Error?f.message:String(f);s(t??e,"TAG_RESOLVE_FAILED",m),u=new L(i)}return u.range=a,u.source=i,o&&(u.type=o),c&&(u.tag=c),l.format&&(u.format=l.format),r&&(u.comment=r),u}function No(n,e,t,s,i){var a;if(t==="!")return n[ge];const o=[];for(const c of n.tags)if(!c.collection&&c.tag===t)if(c.default&&c.test)o.push(c);else return c;for(const c of o)if((a=c.test)!=null&&a.test(e))return c;const r=n.knownTags[t];return r&&!r.collection?(n.tags.push(Object.assign({},r,{default:!1,test:void 0})),r):(i(s,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),n[ge])}function Io({atKey:n,directives:e,schema:t},s,i,o){const r=t.tags.find(a=>{var c;return(a.default===!0||n&&a.default==="key")&&((c=a.test)==null?void 0:c.test(s))})||t[ge];if(t.compat){const a=t.compat.find(c=>{var l;return c.default&&((l=c.test)==null?void 0:l.test(s))})??t[ge];if(r.tag!==a.tag){const c=e.tagString(r.tag),l=e.tagString(a.tag),u=`Value may be parsed as either ${c} or ${l}`;o(i,"TAG_RESOLVE_FAILED",u,!0)}}return r}function Eo(n,e,t){if(e){t??(t=e.length);for(let s=t-1;s>=0;--s){let i=e[s];switch(i.type){case"space":case"comment":case"newline":n-=i.source.length;continue}for(i=e[++s];(i==null?void 0:i.type)==="space";)n+=i.source.length,i=e[++s];break}}return n}const To={composeNode:Us,composeEmptyNode:Sn};function Us(n,e,t,s){const i=n.atKey,{spaceBefore:o,comment:r,anchor:a,tag:c}=t;let l,u=!0;switch(e.type){case"alias":l=Oo(n,e,s),(a||c)&&s(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":l=Rs(n,e,c,s),a&&(l.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":l=ho(To,n,e,t,s),a&&(l.anchor=a.source.substring(1));break;default:{const f=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;s(e,"UNEXPECTED_TOKEN",f),l=Sn(n,e.offset,void 0,null,t,s),u=!1}}return a&&l.anchor===""&&s(a,"BAD_ALIAS","Anchor cannot be an empty string"),i&&n.options.stringKeys&&(!M(l)||typeof l.value!="string"||l.tag&&l.tag!=="tag:yaml.org,2002:str")&&s(c??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),o&&(l.spaceBefore=!0),r&&(e.type==="scalar"&&e.source===""?l.comment=r:l.commentBefore=r),n.options.keepSourceTokens&&u&&(l.srcToken=e),l}function Sn(n,e,t,s,{spaceBefore:i,comment:o,anchor:r,tag:a,end:c},l){const u={type:"scalar",offset:Eo(e,t,s),indent:-1,source:""},f=Rs(n,u,a,l);return r&&(f.anchor=r.source.substring(1),f.anchor===""&&l(r,"BAD_ALIAS","Anchor cannot be an empty string")),i&&(f.spaceBefore=!0),o&&(f.comment=o,f.range[2]=c),f}function Oo({options:n},{offset:e,source:t,end:s},i){const o=new un(t.substring(1));o.source===""&&i(e,"BAD_ALIAS","Alias cannot be an empty string"),o.source.endsWith(":")&&i(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const r=e+t.length,a=dt(s,r,n.strict,i);return o.range=[e,r,a.offset],a.comment&&(o.comment=a.comment),o}function Ao(n,e,{offset:t,start:s,value:i,end:o},r){const a=Object.assign({_directives:e},n),c=new xt(void 0,a),l={atKey:!1,atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},u=Ge(s,{indicator:"doc-start",next:i??(o==null?void 0:o[0]),offset:t,onError:r,parentIndent:0,startOnNewline:!0});u.found&&(c.directives.docStart=!0,i&&(i.type==="block-map"||i.type==="block-seq")&&!u.hasNewline&&r(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=i?Us(l,i,u,r):Sn(l,u.end,s,null,u,r);const f=c.contents.range[2],m=dt(o,f,!1,r);return m.comment&&(c.comment=m.comment),c.range=[t,f,m.offset],c}function Xe(n){if(typeof n=="number")return[n,n+1];if(Array.isArray(n))return n.length===2?n:[n[0],n[1]];const{offset:e,source:t}=n;return[e,e+(typeof t=="string"?t.length:1)]}function jn(n){var i;let e="",t=!1,s=!1;for(let o=0;o<n.length;++o){const r=n[o];switch(r[0]){case"#":e+=(e===""?"":s?`

`:`
`)+(r.substring(1)||" "),t=!0,s=!1;break;case"%":((i=n[o+1])==null?void 0:i[0])!=="#"&&(o+=1),t=!1;break;default:t||(s=!0),t=!1}}return{comment:e,afterEmptyLine:s}}class $o{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,s,i,o)=>{const r=Xe(t);o?this.warnings.push(new lo(r,s,i)):this.errors.push(new et(r,s,i))},this.directives=new ee({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:s,afterEmptyLine:i}=jn(this.prelude);if(s){const o=e.contents;if(t)e.comment=e.comment?`${e.comment}
${s}`:s;else if(i||e.directives.docStart||!o)e.commentBefore=s;else if(V(o)&&!o.flow&&o.items.length>0){let r=o.items[0];H(r)&&(r=r.key);const a=r.commentBefore;r.commentBefore=a?`${s}
${a}`:s}else{const r=o.commentBefore;o.commentBefore=r?`${s}
${r}`:s}}t?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:jn(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,s=-1){for(const i of e)yield*this.next(i);yield*this.end(t,s)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,s,i)=>{const o=Xe(e);o[0]+=t,this.onError(o,"BAD_DIRECTIVE",s,i)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=Ao(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,s=new et(Xe(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(s):this.doc.errors.push(s);break}case"doc-end":{if(!this.doc){const s="Unexpected doc-end without preceding document";this.errors.push(new et(Xe(e),"UNEXPECTED_TOKEN",s));break}this.doc.directives.docEnd=!0;const t=dt(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const s=this.doc.comment;this.doc.comment=s?`${s}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new et(Xe(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const s=Object.assign({_directives:this.directives},this.options),i=new xt(void 0,s);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,t,t],this.decorate(i,!1),yield i}}}const xs="\uFEFF",Vs="",Ys="",an="";function Lo(n){switch(n){case xs:return"byte-order-mark";case Vs:return"doc-mode";case Ys:return"flow-error-end";case an:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(n[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function he(n){switch(n){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Kn=new Set("0123456789ABCDEFabcdef"),Co=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),yt=new Set(",[]{}"),Do=new Set(` ,[]{}
\r	`),Wt=n=>!n||Do.has(n);class Mo{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let s=this.next??"stream";for(;s&&(t||this.hasChars(1));)s=yield*this.parseNext(s)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let s=0;for(;t===" ";)t=this.buffer[++s+e];if(t==="\r"){const i=this.buffer[s+e+1];if(i===`
`||!i&&!this.atEnd)return e+s+1}return t===`
`||s>=this.indentNext||!t&&!this.atEnd?e+s:-1}if(t==="-"||t==="."){const s=this.buffer.substr(e,3);if((s==="---"||s==="...")&&he(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===xs&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,s=e.indexOf("#");for(;s!==-1;){const o=e[s-1];if(o===" "||o==="	"){t=s-1;break}else s=e.indexOf("#",s+1)}for(;;){const o=e[t-1];if(o===" "||o==="	")t-=1;else break}const i=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-i),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield Vs,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&he(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!he(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&he(t)){const s=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=s,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Wt),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,s=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=s=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const i=this.getLine();if(i===null)return this.setNext("flow");if((s!==-1&&s<this.indentNext&&i[0]!=="#"||s===0&&(i.startsWith("---")||i.startsWith("..."))&&he(i[3]))&&!(s===this.indentNext-1&&this.flowLevel===1&&(i[0]==="]"||i[0]==="}")))return this.flowLevel=0,yield Ys,yield*this.parseLineStart();let o=0;for(;i[o]===",";)o+=yield*this.pushCount(1),o+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(o+=yield*this.pushIndicators(),i[o]){case void 0:return"flow";case"#":return yield*this.pushCount(i.length-o),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Wt),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const r=this.charAt(1);if(this.flowKey||he(r)||r===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let o=0;for(;this.buffer[t-1-o]==="\\";)o+=1;if(o%2===0)break;t=this.buffer.indexOf('"',t+1)}const s=this.buffer.substring(0,t);let i=s.indexOf(`
`,this.pos);if(i!==-1){for(;i!==-1;){const o=this.continueScalar(i+1);if(o===-1)break;i=s.indexOf(`
`,o)}i!==-1&&(t=i-(s[i-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>he(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,s;e:for(let o=this.pos;s=this.buffer[o];++o)switch(s){case" ":t+=1;break;case`
`:e=o,t=0;break;case"\r":{const r=this.buffer[o+1];if(!r&&!this.atEnd)return this.setNext("block-scalar");if(r===`
`)break}default:break e}if(!s&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const o=this.continueScalar(e+1);if(o===-1)break;e=this.buffer.indexOf(`
`,o)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let i=e+1;for(s=this.buffer[i];s===" ";)s=this.buffer[++i];if(s==="	"){for(;s==="	"||s===" "||s==="\r"||s===`
`;)s=this.buffer[++i];e=i-1}else if(!this.blockScalarKeep)do{let o=e-1,r=this.buffer[o];r==="\r"&&(r=this.buffer[--o]);const a=o;for(;r===" ";)r=this.buffer[--o];if(r===`
`&&o>=this.pos&&o+1+t>a)e=o;else break}while(!0);return yield an,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,s=this.pos-1,i;for(;i=this.buffer[++s];)if(i===":"){const o=this.buffer[s+1];if(he(o)||e&&yt.has(o))break;t=s}else if(he(i)){let o=this.buffer[s+1];if(i==="\r"&&(o===`
`?(s+=1,i=`
`,o=this.buffer[s+1]):t=s),o==="#"||e&&yt.has(o))break;if(i===`
`){const r=this.continueScalar(s+1);if(r===-1)break;s=Math.max(s,r-2)}}else{if(e&&yt.has(i))break;t=s}return!i&&!this.atEnd?this.setNext("plain-scalar"):(yield an,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const s=this.buffer.slice(this.pos,e);return s?(yield s,this.pos+=s.length,s.length):(t&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Wt))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const e=this.flowLevel>0,t=this.charAt(1);if(he(t)||e&&yt.has(t))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!he(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(Co.has(t))t=this.buffer[++e];else if(t==="%"&&Kn.has(this.buffer[e+1])&&Kn.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,s;do s=this.buffer[++t];while(s===" "||e&&s==="	");const i=t-this.pos;return i>0&&(yield this.buffer.substr(this.pos,i),this.pos=t),i}*pushUntil(e){let t=this.pos,s=this.buffer[t];for(;!e(s);)s=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class Po{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,s=this.lineStarts.length;for(;t<s;){const o=t+s>>1;this.lineStarts[o]<e?t=o+1:s=o}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const i=this.lineStarts[t-1];return{line:t,col:e-i+1}}}}function ve(n,e){for(let t=0;t<n.length;++t)if(n[t].type===e)return!0;return!1}function qn(n){for(let e=0;e<n.length;++e)switch(n[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function Gs(n){switch(n==null?void 0:n.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function _t(n){switch(n.type){case"document":return n.start;case"block-map":{const e=n.items[n.items.length-1];return e.sep??e.start}case"block-seq":return n.items[n.items.length-1].start;default:return[]}}function Be(n){var t;if(n.length===0)return[];let e=n.length;e:for(;--e>=0;)switch(n[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=n[++e])==null?void 0:t.type)==="space";);return n.splice(e,n.length)}function Rn(n){if(n.start.type==="flow-seq-start")for(const e of n.items)e.sep&&!e.value&&!ve(e.start,"explicit-key-ind")&&!ve(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,Gs(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}class Bo{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Mo,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const s of this.lexer.lex(e,t))yield*this.next(s);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=Lo(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const s=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:s,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(e==null?void 0:e.type)!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const s=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in s?s.indent:0:t.type==="flow-collection"&&s.type==="document"&&(t.indent=0),t.type==="flow-collection"&&Rn(t),s.type){case"document":s.value=t;break;case"block-scalar":s.props.push(t);break;case"block-map":{const i=s.items[s.items.length-1];if(i.value){s.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(i.sep)i.value=t;else{Object.assign(i,{key:t,sep:[]}),this.onKeyLine=!i.explicitKey;return}break}case"block-seq":{const i=s.items[s.items.length-1];i.value?s.items.push({start:[],value:t}):i.value=t;break}case"flow-collection":{const i=s.items[s.items.length-1];!i||i.value?s.items.push({start:[],key:t,sep:[]}):i.sep?i.value=t:Object.assign(i,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((s.type==="document"||s.type==="block-map"||s.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const i=t.items[t.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&qn(i.start)===-1&&(t.indent===0||i.start.every(o=>o.type!=="comment"||o.indent<t.indent))&&(s.type==="document"?s.end=i.start:s.items.push({start:i.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{qn(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=_t(this.peek(2)),s=Be(t);let i;e.end?(i=e.end,i.push(this.sourceToken),delete e.end):i=[this.sourceToken];const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:s,key:e,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var s;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const i="end"in t.value?t.value.end:void 0,o=Array.isArray(i)?i[i.length-1]:void 0;(o==null?void 0:o.type)==="comment"?i==null||i.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2],o=(s=i==null?void 0:i.value)==null?void 0:s.end;if(Array.isArray(o)){Array.prototype.push.apply(o,t.start),o.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const i=!this.onKeyLine&&this.indent===e.indent,o=i&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let r=[];if(o&&t.sep&&!t.value){const a=[];for(let c=0;c<t.sep.length;++c){const l=t.sep[c];switch(l.type){case"newline":a.push(c);break;case"space":break;case"comment":l.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(r=t.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":o||t.value?(r.push(this.sourceToken),e.items.push({start:r}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):o||t.value?(r.push(this.sourceToken),e.items.push({start:r,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(ve(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]});else if(Gs(t.key)&&!ve(t.sep,"newline")){const a=Be(t.start),c=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:c,sep:l}]})}else r.length>0?t.sep=t.sep.concat(r,this.sourceToken):t.sep.push(this.sourceToken);else if(ve(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const a=Be(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||o?e.items.push({start:r,key:null,sep:[this.sourceToken]}):ve(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);o||t.value?(e.items.push({start:r,key:a,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(a):(Object.assign(t,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){if(a.type==="block-seq"){if(!t.explicitKey&&t.sep&&!ve(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else i&&e.items.push({start:r});this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var s;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const i="end"in t.value?t.value.end:void 0,o=Array.isArray(i)?i[i.length-1]:void 0;(o==null?void 0:o.type)==="comment"?i==null||i.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2],o=(s=i==null?void 0:i.value)==null?void 0:s.end;if(Array.isArray(o)){Array.prototype.push.apply(o,t.start),o.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||ve(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const i=this.startBlockValue(e);if(i){this.stack.push(i);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let s;do yield*this.pop(),s=this.peek(1);while((s==null?void 0:s.type)==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:i,sep:[]}):t.sep?this.stack.push(i):Object.assign(t,{key:i,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const s=this.startBlockValue(e);s?this.stack.push(s):(yield*this.pop(),yield*this.step())}else{const s=this.peek(2);if(s.type==="block-map"&&(this.type==="map-value-ind"&&s.indent===e.indent||this.type==="newline"&&!s.items[s.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&s.type!=="flow-collection"){const i=_t(s),o=Be(i);Rn(e);const r=e.end.splice(1,e.end.length);r.push(this.sourceToken);const a={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:o,key:e,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=_t(e),s=Be(t);return s.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=_t(e),s=Be(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(s=>s.type==="newline"||s.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function Fo(n){const e=n.prettyErrors!==!1;return{lineCounter:n.lineCounter||e&&new Po||null,prettyErrors:e}}function jo(n,e={}){const{lineCounter:t,prettyErrors:s}=Fo(e),i=new Bo(t==null?void 0:t.addNewLine),o=new $o(e);let r=null;for(const a of o.compose(i.parse(n),!0,n.length))if(!r)r=a;else if(r.options.logLevel!=="silent"){r.errors.push(new et(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return s&&t&&(r.errors.forEach(Bn(n,t)),r.warnings.forEach(Bn(n,t))),r}function Ko(n,e,t){let s;const i=jo(n,t);if(!i)return null;if(i.warnings.forEach(o=>bs(i.options.logLevel,o)),i.errors.length>0){if(i.options.logLevel!=="silent")throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:s},t))}function we(n,e){try{const t=Ko(n);if(t==null)throw new Error("YAML file is empty or invalid");return{value:t,source:e}}catch(t){const s=t instanceof Error?t.message:"Unknown YAML parse error";throw new Error(`YAML parse error in ${e}: ${s}`)}}function qo(){const n=Object.assign({"/src/games/boiler_7/game.yaml":ai,"/src/games/boiler_7/items.yaml":li,"/src/games/boiler_7/localization/en.yaml":ci,"/src/games/boiler_7/rules.yaml":fi,"/src/games/boiler_7/scenes/arrival.yaml":ui,"/src/games/boiler_7/scenes/boiler_floor.yaml":hi,"/src/games/boiler_7/scenes/conclusion.yaml":di,"/src/games/boiler_7/scenes/control_room.yaml":mi,"/src/games/boiler_7/scenes/lower_chamber.yaml":gi,"/src/games/boiler_7/state.yaml":pi,"/src/games/midnight_switchboard/game.yaml":yi,"/src/games/midnight_switchboard/items.yaml":_i,"/src/games/midnight_switchboard/localization/en.yaml":bi,"/src/games/midnight_switchboard/rules.yaml":wi,"/src/games/midnight_switchboard/scenes/basement_chamber.yaml":vi,"/src/games/midnight_switchboard/scenes/basement_stairs.yaml":ki,"/src/games/midnight_switchboard/scenes/ending.yaml":Si,"/src/games/midnight_switchboard/scenes/operator_line.yaml":Ni,"/src/games/midnight_switchboard/scenes/prologue.yaml":Ii,"/src/games/midnight_switchboard/scenes/records_room.yaml":Ei,"/src/games/midnight_switchboard/scenes/switchboard_room.yaml":Ti,"/src/games/midnight_switchboard/state.yaml":Oi}),e={};for(const[t,s]of Object.entries(n)){const i=t.split("/src/games/")[1].split("/"),o=i[0],r=i.slice(1).join("/");e[o]||(e[o]={id:o,title:o,raw:{game:"",rules:"",state:"",items:"",scenes:{},localization:{}}});const a=e[o];if(r==="game.yaml"){a.raw.game=s;try{const c=we(s,"game.yaml").value;a.title=c.game.title}catch{}}else if(r==="rules.yaml")a.raw.rules=s;else if(r==="state.yaml")a.raw.state=s;else if(r==="items.yaml")a.raw.items=s;else if(r.startsWith("scenes/")){const c=r.replace("scenes/","");a.raw.scenes[c]=s}else if(r.startsWith("localization/")){const c=r.replace("localization/","");a.raw.localization[c]=s}}return e}class v extends Error{constructor(t,s,i){super(s);X(this,"code");X(this,"file");X(this,"path");this.code=t,this.file=i==null?void 0:i.file,this.path=i==null?void 0:i.path}toString(){let t=`[${this.code}] ${this.message}`;return this.file&&(t+=`
File: ${this.file}`),this.path&&(t+=`
Path: ${this.path}`),t}}function Ro(n){xo(n),Vo(n),Yo(n),Go(n),Ho(n),Wo(n)}function At(n,e){const t=Object.keys(n);if(t.length!==1)throw new v("E_CONDITION_INVALID",`Condition must contain exactly one operator at ${e}`);const s=t[0],i=n[s];if(s==="all"||s==="any"){if(!Array.isArray(i)||i.length===0)throw new v("E_CONDITION_INVALID",`"${s}" must be a non-empty array at ${e}`);i.forEach((o,r)=>At(o,`${e}.${s}[${r}]`));return}if(s==="not"){if(!i)throw new v("E_CONDITION_INVALID",`"not" condition missing value at ${e}`);At(i,`${e}.not`);return}if(s==="eq"||s==="neq"||s==="gt"||s==="gte"||s==="lt"||s==="lte"){if(typeof i!="object"||i===null||typeof i.var!="string"||!("value"in i))throw new v("E_CONDITION_INVALID",`Invalid payload for operator "${s}" at ${e}`);return}if(typeof i!="object"||i===null)throw new v("E_CONDITION_INVALID",`Invalid payload for operator "${s}" at ${e}`)}function Uo(n,e,t){n&&n.forEach((s,i)=>{const o=Object.keys(s);if(o.length!==1)throw new v("E_EFFECT_INVALID",`Effect must contain exactly one operator at ${e}[${i}]`);const r=o[0],a=s[r];if(r==="set"&&!a.var)throw new v("E_EFFECT_INVALID",`Set effect missing var at ${e}[${i}]`);if(r==="add"){if(!a.var)throw new v("E_EFFECT_INVALID",`Add effect missing var at ${e}[${i}]`);if(typeof a.value=="object"&&"random"in a.value&&!/^\d+\/\d+$/.test(a.value.random))throw new v("E_EFFECT_INVALID",`Invalid random format at ${e}[${i}]`)}if(r==="add_item"||r==="remove_item"){if(!a||typeof a.id!="string")throw new v("E_EFFECT_INVALID",`${r} requires { id: string } at ${e}[${i}]`);if(!t.items.items[a.id])throw new v("E_REF_NOT_FOUND",`Unknown item "${a.id}" at ${e}[${i}]`,{file:"items.yaml",path:`items.${a.id}`})}})}function xo(n){const e=n.manifest.game;if(!e.id||!e.title||!e.version)throw new v("E_SCHEMA_MISSING_FIELD","Missing required game metadata fields",{file:"game.yaml"})}function Vo(n){if(!n.rules.rules.systems)throw new v("E_SCHEMA_MISSING_FIELD","rules.systems is required",{file:"rules.yaml"})}function Yo(n){const e=n.state.state.variables,t=n.rules.rules.systems;for(const[s,i]of Object.entries(e)){if(i.requires&&!t[i.requires])throw new v("E_SYSTEM_DISABLED_USAGE",`State variable "${s}" requires disabled system "${i.requires}"`,{file:"state.yaml",path:`state.variables.${s}`});if(typeof i.initial!==i.type)throw new v("E_STATE_TYPE_MISMATCH",`Initial value of "${s}" does not match declared type "${i.type}"`,{file:"state.yaml",path:`state.variables.${s}.initial`})}}function Go(n){const e=n.items.items;for(const[t,s]of Object.entries(e))if(!s.name)throw new v("E_SCHEMA_MISSING_FIELD",`Item "${t}" missing name`,{file:"items.yaml",path:`items.${t}.name`})}function Ho(n){const e=new Set;for(const[t,s]of Object.entries(n.scenes)){const i=s.scene;if(e.has(i.id))throw new v("E_DUPLICATE_ID",`Duplicate scene id "${i.id}"`,{file:`scenes/${t}`,path:"scene.id"});e.add(i.id),Jo(s,t,n)}}function Jo(n,e,t){const s=new Set;for(const i of n.scene.nodes){if(s.has(i.id))throw new v("E_DUPLICATE_ID",`Duplicate node id "${i.id}" in scene "${n.scene.id}"`,{file:`scenes/${e}`,path:"scene.nodes[].id"});s.add(i.id),i.text.forEach((o,r)=>{typeof o!="string"&&"if"in o&&At(o.if,`scene.${n.scene.id}.node.${i.id}.text[${r}].if`)}),zo(i,n.scene.id,e,t)}}function zo(n,e,t,s){for(const i of n.choices){if(!i.goto)throw new v("E_SCHEMA_MISSING_FIELD",`Choice "${i.id}" is missing goto`,{file:`scenes/${t}`,path:`node.${n.id}.choices.${i.id}`});i.if&&At(i.if,`scene.${e}.node.${n.id}.choice.${i.id}.if`),Uo(i.effects,`scene.${e}.node.${n.id}.choice.${i.id}.effects`,s)}}function Wo(n){const{scene:e,node:t}=n.manifest.game.start,s=Object.values(n.scenes).find(o=>o.scene.id===e);if(!s)throw new v("E_REF_NOT_FOUND_SCENE",`Start scene "${e}" not found`,{file:"game.yaml",path:"game.start.scene"});if(!s.scene.nodes.find(o=>o.id===t))throw new v("E_REF_NOT_FOUND_NODE",`Start node "${t}" not found in scene "${e}"`,{file:"game.yaml",path:"game.start.node"})}function Qo(n){return{manifest:n.manifest.game,rules:n.rules.rules,state:Xo(n),items:Zo(n),scenes:er(n),localization:n.localization,language:"en"}}function Xo(n){const e=n.rules.rules.state_visibility.default==="visible",t=new Map;for(const[s,i]of Object.entries(n.state.state.variables))t.set(s,{type:i.type,value:i.initial,visible:i.visible!==void 0?i.visible:e});return{variables:t}}function Zo(n){const e=new Map;for(const[t,s]of Object.entries(n.items.items))e.set(t,s);return e}function er(n){const e=new Map;for(const t of Object.values(n.scenes)){const s=t.scene.id;e.set(s,{id:s,nodes:tr(t)})}return e}function tr(n){const e=new Map;for(const t of n.scene.nodes)e.set(t.id,{id:t.id,text:t.text,choices:t.choices});return e}class nr{constructor(e){X(this,"_at");X(this,"_state");X(this,"_history",[]);X(this,"_rng");X(this,"_inventory",new Set);const t=e.manifest.start;this._at={scene:t.scene,node:t.node},this._state=sr(e.state)}get at(){return this._at}get history(){return this._history}get rng(){return this._rng}get inventory(){return this._inventory}getVar(e){const t=this._state.variables.get(e);if(!t)throw new v("E_STATE_VAR_UNDECLARED",`Unknown state var "${e}"`,{path:`state.variables.${e}`});return t.value}setVar(e,t){const s=this._state.variables.get(e);if(!s)throw new v("E_STATE_VAR_UNDECLARED",`Unknown state var "${e}"`,{path:`state.variables.${e}`});s.value=t}getVisibleState(){const e={};for(const[t,s]of this._state.variables.entries())s.visible&&(e[t]=s.value);return e}move(e,t,s){this._at=e,this._history.push({from:s,to:e,choiceId:t,ts:Date.now()})}save(){const e={};for(const[t,s]of this._state.variables.entries())e[t]=s.value;return{version:"0.1",at:{...this._at},state:e,history:[...this._history],rng:this._rng?{...this._rng}:void 0,inventory:[...this._inventory]}}load(e){if(e.version!=="0.1")throw new v("E_SCHEMA_INVALID_TYPE",`Unsupported save version "${e.version}"`);this._at={...e.at},this._history=[...e.history];for(const[t,s]of Object.entries(e.state)){const i=this._state.variables.get(t);if(!i)throw new v("E_STATE_VAR_UNDECLARED",`Save contains unknown var "${t}"`);i.value=s}e.rng&&(this._rng={...e.rng}),e.inventory&&(this._inventory=new Set(e.inventory))}initializeRng(e){this._rng||(this._rng={seed:e,counter:0})}addItem(e){this._inventory.add(e)}removeItem(e){this._inventory.delete(e)}hasItem(e){return this._inventory.has(e)}}function sr(n){const e=new Map(n.variables);for(const[t,s]of e.entries())e.set(t,{...s});return{variables:e}}function Ae(n,e,t,s){return rr(n)?or(n,e,t,s):ir(n,e,t,s)}function ir(n,e,t,s){const i=Object.keys(n);if(i.length!==1)throw new v("E_CONDITION_INVALID","Operator condition must contain exactly one operator");const o=i[0],r=n[o],a=s.findConditionHandler(o);if(!a)throw new v("E_CONDITION_INVALID",`Unknown condition operator "${o}"`);try{return a(r,e,t)}catch(c){throw c instanceof v?c:new v("E_CONDITION_INVALID",`Condition operator "${o}" threw an error`)}}function or(n,e,t,s){if(n.all){if(!Array.isArray(n.all)||n.all.length===0)throw new v("E_CONDITION_INVALID",'"all" must be a non-empty array');return n.all.every(i=>Ae(i,e,t,s))}if(n.any){if(!Array.isArray(n.any)||n.any.length===0)throw new v("E_CONDITION_INVALID",'"any" must be a non-empty array');return n.any.some(i=>Ae(i,e,t,s))}if(n.not)return!Ae(n.not,e,t,s);throw new v("E_CONDITION_INVALID","Empty logical condition")}function rr(n){return typeof n=="object"&&("all"in n||"any"in n||"not"in n)}function ar(n,e,t,s){if(!(!n||n.length===0))for(const i of n){const o=Object.keys(i)[0],r=s.findEffectHandler(o);if(!r)throw new v("E_EFFECT_INVALID",`Unknown effect operator "${o}"`);r(i[o],e,t)}}function Qt(n,e,t,s){const i=[];for(const o of n){if(typeof o=="string"){i.push(bt(o,e,t,s));continue}if(cr(o)){const r=Un(o.key,t);i.push(bt(r,e,t,s));continue}if("if"in o){if(Ae(o.if,e,t,s)){const r=o.then;if(typeof r=="string")i.push(bt(r,e,t,s));else{const a=Un(r.key,t);i.push(bt(a,e,t,s))}}continue}throw new v("E_SCHEMA_INVALID_TYPE","Unknown text fragment structure")}return i}function Un(n,e){const t=e.language,s=e.localization[t];if(!s)throw new v("E_LOCALIZATION_KEY_MISSING",`Language "${t}" not loaded`);const i=n.split(".");let o=s;for(const r of i)if(o=o==null?void 0:o[r],o===void 0)throw new v("E_LOCALIZATION_KEY_MISSING",`Localization key "${n}" not found for language "${t}"`);if(typeof o!="string")throw new v("E_LOCALIZATION_KEY_MISSING",`Localization key "${n}" does not resolve to string`);return o}function bt(n,e,t,s){const i=/\{\{if (.*?)\}\}([\s\S]*?)\{\{\/if\}\}/g;return n=n.replace(i,(o,r,a)=>{const c=lr(r);return Ae(c,e,t,s)?a:""}),n.replace(/\{\{(.*?)\}\}/g,(o,r)=>{const a=r.trim();if(a==="inventory_count")return String(e.inventory.size);if(a==="inventory_list")return e.inventory.size===0?"(none)":Array.from(e.inventory).map(l=>{const u=t.items.get(l);if(!u)throw new v("E_REF_NOT_FOUND",`Inventory contains unknown item "${l}"`);return u.name}).join(", ");if(a.startsWith("has_item:")){const c=a.slice(9).trim();if(!t.items.has(c))throw new v("E_REF_NOT_FOUND",`Interpolation references unknown item "${c}"`);return String(e.hasItem(c))}try{const c=e.getVar(a);return String(c)}catch{throw new v("E_STATE_VAR_UNDECLARED",`Interpolation variable "${a}" not declared`)}})}function lr(n){const e=n.trim().split(/\s+/);if(e.length===0)throw new v("E_CONDITION_INVALID","Empty inline condition");const t=e[0];if(t==="has_item"){if(e.length!==2)throw new v("E_CONDITION_INVALID","has_item requires one argument");return{has_item:{id:e[1]}}}if(e.length!==3)throw new v("E_CONDITION_INVALID",`Invalid inline condition format "${n}"`);const[s,i,o]=e;let r=o;return o==="true"?r=!0:o==="false"?r=!1:isNaN(Number(o))||(r=Number(o)),{[t]:{var:i,value:r}}}function cr(n){return typeof n=="object"&&n!==null&&"key"in n}class fr{constructor(){X(this,"plugins",[]);X(this,"finalized",!1)}register(e){if(this.finalized)throw new v("E_PLUGIN_REGISTRY_LOCKED","Cannot register plugins after registry is finalized");this.plugins.push(e)}finalize(){const e=new Set;for(const t of this.plugins){if(e.has(t.id))throw new v("E_PLUGIN_DUPLICATE_ID",`Duplicate plugin id "${t.id}"`);e.add(t.id)}for(const t of this.plugins)for(const s of t.dependsOn??[])if(!e.has(s))throw new v("E_PLUGIN_DEPENDENCY_MISSING",`Plugin "${t.id}" depends on missing plugin "${s}"`);this.plugins=ur(this.plugins),this.finalized=!0}getAll(){return this.plugins}runHook(e,t,s){var i;for(const o of this.plugins){const r=(i=o.hooks)==null?void 0:i[e];r&&r(t,s)}}findConditionHandler(e){var t;for(const s of this.plugins){const i=(t=s.conditions)==null?void 0:t[e];if(i)return i}}findEffectHandler(e){var t;for(const s of this.plugins){const i=(t=s.effects)==null?void 0:t[e];if(i)return i}}}function ur(n){var a,c;const e=new Map;for(const l of n)e.set(l.id,l);const t=new Map,s=new Map;for(const l of n)t.set(l.id,new Set),s.set(l.id,0);function i(l,u){t.get(l).has(u)||(t.get(l).add(u),s.set(u,(s.get(u)??0)+1))}for(const l of n)for(const u of l.dependsOn??[])i(u,l.id);for(const l of n){for(const u of((a=l.order)==null?void 0:a.after)??[]){if(!e.has(u))throw new v("E_PLUGIN_ORDER_UNKNOWN",`Plugin "${l.id}" orders after unknown plugin "${u}"`);i(u,l.id)}for(const u of((c=l.order)==null?void 0:c.before)??[]){if(!e.has(u))throw new v("E_PLUGIN_ORDER_UNKNOWN",`Plugin "${l.id}" orders before unknown plugin "${u}"`);i(l.id,u)}}const o=[];for(const l of n)(s.get(l.id)??0)===0&&o.push(l.id);const r=[];for(;o.length>0;){const l=o.shift();r.push(e.get(l));for(const u of t.get(l))s.set(u,(s.get(u)??0)-1),(s.get(u)??0)===0&&o.push(u)}if(r.length!==n.length)throw new v("E_PLUGIN_ORDER_CYCLE","Plugin ordering contains a cycle");return r}const hr={id:"core",conditions:{eq(n,e){const{var:t,value:s}=n;return e.getVar(t)===s},neq(n,e){const{var:t,value:s}=n;return e.getVar(t)!==s},gt(n,e){return wt(n,e,(t,s)=>t>s)},gte(n,e){return wt(n,e,(t,s)=>t>=s)},lt(n,e){return wt(n,e,(t,s)=>t<s)},lte(n,e){return wt(n,e,(t,s)=>t<=s)}},effects:{add(n,e,t){if(!n||typeof n.var!="string")throw new v("E_EFFECT_INVALID","add requires { var: string, value: number | RandomValue }");const s=e.getVar(n.var);if(typeof s!="number")throw new v("E_STATE_TYPE_MISMATCH",`Cannot add to non-number variable "${n.var}"`);let i;if(typeof n.value=="number")i=n.value;else if(typeof n.value=="object"&&n.value&&"random"in n.value){if(!t.rules.systems.randomness)throw new v("E_SYSTEM_DISABLED_USAGE","Randomness system disabled");i=dr(n.value.random,e)}else throw new v("E_EFFECT_INVALID","Invalid add value");console.log("[Core.add] applying",{var:n.var,current:s,delta:i,next:s+i,payload:n}),e.setVar(n.var,s+i)},set(n,e){const{var:t,value:s}=n,i=e.getVar(t);if(typeof i!=typeof s)throw new v("E_STATE_TYPE_MISMATCH",`Cannot set "${t}" (${typeof i}) to ${typeof s}`);e.setVar(t,s)}}};function wt(n,e,t){const{var:s,value:i}=n,o=e.getVar(s);if(typeof o!="number"||typeof i!="number")throw new v("E_CONDITION_INVALID","Numeric comparison requires numbers");return t(o,i)}function dr(n,e){const t=e.rng;if(!t)throw console.error("[Core.add] RNG missing. Did randomness plugin initialize it?"),new v("E_EFFECT_INVALID","Randomness system enabled but RNG state missing");const s=n.split("/");if(s.length!==2)throw new v("E_EFFECT_INVALID",`Invalid random format "${n}"`);const i=Number(s[0]),o=Number(s[1]);if(!Number.isFinite(i)||!Number.isFinite(o)||o<=0)throw new v("E_EFFECT_INVALID",`Invalid random values "${n}"`);const r={seed:t.seed,counter:t.counter},a=t.seed,c=t.counter++,l=Math.abs(Math.sin(a+c)*1e4)%1,u=l<i/o?1:0;return console.log("[Core.add] resolveRandom",{randomString:n,before:r,after:{seed:t.seed,counter:t.counter},rand:l,threshold:i/o,out:u}),l<i/o?1:0}const mr={id:"randomness",order:{after:["core"]},dependsOn:["core"],hooks:{onStart(n){n.initializeRng(Date.now())}}},gr={id:"inventory",dependsOn:["core"],order:{after:["core"]},conditions:{has_item(n,e,t){if(!n||typeof n.id!="string")throw new v("E_CONDITION_INVALID","has_item requires { id: string }");if(!t.items.has(n.id))throw new v("E_REF_NOT_FOUND",`Unknown item "${n.id}"`);return e.hasItem(n.id)}},effects:{add_item(n,e,t){if(!n||typeof n.id!="string")throw new v("E_EFFECT_INVALID","add_item requires { id: string }");if(!t.items.has(n.id))throw new v("E_REF_NOT_FOUND",`Unknown item "${n.id}"`);e.addItem(n.id)},remove_item(n,e,t){if(!n||typeof n.id!="string")throw new v("E_EFFECT_INVALID","remove_item requires { id: string }");if(!t.items.has(n.id))throw new v("E_REF_NOT_FOUND",`Unknown item "${n.id}"`);e.removeItem(n.id)}}};class pr{constructor(e){X(this,"model");X(this,"session");X(this,"plugins",new fr);this.model=e,this.session=new nr(e),this.assertNodeExists(this.session.at),this.plugins.register(hr),this.model.rules.systems.randomness&&this.plugins.register(mr),this.model.rules.systems.inventory&&this.plugins.register(gr),this.plugins.finalize()}start(){return this.plugins.runHook("onStart",this.session,this.model),this.assertNodeExists(this.session.at),this.getViewModel()}getViewModel(){const e=this.session.at,t=this.getNode(e);return{gameTitle:this.model.manifest.title,sceneId:e.scene,nodeId:e.node,text:Qt(t.text,this.session,this.model,this.plugins),choices:t.choices.filter(s=>!s.if||Ae(s.if,this.session,this.model,this.plugins)).map(s=>({id:s.id,text:this.resolveChoiceText(s.text),enabled:!0})),visibleState:this.session.getVisibleState(),inventory:Array.from(this.session.inventory).map(s=>{const i=this.model.items.get(s);if(!i)throw new v("E_REF_NOT_FOUND",`Inventory contains unknown item "${s}"`);const o=r=>{if(r)return Qt([{key:r}],this.session,this.model,this.plugins)[0]};return{id:s,name:o(i.name)??i.name,description:o(i.description)??i.description}})}}resolveChoiceText(e){if(e.includes("."))try{return Qt([{key:e}],this.session,this.model,this.plugins)[0]}catch{return e}return e}choose(e){const t=this.session.at,i=this.getNode(t).choices.find(r=>r.id===e);if(!i)throw new v("E_RUNTIME_ILLEGAL_CHOICE",`Choice "${e}" not found in node "${t.scene}.${t.node}"`);if(console.groupCollapsed(`[Engine] choose("${e}")`),console.log("From:",t),console.log("Choice:",i),console.log("State before:",this.session.getVisibleState()),this.plugins.runHook("beforeChoice",this.session,this.model),i.if&&!Ae(i.if,this.session,this.model,this.plugins))throw console.warn("Choice condition failed at runtime:",i.if),console.log("State at failure:",this.session.getVisibleState()),console.groupEnd(),new v("E_RUNTIME_ILLEGAL_CHOICE",`Choice "${e}" is not currently available`);const o={scene:i.goto.scene,node:i.goto.node};this.assertNodeExists(o);try{this.plugins.runHook("beforeTransition",this.session,this.model),console.log("Applying effects:",i.effects??[]),ar(i.effects,this.session,this.model,this.plugins),console.log("State after effects:",this.session.getVisibleState()),this.session.move(o,e,t),console.log("Moved to:",this.session.at),this.plugins.runHook("afterTransition",this.session,this.model),this.plugins.runHook("afterChoice",this.session,this.model);const r=this.getViewModel();return console.log("VM:",{sceneId:r.sceneId,nodeId:r.nodeId,choices:r.choices.map(a=>a.id)}),console.groupEnd(),r}catch(r){throw console.error("[Engine] choose crashed:",r),console.log("State at crash:",this.session.getVisibleState()),console.log("At crash nodeRef:",this.session.at),console.groupEnd(),r}}save(){return this.session.save()}load(e){return this.session.load(e),this.assertNodeExists(this.session.at),this.getViewModel()}getNode(e){const t=this.model.scenes.get(e.scene);if(!t)throw new v("E_REF_NOT_FOUND_SCENE",`Scene "${e.scene}" not found`);const s=t.nodes.get(e.node);if(!s)throw new v("E_REF_NOT_FOUND_NODE",`Node "${e.node}" not found in scene "${e.scene}"`);return s}assertNodeExists(e){this.getNode(e)}getCurrentNodeRef(){return this.session.at}getFullState(){return this.session.save().state}getHistory(){return this.session.history}getAllScenes(){return this.model.scenes}getInventory(){return Array.from(this.session.inventory).map(e=>{const t=this.model.items.get(e);return{id:e,name:t.name,description:t.description}})}}const Fe=[];function yr(n,e=J){let t;const s=new Set;function i(a){if(lt(n,a)&&(n=a,t)){const c=!Fe.length;for(const l of s)l[1](),Fe.push(l,n);if(c){for(let l=0;l<Fe.length;l+=2)Fe[l][0](Fe[l+1]);Fe.length=0}}}function o(a){i(a(n))}function r(a,c=J){const l=[a,c];return s.add(l),s.size===1&&(t=e(i,o)||J),a(n),()=>{s.delete(l),s.size===0&&t&&(t(),t=null)}}return{set:i,update:o,subscribe:r}}const ye=yr({engine:null,viewModel:null});function xn(n,e,t){const s=n.slice();return s[4]=e[t][0],s[5]=e[t][1],s}function Vn(n,e,t){const s=n.slice();return s[8]=e[t],s}function Yn(n){var Nn,In;let e,t,s,i,o,r,a,c=((Nn=n[1].viewModel)==null?void 0:Nn.sceneId)+"",l,u,f=((In=n[1].viewModel)==null?void 0:In.nodeId)+"",m,h,y,d,g,_,S,E=JSON.stringify(n[1].engine.getFullState(),null,2)+"",N,I,$,w,p,k,O,R=JSON.stringify(n[1].engine.getInventory(),null,2)+"",P,U,se,j,oe,K,Se,re=JSON.stringify(n[1].engine.getHistory(),null,2)+"",W,T,C,B,Q,Qe,De=ce(Array.from(n[1].engine.getAllScenes().entries())),Z=[];for(let x=0;x<De.length;x+=1)Z[x]=Hn(xn(n,De,x));return{c(){e=A("div"),t=A("h3"),t.textContent="DEBUG PANEL",s=q(),i=A("section"),o=A("strong"),o.textContent="Current Node:",r=q(),a=A("div"),l=F(c),u=F(`.
        `),m=F(f),h=q(),y=A("section"),d=A("strong"),d.textContent="State:",g=q(),_=A("pre"),S=F(""),N=F(E),I=F(`
      `),$=q(),w=A("section"),p=A("strong"),p.textContent="Inventory:",k=q(),O=A("pre"),P=F(R),U=q(),se=A("section"),j=A("strong"),j.textContent="History:",oe=q(),K=A("pre"),Se=F(""),W=F(re),T=F(`
      `),C=q(),B=A("section"),Q=A("strong"),Q.textContent="Jump To:",Qe=q();for(let x=0;x<Z.length;x+=1)Z[x].c();D(i,"class","svelte-1lq35cb"),D(y,"class","svelte-1lq35cb"),D(w,"class","svelte-1lq35cb"),D(se,"class","svelte-1lq35cb"),D(B,"class","svelte-1lq35cb"),D(e,"class","debug svelte-1lq35cb")},m(x,pe){z(x,e,pe),b(e,t),b(e,s),b(e,i),b(i,o),b(i,r),b(i,a),b(a,l),b(a,u),b(a,m),b(e,h),b(e,y),b(y,d),b(y,g),b(y,_),b(_,S),b(_,N),b(_,I),b(e,$),b(e,w),b(w,p),b(w,k),b(w,O),b(O,P),b(e,U),b(e,se),b(se,j),b(se,oe),b(se,K),b(K,Se),b(K,W),b(K,T),b(e,C),b(e,B),b(B,Q),b(B,Qe);for(let Ne=0;Ne<Z.length;Ne+=1)Z[Ne]&&Z[Ne].m(B,null)},p(x,pe){var Ne,En;if(pe&2&&c!==(c=((Ne=x[1].viewModel)==null?void 0:Ne.sceneId)+"")&&te(l,c),pe&2&&f!==(f=((En=x[1].viewModel)==null?void 0:En.nodeId)+"")&&te(m,f),pe&2&&E!==(E=JSON.stringify(x[1].engine.getFullState(),null,2)+"")&&te(N,E),pe&2&&R!==(R=JSON.stringify(x[1].engine.getInventory(),null,2)+"")&&te(P,R),pe&2&&re!==(re=JSON.stringify(x[1].engine.getHistory(),null,2)+"")&&te(W,re),pe&6){De=ce(Array.from(x[1].engine.getAllScenes().entries()));let ae;for(ae=0;ae<De.length;ae+=1){const Tn=xn(x,De,ae);Z[ae]?Z[ae].p(Tn,pe):(Z[ae]=Hn(Tn),Z[ae].c(),Z[ae].m(B,null))}for(;ae<Z.length;ae+=1)Z[ae].d(1);Z.length=De.length}},d(x){x&&G(e),ct(Z,x)}}}function Gn(n){let e,t=n[8]+"",s,i,o;function r(){return n[3](n[4],n[8])}return{c(){e=A("button"),s=F(t),D(e,"class","svelte-1lq35cb")},m(a,c){z(a,e,c),b(e,s),i||(o=it(e,"click",r),i=!0)},p(a,c){n=a,c&2&&t!==(t=n[8]+"")&&te(s,t)},d(a){a&&G(e),i=!1,o()}}}function Hn(n){let e,t,s=n[4]+"",i,o,r,a=ce(Array.from(n[5].nodes.keys())),c=[];for(let l=0;l<a.length;l+=1)c[l]=Gn(Vn(n,a,l));return{c(){e=A("div"),t=A("strong"),i=F(s),o=q();for(let l=0;l<c.length;l+=1)c[l].c();r=q()},m(l,u){z(l,e,u),b(e,t),b(t,i),b(e,o);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(e,null);b(e,r)},p(l,u){if(u&2&&s!==(s=l[4]+"")&&te(i,s),u&6){a=ce(Array.from(l[5].nodes.keys()));let f;for(f=0;f<a.length;f+=1){const m=Vn(l,a,f);c[f]?c[f].p(m,u):(c[f]=Gn(m),c[f].c(),c[f].m(e,r))}for(;f<c.length;f+=1)c[f].d(1);c.length=a.length}},d(l){l&&G(e),ct(c,l)}}}function _r(n){let e,t=n[0]&&n[1].engine&&Yn(n);return{c(){t&&t.c(),e=ls()},m(s,i){t&&t.m(s,i),z(s,e,i)},p(s,[i]){s[0]&&s[1].engine?t?t.p(s,i):(t=Yn(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:J,o:J,d(s){s&&G(e),t&&t.d(s)}}}function br(n,e,t){let s;as(n,ye,a=>t(1,s=a));let{visible:i=!1}=e;function o(a,c){const l=Xt(ye);if(!l.engine)return;const u=l.engine.save();u.at={scene:a,node:c};const f=l.engine.load(u);ye.set({engine:l.engine,viewModel:f})}const r=(a,c)=>o(a,c);return n.$$set=a=>{"visible"in a&&t(0,i=a.visible)},[i,s,o,r]}class wr extends Dt{constructor(e){super(),Ct(this,e,br,_r,lt,{visible:0})}}function vr(n){let e,t;return{c(){e=A("span"),t=F(n[0])},m(s,i){z(s,e,i),b(e,t)},p(s,[i]){i&1&&te(t,s[0])},i:J,o:J,d(s){s&&G(e)}}}function kr(n,e,t){let{text:s}=e,{speed:i=20}=e,{onComplete:o}=e,r="",a=0,c;Xs(()=>{l()});function l(){c=setInterval(()=>{a<s.length?(t(0,r+=s[a]),a++):(clearInterval(c),o==null||o())},i)}return n.$$set=u=>{"text"in u&&t(1,s=u.text),"speed"in u&&t(2,i=u.speed),"onComplete"in u&&t(3,o=u.onComplete)},[r,s,i,o]}class Sr extends Dt{constructor(e){super(),Ct(this,e,kr,vr,lt,{text:1,speed:2,onComplete:3})}}function Jn(n){let e;return{c(){e=F("_")},m(t,s){z(t,e,s)},d(t){t&&G(e)}}}function Nr(n){let e,t=n[0]&&Jn();return{c(){e=A("span"),t&&t.c(),D(e,"class","cursor svelte-l3cu36")},m(s,i){z(s,e,i),t&&t.m(e,null)},p(s,[i]){s[0]?t||(t=Jn(),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:J,o:J,d(s){s&&G(e),t&&t.d()}}}function Ir(n,e,t){let s=!0;return setInterval(()=>{t(0,s=!s)},500),[s]}class Er extends Dt{constructor(e){super(),Ct(this,e,Ir,Nr,lt,{})}}function zn(n,e,t){const s=n.slice();return s[24]=e[t],s}function Wn(n,e,t){const s=n.slice();return s[27]=e[t],s}function Qn(n,e,t){const s=n.slice();return s[30]=e[t],s[32]=t,s}function Xn(n,e,t){const s=n.slice();return s[21]=e[t],s}function Tr(n){let e,t,s,i,o,r,a,c,l,u,f=[],m=new Map,h,y,d,g,_,S,E,N,I,$,w,p,k,O,R,P=$r(n),U=ce(n[7]);const se=T=>`${T[1]}-${T[32]}`;for(let T=0;T<U.length;T+=1){let C=Qn(n,U,T),B=se(C);m.set(B,f[T]=Zn(B,C))}let j=n[8]&&es(),oe=ce(n[2].viewModel.choices),K=[];for(let T=0;T<oe.length;T+=1)K[T]=ts(Wn(n,oe,T));function Se(T,C){return T[2].viewModel.inventory.length===0?Mr:Dr}let re=Se(n),W=re(n);return p=new wr({props:{visible:n[4]}}),{c(){e=A("div"),t=A("div"),s=A("div"),i=A("h1"),o=F(n[6]),r=q(),a=A("button"),a.textContent="[ Eject Disc ]",c=q(),P&&P.c(),l=q(),u=A("div");for(let T=0;T<f.length;T+=1)f[T].c();h=q(),j&&j.c(),y=q(),d=A("div");for(let T=0;T<K.length;T+=1)K[T].c();g=q(),_=A("div"),S=A("h3"),S.textContent="Inventory",E=q(),W.c(),N=q(),I=A("div"),$=A("button"),$.textContent="[ Toggle Debug ]",w=q(),ln(p.$$.fragment),D(a,"class","eject svelte-16ktxkk"),D(s,"class","title-row svelte-16ktxkk"),D(t,"class","header"),D(u,"class","content"),D(d,"class","choices svelte-16ktxkk"),D(_,"class","inventory svelte-16ktxkk"),D(I,"class","controls svelte-16ktxkk"),D(e,"class","terminal svelte-16ktxkk")},m(T,C){z(T,e,C),b(e,t),b(t,s),b(s,i),b(i,o),b(s,r),b(s,a),b(t,c),P&&P.m(t,null),b(e,l),b(e,u);for(let B=0;B<f.length;B+=1)f[B]&&f[B].m(u,null);b(u,h),j&&j.m(u,null),b(e,y),b(e,d);for(let B=0;B<K.length;B+=1)K[B]&&K[B].m(d,null);b(e,g),b(e,_),b(_,S),b(_,E),W.m(_,null),b(e,N),b(e,I),b(I,$),z(T,w,C),$t(p,T,C),k=!0,O||(R=[it(a,"click",n[12]),it($,"click",n[17])],O=!0)},p(T,C){if((!k||C[0]&64)&&te(o,T[6]),P.p(T,C),C[0]&17027&&(U=ce(T[7]),It(),f=ii(f,C,se,1,T,U,m,u,si,Zn,h,Qn),Et()),T[8]?j?C[0]&256&&ie(j,1):(j=es(),j.c(),ie(j,1),j.m(u,null)):j&&(It(),de(j,1,1,()=>{j=null}),Et()),C[0]&8196){oe=ce(T[2].viewModel.choices);let Q;for(Q=0;Q<oe.length;Q+=1){const Qe=Wn(T,oe,Q);K[Q]?K[Q].p(Qe,C):(K[Q]=ts(Qe),K[Q].c(),K[Q].m(d,null))}for(;Q<K.length;Q+=1)K[Q].d(1);K.length=oe.length}re===(re=Se(T))&&W?W.p(T,C):(W.d(1),W=re(T),W&&(W.c(),W.m(_,null)));const B={};C[0]&16&&(B.visible=T[4]),p.$set(B)},i(T){if(!k){for(let C=0;C<U.length;C+=1)ie(f[C]);ie(j),ie(p.$$.fragment,T),k=!0}},o(T){for(let C=0;C<f.length;C+=1)de(f[C]);de(j),de(p.$$.fragment,T),k=!1},d(T){T&&(G(e),G(w)),P&&P.d();for(let C=0;C<f.length;C+=1)f[C].d();j&&j.d(),ct(K,T),W.d(),Lt(p,T),O=!1,Le(R)}}}function Or(n){let e,t,s,i,o=ce(n[10]),r=[];for(let a=0;a<o.length;a+=1)r[a]=ss(Xn(n,o,a));return{c(){e=A("div"),t=A("h1"),t.textContent="Insert Game Disc",s=q(),i=A("div");for(let a=0;a<r.length;a+=1)r[a].c();D(i,"class","choices svelte-16ktxkk"),D(e,"class","terminal svelte-16ktxkk")},m(a,c){z(a,e,c),b(e,t),b(e,s),b(e,i);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(i,null)},p(a,c){if(c[0]&3072){o=ce(a[10]);let l;for(l=0;l<o.length;l+=1){const u=Xn(a,o,l);r[l]?r[l].p(u,c):(r[l]=ss(u),r[l].c(),r[l].m(i,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=o.length}},i:J,o:J,d(a){a&&G(e),ct(r,a)}}}function Ar(n){let e,t,s;return{c(){e=A("div"),t=A("pre"),s=F(n[3]),D(t,"class","error svelte-16ktxkk"),D(e,"class","terminal svelte-16ktxkk")},m(i,o){z(i,e,o),b(e,t),b(t,s)},p(i,o){o[0]&8&&te(s,i[3])},i:J,o:J,d(i){i&&G(e)}}}function $r(n){let e,t,s=n[2].viewModel.sceneId+"",i,o,r=n[2].viewModel.nodeId+"",a;return{c(){e=A("div"),t=A("i"),i=F(s),o=F("."),a=F(r),D(e,"class","node")},m(c,l){z(c,e,l),b(e,t),b(t,i),b(t,o),b(t,a)},p(c,l){l[0]&4&&s!==(s=c[2].viewModel.sceneId+"")&&te(i,s),l[0]&4&&r!==(r=c[2].viewModel.nodeId+"")&&te(a,r)},d(c){c&&G(e)}}}function Lr(n){let e,t;return e=new Sr({props:{text:n[30],speed:n[9],onComplete:n[32]===n[7].length-1?n[14]:void 0}}),{c(){ln(e.$$.fragment)},m(s,i){$t(e,s,i),t=!0},p(s,i){const o={};i[0]&128&&(o.text=s[30]),i[0]&512&&(o.speed=s[9]),i[0]&128&&(o.onComplete=s[32]===s[7].length-1?s[14]:void 0),e.$set(o)},i(s){t||(ie(e.$$.fragment,s),t=!0)},o(s){de(e.$$.fragment,s),t=!1},d(s){Lt(e,s)}}}function Cr(n){let e,t=n[30]+"",s;return{c(){e=A("span"),s=F(t)},m(i,o){z(i,e,o),b(e,s)},p(i,o){o[0]&128&&t!==(t=i[30]+"")&&te(s,t)},i:J,o:J,d(i){i&&G(e)}}}function Zn(n,e){let t,s,i,o;const r=[Cr,Lr],a=[];function c(l,u){return l[0]?0:1}return s=c(e),i=a[s]=r[s](e),{key:n,first:null,c(){t=A("p"),i.c(),this.first=t},m(l,u){z(l,t,u),a[s].m(t,null),o=!0},p(l,u){e=l;let f=s;s=c(e),s===f?a[s].p(e,u):(It(),de(a[f],1,1,()=>{a[f]=null}),Et(),i=a[s],i?i.p(e,u):(i=a[s]=r[s](e),i.c()),ie(i,1),i.m(t,null))},i(l){o||(ie(i),o=!0)},o(l){de(i),o=!1},d(l){l&&G(t),a[s].d()}}}function es(n){let e,t;return e=new Er({}),{c(){ln(e.$$.fragment)},m(s,i){$t(e,s,i),t=!0},i(s){t||(ie(e.$$.fragment,s),t=!0)},o(s){de(e.$$.fragment,s),t=!1},d(s){Lt(e,s)}}}function ts(n){let e,t,s=n[27].text+"",i,o,r,a,c;function l(){return n[16](n[27])}return{c(){e=A("button"),t=F("> "),i=F(s),o=q(),e.disabled=r=!n[27].enabled,D(e,"class","svelte-16ktxkk")},m(u,f){z(u,e,f),b(e,t),b(e,i),b(e,o),a||(c=it(e,"click",l),a=!0)},p(u,f){n=u,f[0]&4&&s!==(s=n[27].text+"")&&te(i,s),f[0]&4&&r!==(r=!n[27].enabled)&&(e.disabled=r)},d(u){u&&G(e),a=!1,c()}}}function Dr(n){let e,t=ce(n[2].viewModel.inventory),s=[];for(let i=0;i<t.length;i+=1)s[i]=ns(zn(n,t,i));return{c(){e=A("ul");for(let i=0;i<s.length;i+=1)s[i].c()},m(i,o){z(i,e,o);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(e,null)},p(i,o){if(o[0]&4){t=ce(i[2].viewModel.inventory);let r;for(r=0;r<t.length;r+=1){const a=zn(i,t,r);s[r]?s[r].p(a,o):(s[r]=ns(a),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=t.length}},d(i){i&&G(e),ct(s,i)}}}function Mr(n){let e;return{c(){e=A("p"),e.textContent="(empty)",D(e,"class","muted svelte-16ktxkk")},m(t,s){z(t,e,s)},p:J,d(t){t&&G(e)}}}function ns(n){let e,t=n[24].name+"",s,i,o;return{c(){e=A("li"),s=F(t),i=q(),D(e,"title",o=n[24].description)},m(r,a){z(r,e,a),b(e,s),b(e,i)},p(r,a){a[0]&4&&t!==(t=r[24].name+"")&&te(s,t),a[0]&4&&o!==(o=r[24].description)&&D(e,"title",o)},d(r){r&&G(e)}}}function ss(n){let e,t,s;function i(){return n[15](n[21])}return{c(){e=A("button"),e.textContent=`> ${n[21].title} `,D(e,"class","svelte-16ktxkk")},m(o,r){z(o,e,r),t||(s=it(e,"click",i),t=!0)},p(o,r){n=o},d(o){o&&G(e),t=!1,s()}}}function Pr(n){let e,t,s,i;const o=[Ar,Or,Tr],r=[];function a(c,l){return c[3]?0:c[5]?c[2].viewModel?2:-1:1}return~(e=a(n))&&(t=r[e]=o[e](n)),{c(){t&&t.c(),s=ls()},m(c,l){~e&&r[e].m(c,l),z(c,s,l),i=!0},p(c,l){let u=e;e=a(c),e===u?~e&&r[e].p(c,l):(t&&(It(),de(r[u],1,1,()=>{r[u]=null}),Et()),~e?(t=r[e],t?t.p(c,l):(t=r[e]=o[e](c),t.c()),ie(t,1),t.m(s.parentNode,s)):t=null)},i(c){i||(ie(t),i=!0)},o(c){de(t),i=!1},d(c){c&&G(s),~e&&r[e].d(c)}}}function Br(n,e,t){let s;as(n,ye,p=>t(2,s=p));let i=null,o=!1,r=null,a=null,c=[],l=0,u=!1,f=10,m=!1,h=null;const y=qo(),d=[];for(const[p,k]of Object.entries(y))try{const O=we(k.raw.game,"game.yaml").value;d.push({id:p,title:O.game.title})}catch{}function g(p){try{const k=y[p];if(!k)throw new Error(`Game "${p}" not found`);const O=k.raw,R=we(O.game,"game.yaml").value,P=we(O.rules,"rules.yaml").value,U=we(O.state,"state.yaml").value,se=we(O.items,"items.yaml").value,j={};for(const[T,C]of Object.entries(O.scenes))j[T]=we(C,`scenes/${T}`).value;N(R.game.ui.text_speed);const oe={};for(const[T,C]of Object.entries(O.localization)){const B=T.replace(/\.ya?ml$/,"");oe[B]=we(C,`localization/${T}`).value}const K={manifest:R,rules:P,state:U,items:se,scenes:j,localization:oe};Ro(K);const Se=Qo(K),re=new pr(Se),W=re.start();ye.set({engine:re,viewModel:W}),t(5,r=p),t(6,a=R.game.title),t(3,i=null)}catch(k){t(3,i=k instanceof Error?k.toString():String(k))}}function _(){t(5,r=null),t(6,a=null),ye.set({engine:null,viewModel:null})}function S(p){const k=Xt(ye);if(k.engine)try{console.groupCollapsed(`[UI] choose("${p}")`),console.log("Before:",{at:k.engine.getCurrentNodeRef(),visibleState:k.engine.getFullState()});const O=k.engine.choose(p);console.log("After:",{at:k.engine.getCurrentNodeRef(),visibleState:k.engine.getFullState(),vm:{sceneId:O.sceneId,nodeId:O.nodeId,choices:O.choices.map(R=>R.id)}}),ye.set({engine:k.engine,viewModel:O}),t(3,i=null)}catch(O){console.error("[UI] choose failed:",O),t(3,i=O instanceof Error?O.toString():String(O))}finally{console.groupEnd()}}function E(){const p=Xt(ye).viewModel;!p||`${p.sceneId}:${p.nodeId}`!==h||(l++,l<p.text.length?t(7,c=[...c,p.text[l]]):t(8,u=!1))}function N(p){if(t(0,m=!1),typeof p=="number"){t(9,f=Math.max(0,p)),f===0&&t(0,m=!0);return}switch(p){case"slow":t(9,f=40);break;case"normal":t(9,f=20);break;case"fast":t(9,f=10);break;case"instant":t(9,f=0),t(0,m=!0);break;default:t(9,f=20)}}const I=p=>g(p.id),$=p=>S(p.id),w=()=>t(4,o=!o);return n.$$.update=()=>{if(n.$$.dirty[0]&7&&s.viewModel){const p=s.viewModel,k=`${p.sceneId}:${p.nodeId}`;if(k!==h){t(1,h=k);const O=p.text;t(7,c=[]),l=0,O.length>0?(t(7,c=[O[0]]),t(8,u=!m)):t(8,u=!1)}}},[m,h,s,i,o,r,a,c,u,f,d,g,_,S,E,I,$,w]}class Fr extends Dt{constructor(e){super(),Ct(this,e,Br,Pr,lt,{},null,[-1,-1])}}new Fr({target:document.getElementById("app")});
